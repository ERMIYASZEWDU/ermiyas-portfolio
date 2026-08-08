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

  // Welcome message - ONLY shown once when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(
          `👋 Hi! I'm Ermiyas's Portfolio Assistant. Ask me about his skills, projects, experience, or education.`
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
    "About Me",
    "Skills",
    "Projects",
    "Experience",
    "Education",
    "Contact",
  ];

  return (
    <>
      <div id="chatbot-root" className="fixed bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 z-40 pointer-events-none">
        <div className="flex flex-col items-end pointer-events-auto">
          
          {/* Chat Window */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="mb-2 sm:mb-3 w-[calc(100vw-16px)] max-w-[400px] sm:max-w-[380px] md:max-w-[420px] h-[calc(100dvh-80px)] sm:h-[min(600px,calc(100dvh-100px))] md:h-[min(650px,calc(100dvh-120px))]"
              >
                <div className="relative w-full h-full bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden flex flex-col">
                  
                  {/* Header */}
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 sm:p-4 flex items-center gap-2 sm:gap-3 shadow-lg flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center text-xl sm:text-2xl backdrop-blur-sm border border-white/30">
                      🤖
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-bold text-base sm:text-lg truncate">ErmiAI Assistant</h3>
                      <p className="text-white/90 text-xs sm:text-sm flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        <span className="truncate">Online</span>
                      </p>
                    </div>
                  </div>

                  {/* Messages Container */}
                  <div className="flex-1 overflow-y-auto overflow-x-hidden p-3 sm:p-4 md:p-5 space-y-3 sm:space-y-4 bg-gradient-to-b from-gray-900/50 to-gray-900/70 overscroll-contain">
                    {messages.length === 0 && !isTyping && (
                      <div className="text-center text-gray-300 mt-8 sm:mt-12 md:mt-16 px-2">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <p className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">👋</p>
                          <p className="text-base sm:text-lg font-semibold mb-2">Welcome!</p>
                          <p className="text-xs sm:text-sm text-gray-400">
                            Ask about skills, projects, or experience
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
                          className={`max-w-[90%] sm:max-w-[85%] p-3 sm:p-4 rounded-2xl overflow-hidden ${
                            message.sender === 'user'
                              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                              : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 shadow-md'
                          }`}
                        >
                          <p className="chatbot-message-text text-xs sm:text-sm whitespace-pre-wrap leading-relaxed">{message.text}</p>
                          <p className={`text-[10px] sm:text-xs mt-1.5 sm:mt-2 ${message.sender === 'user' ? 'text-white/70' : 'text-gray-400'}`}>
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
                    <div className="px-3 sm:px-4 md:px-5 py-2 sm:py-3 bg-gray-900/40 border-t border-white/10 flex-shrink-0">
                      <p className="text-[10px] sm:text-xs text-gray-400 mb-2 font-semibold">Quick questions:</p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {suggestedQuestions.map((question, idx) => (
                          <motion.button
                            key={idx}
                            onClick={() => handleSuggestedQuestion(question)}
                            className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/20 rounded-full text-white transition-all touch-manipulation"
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
                  <div className="p-2 sm:p-3 md:p-4 bg-gray-900/60 border-t border-white/10 backdrop-blur-sm flex-shrink-0">
                    <div className="flex gap-1.5 sm:gap-2 items-center">
                      <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Ask me..."
                        className="flex-1 min-w-0 px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 touch-manipulation"
                      />
                      <motion.button
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim()}
                        className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex-shrink-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white disabled:opacity-50 touch-manipulation"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="text-base sm:text-lg">➤</span>
                      </motion.button>
                    </div>
                    <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-500 mt-1.5 sm:mt-2 text-center hidden sm:block">
                      Press Enter • ESC to close
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
