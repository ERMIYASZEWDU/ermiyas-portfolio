// src/utils/offlineResponder.ts
import portfolio from '../data/portfolioKnowledge.json';

export function offlineRespond(question: string) {
  const q = (question || '').toLowerCase();

  if (q.includes('who is') || q.includes('tell me about') || q.includes('who is ermiyas')) {
    return `${portfolio.personal?.name} — ${portfolio.personal?.role}. ${portfolio.personal?.bio || ''}`;
  }

  if (q.includes('education') || q.includes('study')) {
    return portfolio.education?.map((e: any) => `${e.degree} — ${e.institution} ${e.program ? '(' + e.program + ')' : ''} ${e.status ? '- ' + e.status : ''}`).join('\n') || `I couldn't find that information in Ermiyas' portfolio.`;
  }

  if (q.includes('skill') || q.includes('skills') || q.includes('python') || q.includes('react')) {
    const sk = portfolio.skills;
    if (!sk) return `I couldn't find that information in Ermiyas' portfolio.`;
    return `Skills — Programming: ${sk.programming?.join(', ')}; Frontend: ${sk.frontend?.join(', ')}; Data: ${sk.dataScience?.join(', ')}.`;
  }

  if (q.includes('project') || q.includes('projects')) {
    const list = portfolio.projects?.map((p:any) => `${p.name}: ${p.description}`).join('\n\n');
    return list || `I couldn't find that information in Ermiyas' portfolio.`;
  }

  if (q.includes('github')) {
    return `GitHub: ${portfolio.links?.github || 'Not available'}`;
  }

  return `I couldn't find that information in Ermiyas' portfolio.`;
}
