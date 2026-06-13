export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { gameId, gameName, category, count = 5 } = req.body;
  if (!gameId) return res.status(400).json({ error: 'gameId is required' });

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'OPENROUTER_API_KEY not set' });

  const model = process.env.OPENROUTER_MODEL || 'openai/gpt-oss-120b:free';

  const systemPrompt = `You are a question writer for SpaceKids, a fun trivia game for children aged 5–12.
Generate trivia questions in JSON format.

Each question must have:
- "q": the question text (clear, fun, age-appropriate)
- "hint": a 1-sentence hint that guides without giving away the answer
- "d": difficulty — "e" (easy, age 5-7), "m" (medium, age 8-10), or "h" (hard, age 11+)
- "a": the answer (concise, 1-5 words)

Reply with ONLY a raw JSON array of question objects. No markdown, no explanation.
Example: [{"q":"...","hint":"...","d":"e","a":"..."}]`;

  const userPrompt = `Generate ${count} fresh trivia questions for the "${gameName}" category (${category}).
Mix difficulties: include some easy, some medium, some hard.
Make them different from common well-known questions. Be creative and fun!`;

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://kids-trivia-website.vercel.app',
        'X-Title': 'SpaceKids Trivia',
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user',   content: userPrompt },
        ],
        max_tokens: 1200,
        temperature: 0.9,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return res.status(502).json({ error: 'OpenRouter error', detail: err });
    }

    const data = await response.json();
    const raw = data.choices?.[0]?.message?.content?.trim();
    if (!raw) return res.status(502).json({ error: 'Empty response from model' });

    // Strip markdown code fences if model wrapped in ```json ... ```
    const cleaned = raw.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();

    let questions;
    try {
      questions = JSON.parse(cleaned);
    } catch {
      return res.status(502).json({ error: 'Model returned invalid JSON', raw });
    }

    if (!Array.isArray(questions)) {
      return res.status(502).json({ error: 'Expected a JSON array', raw });
    }

    res.status(200).json({ questions });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
