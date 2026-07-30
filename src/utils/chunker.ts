// src/utils/chunker.ts
export function chunkText(text: string, maxTokens = 500) {
  // naive chunk by characters (approx tokens), preserving sentence boundaries where possible
  const sentences = text.split(/(?<=[.?!])\s+/);
  const chunks: string[] = [];
  let current = '';
  for (const s of sentences) {
    if ((current + ' ' + s).length > maxTokens && current.length > 0) {
      chunks.push(current.trim());
      current = s;
    } else {
      current = (current + ' ' + s).trim();
    }
  }
  if (current.trim()) chunks.push(current.trim());
  return chunks;
}

import portfolio from '../data/portfolioKnowledge.json';

export function createChunksFromPortfolio() {
  const chunks: Array<{ id: string; text: string; metadata: any }> = [];

  // For each top-level section in the portfolio JSON, create a chunk
  if (portfolio.personal) {
    const text = `${portfolio.personal.name || ''} — ${portfolio.personal.role || ''}. ${portfolio.personal.bio || ''}`;
    chunks.push({ id: 'personal', text, metadata: { section: 'About', url: '#about', title: 'About' } });
  }

  if (Array.isArray(portfolio.education)) {
    const text = portfolio.education.map((e: any) => `${e.degree} — ${e.institution} ${e.program ? '(' + e.program + ')' : ''} ${e.status ? '- ' + e.status : ''}`).join('\n');
    chunks.push({ id: 'education', text, metadata: { section: 'Education', url: '#education', title: 'Education' } });
  }

  if (Array.isArray(portfolio.experience)) {
    const text = portfolio.experience.map((ex: any) => `${ex.role} at ${ex.company} ${ex.status ? '- ' + ex.status : ''}`).join('\n');
    chunks.push({ id: 'experience', text, metadata: { section: 'Experience', url: '#experience', title: 'Experience' } });
  }

  if (portfolio.skills) {
    const sk = portfolio.skills;
    const text = `Programming: ${sk.programming?.join(', ') || ''}. Frontend: ${sk.frontend?.join(', ') || ''}. Backend: ${sk.backend?.join(', ') || ''}. Data: ${sk.dataScience?.join(', ') || ''}. Tools: ${sk.tools?.join(', ') || ''}.`;
    chunks.push({ id: 'skills', text, metadata: { section: 'Skills', url: '#skills', title: 'Skills' } });
  }

  if (Array.isArray(portfolio.projects)) {
    portfolio.projects.forEach((p: any, idx: number) => {
      const text = `${p.name} — ${p.description || ''}. Technologies: ${Array.isArray(p.technologies) ? p.technologies.join(', ') : p.technologies || ''}. Category: ${p.category || ''}`;
      chunks.push({ id: `project_${idx}`, text, metadata: { section: 'Projects', url: `#projects`, title: p.name, project: p.name } });
    });
  }

  if (Array.isArray(portfolio.certifications)) {
    const text = portfolio.certifications.map((c: any) => `${c.name} — ${c.provider}`).join('\n');
    chunks.push({ id: 'certifications', text, metadata: { section: 'Certifications', url: '#certifications', title: 'Certifications' } });
  }

  if (portfolio.interests) {
    chunks.push({ id: 'interests', text: `Interests: ${portfolio.interests.join(', ')}`, metadata: { section: 'Interests', url: '#about', title: 'Interests' } });
  }

  if (portfolio.contact) {
    const text = `${portfolio.contact.message || ''} ${portfolio.contact.email ? 'Email: ' + portfolio.contact.email : ''}`;
    chunks.push({ id: 'contact', text, metadata: { section: 'Contact', url: '#contact', title: 'Contact' } });
  }

  // Further files or sections could be indexed here.

  // Optionally chunk large texts further
  const expanded: Array<{ id: string; text: string; metadata: any }> = [];
  for (const c of chunks) {
    const cparts = chunkText(c.text, 600);
    if (cparts.length === 1) expanded.push(c);
    else {
      cparts.forEach((part, i) => expanded.push({ id: `${c.id}_${i}`, text: part, metadata: { ...c.metadata, chunk_index: i } }));
    }
  }

  return expanded;
}
