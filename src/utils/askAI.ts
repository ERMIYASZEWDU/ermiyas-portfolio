// src/utils/askAI.ts
import { buildContextForQuestion } from './buildPortfolioContext';

export async function pageHintFromLocation(): Promise<string | undefined> {
  try {
    const h = (typeof window !== 'undefined' ? (window.location.hash || window.location.pathname || '') : '').toLowerCase();
    if (h.includes('projects') || h.includes('#projects')) return 'projects';
    if (h.includes('skills') || h.includes('#skills')) return 'skills';
    if (h.includes('education') || h.includes('#education')) return 'education';
    if (h.includes('about') || h.includes('#about')) return 'about';
    if (h.includes('contact') || h.includes('#contact')) return 'contact';
    if (h.includes('experience') || h.includes('#experience')) return 'experience';
    return undefined;
  } catch {
    return undefined;
  }
}

/**
 * askAI - calls the server-side RAG endpoint. Returns assistant text.
 */
export async function askAI(question: string) {
  const pageHint = await pageHintFromLocation();
  const prompt = buildContextForQuestion(question, pageHint as any);

  try {
    const res = await fetch('/api/ai_rag', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, prompt }),
    });
    if (!res.ok) {
      // Try fallback to simple LLM proxy if available
      const text = await res.text();
      console.error('RAG API error', text);
      return "I couldn't get a live AI response right now. I can still answer from the portfolio data locally if you'd like.";
    }
    const json = await res.json();
    return json.answer || "I don't have that information in Ermiyas's portfolio. You can contact him directly for more details.";
  } catch (err) {
    console.error(err);
    return "I couldn't reach the AI service. Please try again later.";
  }
}
