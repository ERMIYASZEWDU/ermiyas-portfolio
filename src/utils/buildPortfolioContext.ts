// src/utils/buildPortfolioContext.ts
import portfolio from '../data/portfolioKnowledge.json';

export type PageHint =
  | 'projects'
  | 'skills'
  | 'education'
  | 'about'
  | 'contact'
  | 'experience'
  | 'certifications'
  | 'all'
  | undefined;

function safeJoin(arr?: any[], joiner = ', ') {
  return Array.isArray(arr) ? arr.filter(Boolean).join(joiner) : '';
}

function sectionToText() {
  const p: any = portfolio as any;
  const parts: string[] = [];

  if (p.personal) {
    parts.push(
      `ABOUT: ${p.personal.name} — ${p.personal.role}. ${p.personal.bio || ''}`
    );
  }

  if (p.education?.length) {
    parts.push(
      'EDUCATION: ' +
        p.education
          .map((e: any) => `${e.degree} — ${e.institution}${e.program ? ' (' + e.program + ')' : ''} — ${e.status || ''}`)
          .join(' | ')
    );
  }

  if (p.experience?.length) {
    parts.push(
      'EXPERIENCE: ' + p.experience.map((ex: any) => `${ex.role} at ${ex.company} — ${ex.status || ''}`).join(' | ')
    );
  }

  if (p.skills) {
    parts.push(
      `SKILLS: Programming: ${safeJoin(p.skills.programming)}; Frontend: ${safeJoin(p.skills.frontend)}; Backend: ${safeJoin(
        p.skills.backend
      )}; Data: ${safeJoin(p.skills.dataScience)}; Tools: ${safeJoin(p.skills.tools)}.`
    );
  }

  if (p.projects?.length) {
    parts.push(
      'PROJECTS: ' +
        p.projects
          .map((proj: any, i: number) => `${i + 1}. ${proj.name} — ${proj.description}. Tech: ${safeJoin(proj.technologies)}. Category: ${proj.category || ''}`)
          .join(' || ')
    );
  }

  if (p.certifications?.length) {
    parts.push('CERTIFICATIONS: ' + p.certifications.map((c: any) => `${c.name} (${c.provider})`).join(' | '));
  }

  if (p.interests?.length) {
    parts.push('INTERESTS: ' + safeJoin(p.interests));
  }

  if (p.contact) {
    const contactParts = [p.contact.message || '', p.contact.email ? `Email: ${p.contact.email}` : '', p.links ? `Links: ${JSON.stringify(p.links)}` : ''];
    parts.push('CONTACT: ' + contactParts.filter(Boolean).join(' • '));
  }

  return parts.join('\n\n');
}

/**
 * Build a prioritized context string for a question, favoring `pageHint` if supplied.
 * This string should be passed (client or server) to an AI model or used by offline responder.
 */
export function buildContextForQuestion(question: string, pageHint?: PageHint) {
  const portfolioText = sectionToText();
  const header = pageHint ? `PRIORITIZE: ${pageHint.toUpperCase()}.` : 'PRIORITIZE: RELEVANT PORTFOLIO INFORMATION.';
  return `${header}\n\nQUESTION: ${question}\n\nPORTFOLIO CONTEXT:\n\n${portfolioText}`;
}
