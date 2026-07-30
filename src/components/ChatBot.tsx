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
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Welcome message when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(
          `👋 Hi! I'm ErmiAI, your personal guide to Ermiyas Zewdu Assefa's portfolio.\n\nI can help you discover:\n• Technical skills & expertise\n• Professional projects & achievements\n• Educational background\n• Work experience\n• Certifications\n\nWhat would you like to know first?`
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

    // Tell me everything / Complete overview
    if (msg.match(/\b(everything|all|complete|full|entire|whole|overall|summary|overview)\b/)) {
      return `📋 **Complete Portfolio Overview - Ermiyas Zewdu Assefa**\n\n👨‍💻 **ABOUT:**\n${portfolioData.personal.bio}\n\n💻 **TECHNICAL SKILLS:**\n• Programming: ${portfolioData.skills.programming.join(', ')}\n• Frontend: ${portfolioData.skills.frontend.join(', ')}\n• Backend: ${portfolioData.skills.backend.join(', ')}\n• AI/Data Science: ${portfolioData.skills.dataScience.join(', ')}\n• Tools: ${portfolioData.skills.tools.join(', ')}\n\n🚀 **PROJECTS:**\n${portfolioData.projects.map((p, i) => `${i + 1}. ${p.name} - ${p.description}`).join('\n')}\n\n🎓 **EDUCATION:**\n• ${portfolioData.education[0].degree} - ${portfolioData.education[0].institution}\n• ${portfolioData.education[1].degree} - ${portfolioData.education[1].institution} (${portfolioData.education[1].program})\n\n💼 **EXPERIENCE:**\n${portfolioData.experience[0].role} at ${portfolioData.experience[0].company}\n\n📜 **CERTIFICATIONS:**\n${portfolioData.certifications.map(c => `• ${c.name} - ${c.provider}`).join('\n')}\n\n✨ **INTERESTS:**\n${portfolioData.interests.join(' • ')}\n\n📧 **CONTACT:**\nScroll to the contact section to get in touch!\n\nWant to know more about any specific area? Just ask! 😊`;
    }

    // Greetings
    if (msg.match(/\b(hi|hello|hey|greetings)\b/)) {
      return `Hello! 👋 I'm ErmiAI, your personal guide to learning about Ermiyas Zewdu Assefa.\n\nI can help you discover his:\n• Technical skills & expertise\n• Professional projects\n• Educational background\n• Work experience\n• Certifications & achievements\n\nWhat would you like to know first?`;
    }

    // Who is Ermiyas / About
    if (msg.match(/\b(who|about|tell me about|introduce)\b.*\b(ermiyas|you|him)\b/)) {
      return `👨‍💻 **About Ermiyas Zewdu Assefa**\n\n${portfolioData.personal.bio}\n\n🎓 **Education Background:**\n• ${portfolioData.education[0].degree} - ${portfolioData.education[0].institution}\n• Currently: ${portfolioData.education[1].degree} at ${portfolioData.education[1].institution} (${portfolioData.education[1].program})\n\n💼 **Current Position:**\n${portfolioData.experience[0].role} at ${portfolioData.experience[0].company}\n\n✨ His passion lies in building innovative AI solutions and modern web applications!`;
    }

    // Skills
    if (msg.match(/\b(skill|technology|tech stack|technologies|programming|languages|what does he know)\b/)) {
      return `💻 **Technical Skills & Expertise**\n\nErmiyas has a comprehensive skill set across multiple domains:\n\n**Programming Languages:**\n${portfolioData.skills.programming.join(' • ')}\n\n**Frontend Development:**\n${portfolioData.skills.frontend.join(' • ')}\n\n**Backend Development:**\n${portfolioData.skills.backend.join(' • ')}\n\n**Data Science & AI:**\n${portfolioData.skills.dataScience.join(' • ')}\n\n**Development Tools:**\n${portfolioData.skills.tools.join(' • ')}\n\nThis diverse skill set enables him to build complete, end-to-end solutions!`;
    }

    // Projects
    if (msg.match(/\b(project|work|built|created|portfolio|developed)\b/)) {
      const projectsList = portfolioData.projects
        .map(
          (project, idx) =>
            `**${idx + 1}. ${project.name}**\n${project.description}\n💡 Tech: ${project.technologies.join(', ')}`
        )
        .join('\n\n');
      return `🚀 **Featured Projects**\n\nHere are some of Ermiyas's impressive projects:\n\n${projectsList}\n\nEach project demonstrates his ability to combine AI, web technologies, and practical problem-solving!`;
    }

    // Education
    if (msg.match(/\b(education|study|degree|university|college|school)\b/)) {
      return `🎓 **Educational Background**\n\n**Completed:**\n${portfolioData.education[0].degree}\n${portfolioData.education[0].institution}\n\n**Currently Pursuing:**\n${portfolioData.education[1].degree}\n${portfolioData.education[1].institution}\nProgram: ${portfolioData.education[1].program}\n\nThis advanced program focuses on cutting-edge AI and data engineering, preparing him for the future of technology!`;
    }

    // Experience
    if (msg.match(/\b(experience|work|job|position|role|employment)\b/)) {
      return `💼 **Professional Experience**\n\n**Current Role:**\n${portfolioData.experience[0].role}\n${portfolioData.experience[0].company}\n\n**What He Does:**\nErmiyas provides comprehensive IT support while applying his development expertise in real-world scenarios. This role combines:\n\n• Technical problem-solving\n• System administration\n• Software development\n• Client communication\n\nHis unique blend of IT support and development skills makes him a versatile tech professional!`;
    }

    // Certifications
    if (msg.match(/\b(certification|certificate|course|training|certified)\b/)) {
      const certsList = portfolioData.certifications
        .map((cert) => `✓ ${cert.name} - ${cert.provider}`)
        .join('\n');
      return `📜 **Professional Certifications**\n\nErmiyas has completed multiple Udacity certifications:\n\n${certsList}\n\nThese certifications demonstrate his commitment to continuous learning and staying current with industry best practices!`;
    }

    // Interests
    if (msg.match(/\b(interest|passion|love|enjoy|hobby)\b/)) {
      return `✨ **Areas of Interest & Passion**\n\n${portfolioData.interests.map((interest) => `🔹 ${interest}`).join('\n')}\n\n**What Drives Him:**\nErmiyas is passionate about leveraging AI and modern technologies to solve real-world problems. He enjoys building intelligent systems that make a difference and creating seamless user experiences through full-stack development!\n\nHis goal is to be at the forefront of AI innovation while making technology accessible and useful for everyone.`;
    }

    // Contact
    if (msg.match(/\b(contact|reach|email|phone|connect|hire|get in touch)\b/)) {
      return `📧 **Let's Connect!**\n\n${portfolioData.contact.message}\n\n**How to Reach Out:**\n• Scroll down to the Contact section on this page\n• Fill out the contact form\n• Send your message directly\n\nErmiyas is open to:\n✓ Job opportunities\n✓ Collaboration on projects\n✓ Freelance work\n✓ Technical discussions\n✓ Networking\n\nLooking forward to hearing from you!`;
    }

    // AI / Machine Learning specific
    if (msg.match(/\b(ai|artificial intelligence|machine learning|ml|deep learning)\b/)) {
      const aiProjects = portfolioData.projects.filter((p) =>
        p.category.includes('AI')
      );
      return `🤖 **AI & Machine Learning Expertise**\n\nErmiyas has a strong foundation and passion for AI!\n\n**Technical Skills:**\n${portfolioData.skills.dataScience.join(' • ')}\n\n**AI-Powered Projects:**\n${aiProjects.map((p) => `🔹 ${p.name}\n   ${p.description}`).join('\n\n')}\n\n**Academic Focus:**\nCurrently pursuing ${portfolioData.education[1].degree} at ${portfolioData.education[1].institution}, diving deep into:\n• Intelligent data processing\n• Advanced ML algorithms\n• AI system architecture\n• Real-world AI applications\n\nHis approach combines theoretical knowledge with practical implementation!`;
    }

    // Web Development specific
    if (msg.match(/\b(web|website|frontend|backend|full stack|react)\b/)) {
      return `🌐 **Full Stack Web Development**\n\nErmiyas has comprehensive web development expertise!\n\n**Frontend Technologies:**\n${portfolioData.skills.frontend.join(' • ')}\n\n**Backend Technologies:**\n${portfolioData.skills.backend.join(' • ')}\n\n**Programming Languages:**\n${portfolioData.skills.programming.join(' • ')}\n\n**Web Projects Built:**\n🔹 Web-based Attendance Management System\n🔹 Online Voting System\n🔹 School Management System\n🔹 Face Recognition Attendance (Full Stack + AI)\n\nHe can handle everything from responsive UI/UX design to robust backend architecture and database management!`;
    }

    // Default fallback
    return `🤔 **I'm here to help you learn about Ermiyas!**\n\nHere are some things you can ask me:\n\n💻 **Technical:**\n• "What are his skills?"\n• "Tell me about his AI experience"\n• "What web technologies does he use?"\n\n🚀 **Projects:**\n• "Show me his projects"\n• "What has he built?"\n\n🎓 **Background:**\n• "What's his education?"\n• "Tell me about his experience"\n• "What certifications does he have?"\n\n📧 **Connect:**\n• "How can I contact him?"\n• "How do I reach out?"\n\nFeel free to ask anything about Ermiyas's professional background!`;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    addUserMessage(inputValue);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking and respond
    setTimeout(() => {
      const response = generateResponse(inputValue);
      addBotMessage(response);
    }, 1000 + Math.random() * 1000);
  };

  const handleSuggestedQuestion = (question: string) => {
    addUserMessage(question);
    setIsTyping(true);

    setTimeout(() => {
      const response = generateResponse(question);
      addBotMessage(response);
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

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center text-white text-2xl group"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
      >
        <motion.span
          animate={{ rotate: isOpen ? 0 : 360 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? '✕' : '💬'}
        </motion.span>
        
        {/* Notification Badge */}
        {!isOpen && messages.length === 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"
          />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="fixed bottom-28 right-8 z-40 w-[420px] h-[650px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-10rem)]"
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
                      <p className="text-lg font-semibold mb-2">Welcome to ErmiAI!</p>
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
              {messages.length <= 1 && (
                <div className="px-5 py-3 bg-gray-900/40 border-t border-white/10">
                  <p className="text-xs text-gray-400 mb-3 font-semibold">
                    💡 Try asking:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedQuestions.slice(0, 3).map((question, idx) => (
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
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <motion.button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-xl">➤</span>
                  </motion.button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Press Enter to send
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
