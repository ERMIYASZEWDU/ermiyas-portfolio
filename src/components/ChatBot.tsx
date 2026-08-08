// ErmiAI v4.0 - Universal Portfolio Reader
// Reads ALL content directly from portfolio components
// NO manual updates - portfolio is the SINGLE source of truth!
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { extractPortfolioKnowledge } from '../utils/portfolioExtractor';
import { generateResponse } from '../utils/chatbotResponses';

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
  
  // Extract portfolio knowledge once on mount - reads from actual components!
  const knowledge = useRef(extractPortfolioKnowledge()).current;

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Keyboard shortcuts: ESC to close, Alt+C to toggle
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
      if (e.altKey && e.key === 'c') {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(
          `👋 Hi! I'm **ErmiAI**, your guide to ${knowledge.personal.name}'s portfolio.\n\nI can answer questions about:\n• ${knowledge.projects.length} ML/AI projects\n• ${knowledge.skills.allSkills.length}+ technical skills\n• Education & ${knowledge.certifications.length} certifications\n• Professional experience\n• Contact info\n\nAsk me anything!`
        );
      }, 500);
    }
  }, [isOpen]);

  const addBotMessage = (text: string) => {
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      text,
      sender: 'bot',
      timestamp: new Date(),
    }]);
    setIsTyping(false);
  };

  const addUserMessage = (text: string) => {
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    }]);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Haptic feedback
    if ('vibrate' in navigator) navigator.vibrate(10);
    
    addUserMessage(inputValue);
    setInputValue('');
    setIsTyping(true);
    
    // Generate response using actual portfolio data
    setTimeout(() => {
      const response = generateResponse(inputValue, knowledge);
      addBotMessage(response);
      if ('vibrate' in navigator) navigator.vibrate([5, 10, 5]);
    }, 1000 + Math.random() * 1000);
  };

  const handleSuggestedQuestion = (question: string) => {
    if ('vibrate' in navigator) navigator.vibrate(10);
    addUserMessage(question);
    setIsTyping(true);
    setShowSuggestions(false);
    
    setTimeout(() => {
      const response = generateResponse(question, knowledge);
      addBotMessage(response);
      if ('vibrate' in navigator) navigator.vibrate([5, 10, 5]);
    }, 1000);
  };

  const suggestedQuestions = [
    "Tell me about Ermiyas",
    "What are his skills?",
    "Show me his projects",
    "What's his experience?",
    "How can I contact him?",
    "What certifications does he have?",
  ];

  return (
    <>
      <div id="chatbot-root" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 pointer-events-none">
        <div className="flex flex-col items-end pointer-events-auto">
          
          {/* Chat Window */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="mb-3 w-[90vw] max-w-[420px] sm:w-[360px] h-[65vh] sm:h-[650px] max-h-[calc(100vh-96px)]"
              >
                <div className="relative w-full h-full bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden flex flex-col">
                  
                  {/* Header */}
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-5 flex items-center gap-3 shadow-lg">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl backdrop-blur-sm border border-white/30">
                      🤖
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg">ErmiAI Assistant</h3>
                      <p className="text-white/90 text-sm flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        Online • Ready to help
                      </p>
                    </div>
                  </div>

                  {/* Messages Container */}
                  <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gradient-to-b from-gray-900/50 to-gray-900/70">
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
                            Your guide to Ermiyas's portfolio
                          </p>
                        </motion.div>
                      </div>
                    )}

                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[85%] p-4 rounded-2xl ${
                            message.sender === 'user'
                              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                              : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 shadow-md'
                          }`}
                        >
                          <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                          <p className={`text-xs mt-2 ${message.sender === 'user' ? 'text-white/70' : 'text-gray-400'}`}>
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
                            {[0, 1, 2].map((i) => (
                              <motion.div
                                key={i}
                                className="w-2 h-2 bg-blue-400 rounded-full"
                                animate={{ y: [0, -5, 0] }}
                                transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.2 }}
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>

                  {/* Suggested Questions */}
                  {showSuggestions && messages.length <= 1 && (
                    <div className="px-5 py-3 bg-gray-900/40 border-t border-white/10">
                      <p className="text-xs text-gray-400 mb-3 font-semibold">💡 Try asking:</p>
                      <div className="flex flex-wrap gap-2">
                        {suggestedQuestions.slice(0, 3).map((question, idx) => (
                          <motion.button
                            key={idx}
                            onClick={() => handleSuggestedQuestion(question)}
                            className="text-xs px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white transition-all"
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
                        placeholder="Ask me anything..."
                        className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <motion.button
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim()}
                        className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white disabled:opacity-50"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="text-lg">➤</span>
                      </motion.button>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      Press Enter • ESC to close • Alt+C to toggle
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Chat Button */}
          <motion.button
            onClick={() => {
              if ('vibrate' in navigator) navigator.vibrate(15);
              setIsOpen(!isOpen);
            }}
            className="relative z-40 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-2xl hover:shadow-blue-500/50 flex items-center justify-center text-white"
            whileHover={{ scale: 1.06, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
            title="Chat with ErmiAI (Alt + C)"
          >
            {/* Pulse animation */}
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-500"
              animate={{ scale: [1, 1.28, 1], opacity: [0.45, 0, 0.45] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            
            <motion.span
              animate={{ rotate: isOpen ? 0 : 360 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              {isOpen ? '✕' : '💬'}
            </motion.span>

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
