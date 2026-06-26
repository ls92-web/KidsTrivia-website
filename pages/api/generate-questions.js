// Simple in-memory rate limiter: max 10 requests per IP per minute (question gen is expensive)
const _rateMap = new Map();
function checkRate(ip) {
  const now = Date.now();
  const window = 60_000;
  const limit  = 10;
  const entry  = _rateMap.get(ip) || { count: 0, start: now };
  if (now - entry.start > window) { entry.count = 0; entry.start = now; }
  entry.count++;
  _rateMap.set(ip, entry);
  return entry.count <= limit;
}

// Allowlist of valid game IDs
const VALID_GAME_IDS = new Set([
  'guess-what','act-it-out','draw-guess','minute-challenge','would-you-rather',
  'brain-teasers','memory-challenge','emoji-stories','science-fun',
  'nature-detectives','build-a-story','mystery-box','superpower-challenges',
  'picture-puzzles','family-knowledge','sibling-challenge',
]);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // Rate limit
  const ip = req.headers['x-forwarded-for']?.split(',')[0].trim() || req.socket.remoteAddress || 'unknown';
  if (!checkRate(ip)) return res.status(429).json({ error: 'Too many requests' });

  const { gameId, gameName, category, count } = req.body || {};

  // Input validation
  if (!gameId || typeof gameId !== 'string') return res.status(400).json({ error: 'gameId is required' });
  if (!VALID_GAME_IDS.has(gameId)) return res.status(400).json({ error: 'Invalid gameId' });

  const safeGameName = (typeof gameName === 'string' ? gameName : '').slice(0, 80) || gameId;
  const safeCategory = (typeof category === 'string' ? category : '').slice(0, 80) || 'General';
  // Cap count between 1 and 10
  const safeCount    = Math.min(10, Math.max(1, Number.isInteger(count) ? count : 5));

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'AI questions not configured' });

  const model = process.env.OPENROUTER_MODEL || 'openai/gpt-oss-120b:free';

  const systemPrompt = `You are a question writer for SpaceKids, a fun trivia game for children aged 5–12.
Generate trivia questions in JSON format.

Each question must have:
- "q": the question text (clear, fun, age-appropriate, plain text only — no HTML)
- "hint": a 1-sentence hint that guides without giving away the answer (plain text only)
- "d": difficulty — "e" (easy, age 5-7), "m" (medium, age 8-10), or "h" (hard, age 11+)
- "a": the answer (concise, 1-5 words, plain text only)

Reply with ONLY a raw JSON array of question objects. No markdown, no explanation, no HTML.
Example: [{"q":"...","hint":"...","d":"e","a":"..."}]`;

  const userPrompt = `Generate ${safeCount} fresh trivia questions for the "${safeGameName}" category (${safeCategory}).
Mix difficulties: include some easy, some medium, some hard.
Make them different from common well-known questions. Be creative and fun!`;

  const controller = new AbortController();
  const timeout    = setTimeout(() => controller.abort(), 15_000);

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
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      return res.status(502).json({ error: 'AI service unavailable' });
    }

    const data = await response.json();
    const raw  = data.choices?.[0]?.message?.content?.trim();
    if (!raw) return res.status(502).json({ error: 'No questions generated' });

    // Strip markdown code fences if model wrapped in ```json ... ```
    const cleaned = raw.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();

    let questions;
    try {
      questions = JSON.parse(cleaned);
    } catch {
      console.error('[generate-questions] invalid JSON from model');
      return res.status(502).json({ error: 'Could not parse AI response' });
    }

    if (!Array.isArray(questions)) {
      return res.status(502).json({ error: 'Unexpected response format' });
    }

    // Sanitize each question field — strip any HTML tags the model may have injected
    const stripHtml = (s) => (typeof s === 'string' ? s.replace(/<[^>]*>/g, '').slice(0, 500) : '');
    const safe = questions
      .filter(q => q && typeof q === 'object' && typeof q.q === 'string' && q.q.trim())
      .map(q => ({
        q:    stripHtml(q.q),
        hint: stripHtml(q.hint),
        d:    ['e','m','h'].includes(q.d) ? q.d : 'm',
        a:    stripHtml(q.a),
      }))
      .slice(0, 10);

    res.status(200).json({ questions: safe });
  } catch (err) {
    clearTimeout(timeout);
    if (err.name === 'AbortError') return res.status(504).json({ error: 'Request timed out' });
    console.error('[generate-questions] error:', err.message);
    res.status(500).json({ error: 'Failed to generate questions' });
  }
}
