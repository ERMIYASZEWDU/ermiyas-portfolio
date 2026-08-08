/**
 * CHATBOT RESPONSE GENERATOR
 * 
 * Generates intelligent responses based on REAL portfolio data
 * Automatically adapts when portfolio content changes
 */

import type { PortfolioKnowledge } from './portfolioExtractor';

export function generateResponse(userMessage: string, knowledge: PortfolioKnowledge): string {
  const msg = userMessage.toLowerCase();

  // Greetings
  if (msg.match(/\b(hi|hello|hey|greetings|good morning|good afternoon|sup)\b/)) {
    return `Hello! 👋 I'm **ErmiAI**, ${knowledge.personal.name}'s Portfolio Assistant.\n\nI can help you learn about:\n• His background and ${knowledge.projects.length} ML/AI projects\n• Technical skills (${knowledge.skills.allSkills.length}+ technologies)\n• Education and ${knowledge.certifications.length} certifications\n• Professional experience\n• Contact information\n\nWhat would you like to know?`;
  }

  // Thank you
  if (msg.match(/\b(thank|thanks|appreciate)\b/)) {
    return `You're welcome! 😊 Feel free to ask me anything else about Ermiyas's portfolio!`;
  }

  // Who is Ermiyas / About
  if (msg.match(/\b(who|about|tell me about|introduce)\b/)) {
    return `👨‍💻 **About ${knowledge.personal.name}**\n\n${knowledge.personal.bio}\n\n**Currently:** ${knowledge.experience[0].role} at ${knowledge.experience[0].company}\n\n**Studying:** ${knowledge.education[0].degree} at ${knowledge.education[0].institution}`;
  }

  // Skills
  if (msg.match(/\b(skill|technology|tech|what (?:can|does) (?:he|you) (?:know|do))\b/) && !msg.match(/project/)) {
    const categories = knowledge.skills.categories.slice(0, 4);
    return `💻 **Technical Skills** (${knowledge.skills.allSkills.length}+ technologies)\n\n${categories.map(cat => 
      `**${cat.category}:**\n${cat.skills.map(s => `  • ${s.name}`).join('\n')}`
    ).join('\n\n')}\n\n...and more! His primary language is **Python** (${knowledge.github.languages[0].percentage}% of GitHub code).`;
  }

  // Projects
  if (msg.match(/\b(project|work|portfolio|built|created|developed)\b/) && !msg.match(/\b(best|favorite)\b/)) {
    const projects = knowledge.projects.slice(0, 6);
    return `🚀 **Featured Projects** (${knowledge.projects.length} total)\n\n${projects.map((p, i) => 
      `**${i + 1}. ${p.title}**\n${p.solution.substring(0, 80)}...\n💡 ${p.tech.slice(0, 3).join(', ')}\n🔗 ${p.github}`
    ).join('\n\n')}`;
  }

  // Best project
  if (msg.match(/\b(best|favorite|top|coolest)\b.*project/)) {
    const p = knowledge.projects[0];
    return `🌟 **${p.title}**\n\n**Problem:**\n${p.problem}\n\n**Solution:**\n${p.solution}\n\n**Tech:** ${p.tech.join(', ')}\n**GitHub:** ${p.github}`;
  }

  // AI/ML specific
  if (msg.match(/\b(ai|artificial intelligence|machine learning|ml|deep learning)\b/)) {
    const mlProjects = knowledge.projects.filter(p => p.category.toLowerCase().includes('machine') || p.category.toLowerCase().includes('ai'));
    return `🤖 **AI & Machine Learning**\n\nErmiyas specializes in ML with ${mlProjects.length} projects:\n\n${mlProjects.slice(0, 3).map(p => `• ${p.title}`).join('\n')}\n\n**ML Skills:** ${knowledge.skills.categories.find(c => c.category.includes('AI'))?.skills.map(s => s.name).join(', ')}\n\n🎓 Studying ${knowledge.education[0].degree}`;
  }

  // Education
  if (msg.match(/\b(education|study|degree|university|college)\b/)) {
    return `🎓 **Education**\n\n${knowledge.education.map(edu => 
      `**${edu.degree}** (${edu.status})\n${edu.institution} - ${edu.program}\n${edu.period}\n${edu.description}`
    ).join('\n\n')}`;
  }

  // Experience
  if (msg.match(/\b(experience|work|job|employment|career)\b/) && !msg.match(/project/)) {
    const exp = knowledge.experience[0];
    return `💼 **${exp.role}** at **${exp.company}**\n${exp.period}\n\n${exp.description}\n\n**Responsibilities:**\n${exp.responsibilities.slice(0, 3).map(r => `• ${r}`).join('\n')}\n\n**Tech:** ${exp.technologies.join(', ')}`;
  }

  // Certifications
  if (msg.match(/\b(certification|certificate|course|credential)\b/)) {
    return `📜 **Certifications** (${knowledge.certifications.length})\n\n${knowledge.certifications.map(c => 
      `${c.badge} ${c.title} - ${c.issuer} (${c.date})`
    ).join('\n')}`;
  }

  // Contact
  if (msg.match(/\b(contact|email|phone|reach|message|hire)\b/)) {
    return `📧 **Contact ${knowledge.personal.name}**\n\n**Email:** ${knowledge.contact.email}\n**Phone:** ${knowledge.contact.phone}\n**Location:** ${knowledge.contact.location}\n\n**Social:**\n🔗 ${knowledge.contact.github}\n🔗 ${knowledge.contact.linkedin}\n\n**Status:** ${knowledge.contact.availability}`;
  }

  // GitHub
  if (msg.match(/\b(github|repository|repo|code)\b/)) {
    return `💻 **GitHub: ${knowledge.contact.github}**\n\n${knowledge.github.stats.map(s => `• ${s.label}: ${s.value}`).join('\n')}\n\n**Languages:** ${knowledge.github.languages.slice(0, 3).map(l => `${l.name} (${l.percentage}%)`).join(', ')}`;
  }

  // Resume
  if (msg.match(/\b(resume|cv|download)\b/)) {
    return `📄 **Resume**\n\nDownload: /Ermiyas_Resume.pdf\n\nOr scroll to the Hero section and click the Resume button!`;
  }

  // Everything/Overview
  if (msg.match(/\b(everything|all|overview|summary|complete)\b/)) {
    return `📋 **${knowledge.personal.name}** - Complete Overview\n\n${knowledge.personal.title}\n\n🎓 ${knowledge.education[0].degree} (${knowledge.education[0].status})\n💼 ${knowledge.experience[0].role} at ${knowledge.experience[0].company}\n🚀 ${knowledge.projects.length} ML/AI Projects\n💻 ${knowledge.skills.allSkills.length}+ Technologies\n📜 ${knowledge.certifications.length} Certifications\n\nAsk specific questions to learn more!`;
  }

  // Python projects (cross-section example)
  if (msg.match(/python.*project|project.*python/i)) {
    const pythonProjects = knowledge.projects.filter(p => p.tech.some(t => t.toLowerCase().includes('python')));
    return `🐍 **Python Projects** (${pythonProjects.length} found)\n\n${pythonProjects.slice(0, 4).map(p => 
      `• **${p.title}**\n  ${p.tech.join(', ')}`
    ).join('\n\n')}`;
  }

  // Fallback - Don't have that info
  return `🤔 I don't have that specific information in the portfolio.\n\n**I can help with:**\n• "Tell me about Ermiyas"\n• "What are his skills?"\n• "Show me his projects"\n• "What's his experience?"\n• "How can I contact him?"\n\n📧 Or contact directly: ${knowledge.contact.email}`;
}
