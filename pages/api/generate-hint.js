export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { question, gameName, answer } = req.body;
  if (!question) return res.status(400).json({ error: 'question is required' });

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'OPENROUTER_API_KEY not set' });

  const model = process.env.OPENROUTER_MODEL || 'openai/gpt-oss-120b:free';

  const systemPrompt = `You are a hint writer for a kids trivia game called SpaceKids.
Write a single short hint (1–2 sentences, max 20 words) for a trivia question.
Rules:
- Do NOT give away the answer or any part of it directly
- Use simple words a 6-year-old can understand
- Be playful and encouraging
- Reply with ONLY the hint text, no labels or punctuation outside the sentence`;

  const userPrompt = answer
    ? `Game category: ${gameName || 'Trivia'}\nQuestion: ${question}\nAnswer: ${answer}\n\nWrite a hint that nudges players toward "${answer}" without saying it.`
    : `Game category: ${gameName || 'Trivia'}\nQuestion: ${question}\n\nWrite a helpful hint.`;

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
        max_tokens: 80,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return res.status(502).json({ error: 'OpenRouter error', detail: err });
    }

    const data = await response.json();
    const hint = data.choices?.[0]?.message?.content?.trim();
    if (!hint) return res.status(502).json({ error: 'Empty response from model' });

    res.status(200).json({ hint });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
