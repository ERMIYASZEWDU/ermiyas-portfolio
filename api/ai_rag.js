// api/ai_rag.js
// RAG query endpoint: loads pre-extracted chunks, computes embeddings (cached), retrieves top-K relevant chunks,
// composes a strict system prompt and queries OpenAI Chat Completion. Returns answer + source metadata.

const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const CHUNKS_PATH = path.join(process.cwd(), 'src', 'data', 'chunks.json');
const CACHE_PATH = '/tmp/embeddings_cache.json';

let embeddingsCache = null; // in-memory cache across warm invocations

function cosineSimilarity(a, b) {
  const dot = a.reduce((s, v, i) => s + v * (b[i] || 0), 0);
  const magA = Math.sqrt(a.reduce((s, v) => s + v * v, 0));
  const magB = Math.sqrt(b.reduce((s, v) => s + v * v, 0));
  if (magA === 0 || magB === 0) return 0;
  return dot / (magA * magB);
}

async function getEmbeddingOpenAI(text) {
  const OPENAI_KEY = process.env.OPENAI_API_KEY;
  if (!OPENAI_KEY) throw new Error('OpenAI key not configured');

  const res = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OPENAI_KEY}`,
    },
    body: JSON.stringify({ model: 'text-embedding-3-small', input: text }),
  });
  const j = await res.json();
  if (!res.ok) throw new Error(JSON.stringify(j));
  return j.data[0].embedding;
}

async function ensureCache(chunks) {
  // Try memory cache
  if (embeddingsCache) return embeddingsCache;

  // Try disk cache
  try {
    if (fs.existsSync(CACHE_PATH)) {
      const raw = fs.readFileSync(CACHE_PATH, 'utf8');
      embeddingsCache = JSON.parse(raw);
      return embeddingsCache;
    }
  } catch (e) {
    console.warn('Failed reading cache', e);
  }

  // Build cache: compute embeddings for all chunks
  embeddingsCache = {};
  for (const c of chunks) {
    try {
      const emb = await getEmbeddingOpenAI(c.text);
      embeddingsCache[c.id] = emb;
    } catch (err) {
      console.error('Embedding error for chunk', c.id, err);
      embeddingsCache[c.id] = null;
    }
  }

  // persist to disk (ephemeral on serverless) for warm reuse
  try {
    fs.writeFileSync(CACHE_PATH, JSON.stringify(embeddingsCache), 'utf8');
  } catch (e) {
    console.warn('Failed to write cache', e);
  }

  return embeddingsCache;
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { question } = req.body || {};
  if (!question) {
    res.status(400).json({ error: 'Missing question' });
    return;
  }

  const OPENAI_KEY = process.env.OPENAI_API_KEY;
  if (!OPENAI_KEY) {
    res.status(500).json({ error: 'OpenAI key not configured on the server' });
    return;
  }

  let chunks;
  try {
    const raw = fs.readFileSync(CHUNKS_PATH, 'utf8');
    chunks = JSON.parse(raw);
  } catch (err) {
    console.error('Failed to load chunks', err);
    res.status(500).json({ error: 'Failed to load knowledge chunks' });
    return;
  }

  try {
    const cache = await ensureCache(chunks);
    // compute query embedding
    const qEmb = await getEmbeddingOpenAI(question);

    // score chunks
    const scored = [];
    for (const c of chunks) {
      const emb = cache[c.id];
      if (!emb) continue;
      const score = cosineSimilarity(qEmb, emb);
      scored.push({ chunk: c, score });
    }

    scored.sort((a, b) => b.score - a.score);
    const TOP_K = 4;
    const top = scored.slice(0, TOP_K).filter(s => s.score > 0);

    // if no relevant results above a very small threshold, return the safe fallback
    if (top.length === 0 || top[0].score < 0.05) {
      return res.status(200).json({ answer: "I couldn't find that information in Ermiyas' portfolio.", sources: [] });
    }

    // build context
    const contextText = top.map((t, i) => `Source ${i + 1} - ${t.chunk.metadata.section} / ${t.chunk.metadata.title}\n${t.chunk.text}`).join('\n\n');

    const system = `You are ErmiAI, a concise, professional portfolio assistant for Ermiyas Zewdu Assefa.\nOnly use the information contained in the provided PORTFOLIO CONTEXT. If the requested information is NOT present in the context, reply exactly: "I couldn't find that information in Ermiyas' portfolio." Prioritize the most relevant sources. Provide short, accurate answers and include source references when possible. Do not invent facts.`;

    const userPrompt = `PORTFOLIO CONTEXT:\n${contextText}\n\nQUESTION: ${question}\n\nProvide a concise, factual answer and at the end include SOURCE: with the section/title and a link if available.`;

    // call OpenAI chat completion
    const chatRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: system },
          { role: 'user', content: userPrompt },
        ],
        max_tokens: 700,
        temperature: 0.0,
      }),
    });

    const chatJson = await chatRes.json();
    if (!chatRes.ok) {
      console.error('Chat error', chatJson);
      res.status(502).json({ error: 'LLM error', details: chatJson });
      return;
    }

    const answer = chatJson?.choices?.[0]?.message?.content || '';
    const sources = top.map(t => ({ section: t.chunk.metadata.section, title: t.chunk.metadata.title, url: t.chunk.metadata.url, score: t.score }));

    res.status(200).json({ answer, sources });
  } catch (err) {
    console.error('ai_rag error', err);
    res.status(500).json({ error: String(err) });
  }
};
