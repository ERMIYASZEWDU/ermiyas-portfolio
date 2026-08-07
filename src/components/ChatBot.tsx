// ErmiAI Chatbot v2.0 - Production Ready
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import portfolioData from '../data/portfolioKnowledge.json';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape to close chat
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
      // Alt + C to toggle chat
      if (e.altKey && e.key === 'c') {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Welcome message when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(
          `👋 Hi! I'm ErmiAI, your personal guide to Ermiyas Zewdu Assefa's portfolio.\n\nI can help you discover:\n• Technical skills & expertise\n• Professional projects & achievements\n• Education & certifications\n• How to contact him\n\nAsk me anything!`
        );
      }, 500);
    }
  }, [isOpen]);

  const addBotMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'bot',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
    setIsTyping(false);
  };

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const generateResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();

    // Thank you / Appreciation
    if (msg.match(/\b(thank|thanks|appreciate|awesome|great|cool|nice)\b/)) {
      const responses = [
        `You're welcome! 😊 I'm always here to help you learn about Ermiyas. Is there anything else you'd like to know?`,
        `My pleasure! 🎉 Feel free to ask me anything else about Ermiyas's skills, projects, or experience!`,
        `Glad I could help! 💙 Don't hesitate to ask if you have more questions!`,
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }

    // Resume / CV / Download
    if (msg.match(/\b(resume|cv|download|pdf)\b/)) {
      return `📄 **Download Ermiyas's Resume**\n\nYou can download his professional resume in PDF format from the Hero section of the portfolio.`;
    }

    // Availability / Hire / Freelance
    if (msg.match(/\b(available|hire|freelance|work|opportunity|job)\b/) && !msg.match(/\b(contact|email|reach)\b/)) {
      return `💼 **Availability & Opportunities**\n\nErmiyas is currently available for select opportunities. Please check the Contact section to reach out.`;
    }

    // Hobbies / Personal life
    if (msg.match(/\b(hobby|hobbies|free time|personal|fun|life|outside work)\b/)) {
      return `🎯 **Beyond the Code**\n\nErmiyas enjoys personal projects, learning, and building impactful applications.`;
    }

    // Best project / Favorite project
    if (msg.match(/\b(best|favorite|favourite|top|impressive|coolest)\b.*\b(project)\b/)) {
      const topProject = portfolioData.projects[0];
      return `🌟 **Standout Project**\n\n**${topProject.name}** is one of Ermiyas's most impressive projects!\n\n**What makes it special:**\n${topProject.description}`;
    }

    // GitHub / Code / Repository
    if (msg.match(/\b(github|git|code|repository|repo|source)\b/)) {
      return `💻 **GitHub & Code**\n\nErmiyas is active on GitHub with multiple projects showcasing AI, web, and full-stack development.`;
    }

    // Languages spoken (human languages)
    if (msg.match(/\b(language|speak|fluent|tongue)\b/) && !msg.match(/\b(programming|code|tech)\b/)) {
      return `🌍 **Languages**\n\nIf you're asking about human languages, please check the Contact section for preferred languages.`;
    }

    // Strengths / What makes him good
    if (msg.match(/\b(strength|strong|good at|excel|standout|unique)\b/)) {
      return `💪 **Key Strengths**\n\nErmiyas combines AI/ML expertise with full-stack development and a strong foundation in software engineering.`;
    }

    // Tell me everything / Complete overview
    if (msg.match(/\b(everything|all|complete|full|entire|whole|overall|summary|overview)\b/)) {
      return `📋 **Complete Portfolio Overview - Ermiyas Zewdu Assefa**\n\n👨‍💻 **ABOUT:**\n${portfolioData.personal.bio}`;
    }

    // Greetings
    if (msg.match(/\b(hi|hello|hey|greetings)\b/)) {
      return `Hello! 👋 I'm ErmiAI, your personal guide to learning about Ermiyas Zewdu Assefa.`;
    }

    // Who is Ermiyas / About
    if (msg.match(/\b(who|about|tell me about|introduce)\b.*\b(ermiyas|you|him)\b/)) {
      return `👨‍💻 **About Ermiyas Zewdu Assefa**\n\n${portfolioData.personal.bio}`;
    }

    // Skills
    if (msg.match(/\b(skill|technology|tech stack|technologies|programming|languages|what does he know)\b/)) {
      return `💻 **Technical Skills & Expertise**\n\nErmiyas has a comprehensive skill set across multiple domains.`;
    }

    // Projects
    if (msg.match(/\b(project|work|built|created|portfolio|developed)\b/)) {
      const projectsList = portfolioData.projects
        .map(
          (project, idx) =>
            `**${idx + 1}. ${project.name}**\n${project.description}\n💡 Tech: ${project.technologies.join(', ')}`
        )
        .join('\n\n');
      return `🚀 **Featured Projects**\n\nHere are some of Ermiyas's impressive projects:\n\n${projectsList}`;
    }

    // Education
    if (msg.match(/\b(education|study|degree|university|college|school)\b/)) {
      return `🎓 **Educational Background**\n\n**Completed:**\n${portfolioData.education[0].degree}`;
    }

    // Experience
    if (msg.match(/\b(experience|work|job|position|role|employment)\b/)) {
      return `💼 **Professional Experience**\n\n**Current Role:**\n${portfolioData.experience[0].role} at ${portfolioData.experience[0].company}`;
    }

    // Certifications
    if (msg.match(/\b(certification|certificate|course|training|certified)\b/)) {
      const certsList = portfolioData.certifications
        .map((cert) => `✓ ${cert.name} - ${cert.provider}`)
        .join('\n');
      return `📜 **Professional Certifications**\n\nErmiyas has completed multiple certifications:\n\n${certsList}`;
    }

    // Interests
    if (msg.match(/\b(interest|passion|love|enjoy|hobby)\b/)) {
      return `✨ **Areas of Interest & Passion**\n\n${portfolioData.interests.map((interest) => `🔹 ${interest}`).join('\n')}`;
    }

    // Contact
    if (msg.match(/\b(contact|reach|email|phone|connect|hire|get in touch)\b/)) {
      return `📧 **Let's Connect!**\n\n${portfolioData.contact.message}\n\nCheck the Contact section for details.`;
    }

    // AI / Machine Learning specific
    if (msg.match(/\b(ai|artificial intelligence|machine learning|ml|deep learning)\b/)) {
      const aiProjects = portfolioData.projects.filter((p) =>
        p.category.includes('AI')
      );
      return `🤖 **AI & Machine Learning Expertise**\n\nErmiyas has a strong foundation in AI & ML.`;
    }

    // Web Development specific
    if (msg.match(/\b(web|website|frontend|backend|full stack|react)\b/)) {
      return `🌐 **Full Stack Web Development**\n\nErmiyas has comprehensive web development expertise.`;
    }

    // Default fallback
    return `🤔 **I'm here to help you learn about Ermiyas!**\n\nHere are some things you can ask me:\n\n💻 **Technical:**\n• \"What are his skills?\"\n• \"Tell me about his AI experience\"`;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Haptic feedback for mobile devices
    if ('vibrate' in navigator) {
      navigator.vibrate(10); // Short vibration
    }

    // Add user message
    addUserMessage(inputValue);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking and respond
    setTimeout(() => {
      const response = generateResponse(inputValue);
      addBotMessage(response);

      // Haptic feedback when response arrives
      if ('vibrate' in navigator) {
        navigator.vibrate([5, 10, 5]); // Pattern: pause-vibrate-pause-vibrate
      }
    }, 1000 + Math.random() * 1000);
  };

  const handleSuggestedQuestion = (question: string) => {
    // Haptic feedback
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }

    addUserMessage(question);
    setIsTyping(true);
    setShowSuggestions(false);

    setTimeout(() => {
      const response = generateResponse(question);
      addBotMessage(response);

      // Haptic feedback on response
      if ('vibrate' in navigator) {
        navigator.vibrate([5, 10, 5]);
      }
    }, 1000);
  };

  const suggestedQuestions = [
    "Tell me everything",
    "What are his skills?",
    "Show me his projects",
    "What's his education?",
    "What's his experience?",
    "How can I contact him?",
  ];

  const dynamicSuggestions = messages.length > 2 ? [
    "What's his best project?",
    "Is he available for work?",
    "Show me his GitHub",
  ] : suggestedQuestions;

  return (
    <>
      {/* Fixed container mounted to the viewport (bottom-right) */}
      <div id="chatbot-root" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 pointer-events-none">
        <div className="flex flex-col items-end pointer-events-auto">
          {/* Chat Window - appears above the button with ~12px gap (mb-3 = 12px) */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="mb-3 w-[90vw] max-w-[420px] sm:w-[360px] h-[65vh] sm:h-[650px] max-h-[calc(100vh-96px)]"
                style={{ boxSizing: 'border-box' }}
              >
                {/* Glassmorphism Container */}
                <div className="relative w-full h-full bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden flex flex-col">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-5 flex items-center gap-3 shadow-lg">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm border border-white/30">
                      🤖
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg">
                        ErmiAI Assistant
                      </h3>
                      <p className="text-white/90 text-sm flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        Online • Ready to help
                      </p>
                    </div>
                  </div>

                  {/* Messages Container */}
                  <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gradient-to-b from-gray-900/50 to-gray-900/70 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                    {messages.length === 0 && !isTyping && (
                      <div className="text-center text-gray-300 mt-16">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <p className="text-6xl mb-4">👋</p>
                          <p className="text-lg font-semibold mb-2">Welcome to Ermiays_AI!</p>
                          <p className="text-sm text-gray-400">
                            Your guide to learning about Ermiyas
                          </p>
                        </motion.div>
                      </div>
                    )}

                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${
                          message.sender === 'user' ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        <div
                          className={`max-w-[85%] p-4 rounded-2xl ${
                            message.sender === 'user'
                              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                              : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 shadow-md'
                          }`}
                        >
                          <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                          <p className={`text-xs mt-2 ${
                            message.sender === 'user' ? 'text-white/70' : 'text-gray-400'
                          }`}>
                            {new Date(message.timestamp).toLocaleTimeString('en-US', {
                              hour: 'numeric',
                              minute: '2-digit',
                            })}
                          </p>
                        </div>
                      </motion.div>
                    ))}

                    {/* Typing Indicator */}
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-start"
                      >
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-3 rounded-2xl">
                          <div className="flex gap-1">
                            <motion.div
                              className="w-2 h-2 bg-blue-400 rounded-full"
                              animate={{ y: [0, -5, 0] }}
                              transition={{ repeat: Infinity, duration: 0.6 }}
                            />
                            <motion.div
                              className="w-2 h-2 bg-blue-400 rounded-full"
                              animate={{ y: [0, -5, 0] }}
                              transition={{
                                repeat: Infinity,
                                duration: 0.6,
                                delay: 0.2,
                              }}
                            />
                            <motion.div
                              className="w-2 h-2 bg-blue-400 rounded-full"
                              animate={{ y: [0, -5, 0] }}
                              transition={{
                                repeat: Infinity,
                                duration: 0.6,
                                delay: 0.4,
                              }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>

                  {/* Suggested Questions (show only at start) */}
                  {showSuggestions && messages.length <= 1 && (
                    <div className="px-5 py-3 bg-gray-900/40 border-t border-white/10">
                      <p className="text-xs text-gray-400 mb-3 font-semibold">
                        💡 Try asking:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {dynamicSuggestions.slice(0, 3).map((question, idx) => (
                          <motion.button
                            key={idx}
                            onClick={() => handleSuggestedQuestion(question)}
                            className="text-xs px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white transition-all hover:scale-105 hover:border-blue-400"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {question}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Input Area */}
                  <div className="p-4 bg-gray-900/60 border-t border-white/10 backdrop-blur-sm">
                    <div className="flex gap-2 items-center">
                      <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Type your question here..."
                        className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <motion.button
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim()}
                        className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="text-lg">➤</span>
                      </motion.button>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      Press Enter to send • ESC to close • Alt+C to toggle
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Chat Button */}
          <motion.button
            onClick={() => {
              // Haptic feedback on button click
              if ('vibrate' in navigator) {
                navigator.vibrate(15);
              }
              setIsOpen(!isOpen);
            }}
            className="relative z-40 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center text-white pointer-events-auto"
            whileHover={{ scale: 1.06, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
            title="Chat with ErmiAI - Ask about Ermiyas's portfolio (Alt + C)"
          >
            {/* Pulse animation ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-500"
              animate={{
                scale: [1, 1.28, 1],
                opacity: [0.45, 0, 0.45],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />

            <motion.span
              animate={{ rotate: isOpen ? 0 : 360 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              {isOpen ? '✕' : '💬'}
            </motion.span>

            {/* Notification Badge */}
            {!isOpen && messages.length === 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"
              />
            )}
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
