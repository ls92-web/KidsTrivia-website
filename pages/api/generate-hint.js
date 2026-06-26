// Simple in-memory rate limiter: max 30 requests per IP per minute
const _rateMap = new Map();
function checkRate(ip) {
  const now = Date.now();
  const window = 60_000;
  const limit  = 30;
  const entry  = _rateMap.get(ip) || { count: 0, start: now };
  if (now - entry.start > window) { entry.count = 0; entry.start = now; }
  entry.count++;
  _rateMap.set(ip, entry);
  return entry.count <= limit;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // Rate limit
  const ip = req.headers['x-forwarded-for']?.split(',')[0].trim() || req.socket.remoteAddress || 'unknown';
  if (!checkRate(ip)) return res.status(429).json({ error: 'Too many requests' });

  const { question, gameName, answer } = req.body || {};

  // Input validation
  if (!question || typeof question !== 'string') return res.status(400).json({ error: 'question is required' });
  if (question.length > 500)   return res.status(400).json({ error: 'question too long' });
  if (gameName  && typeof gameName  !== 'string') return res.status(400).json({ error: 'invalid gameName' });
  if (answer    && typeof answer    !== 'string') return res.status(400).json({ error: 'invalid answer' });

  const safeGameName = (gameName || 'Trivia').slice(0, 80);
  const safeQuestion = question.slice(0, 500);
  const safeAnswer   = (answer  || '').slice(0, 100);

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'AI hints not configured' });

  const model = process.env.OPENROUTER_MODEL || 'openai/gpt-oss-120b:free';

  const systemPrompt = `You are a hint writer for a kids trivia game called SpaceKids.
Write a single short hint (1–2 sentences, max 20 words) for a trivia question.
Rules:
- Do NOT give away the answer or any part of it directly
- Use simple words a 6-year-old can understand
- Be playful and encouraging
- Reply with ONLY the hint text, no labels or punctuation outside the sentence`;

  const userPrompt = safeAnswer
    ? `Game category: ${safeGameName}\nQuestion: ${safeQuestion}\nAnswer: ${safeAnswer}\n\nWrite a hint that nudges players toward the answer without saying it.`
    : `Game category: ${safeGameName}\nQuestion: ${safeQuestion}\n\nWrite a helpful hint.`;

  const controller = new AbortController();
  const timeout    = setTimeout(() => controller.abort(), 10_000);

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
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      return res.status(502).json({ error: 'AI service unavailable' });
    }

    const data = await response.json();
    const hint = data.choices?.[0]?.message?.content?.trim();
    if (!hint) return res.status(502).json({ error: 'No hint generated' });

    res.status(200).json({ hint });
  } catch (err) {
    clearTimeout(timeout);
    if (err.name === 'AbortError') return res.status(504).json({ error: 'Request timed out' });
    console.error('[generate-hint] error:', err.message);
    res.status(500).json({ error: 'Failed to generate hint' });
  }
}
