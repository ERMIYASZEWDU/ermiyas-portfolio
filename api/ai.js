// api/ai.js
// Vercel serverless function that proxies a constrained prompt to OpenAI.
// Ensure OPENAI_API_KEY is set in Vercel environment variables (Project Settings -> Environment Variables).

const fetch = require('node-fetch');

const OPENAI_URL = 'https://api.openai.com/v1/chat/completions';

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { prompt } = req.body || {};
  if (!prompt) {
    res.status(400).json({ error: 'Missing prompt' });
    return;
  }

  const OPENAI_KEY = process.env.OPENAI_API_KEY;
  if (!OPENAI_KEY) {
    res.status(500).json({ error: 'OpenAI key not configured on the server' });
    return;
  }

  // Strict system prompt to prevent hallucination
  const system = `You are ErmiAI, a concise, professional portfolio assistant for Ermiyas Zewdu Assefa.
Only use the information contained in the provided PORTFOLIO CONTEXT.
If the requested information is NOT present in the context, reply exactly: "I don't have that information in Ermiyas's portfolio. You can contact him directly for more details."
Prioritize the section marked in the prompt header. Provide short, accurate answers and include any full URLs included in the context for links. Do not invent facts, dates, or anything not in the context.`;

  try {
    const response = await fetch(OPENAI_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${OPENAI_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: system },
          { role: 'user', content: prompt },
        ],
        temperature: 0.0,
        max_tokens: 700,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      res.status(502).json({ error: data });
      return;
    }
    const answer = data?.choices?.[0]?.message?.content ?? '';
    res.status(200).json({ answer });
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
};
