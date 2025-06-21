import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Clock, Package, Shirt, MapPin, CreditCard, RotateCcw, Zap, Sparkles } from 'lucide-react';

// Enhanced FAQ Knowledge Base with unique responses
const FAQ_DATABASE = {
  "return policy": {
    answer: "We got you covered! 30-day returns on unworn items with tags. Free returns within US + easy online portal. Keep that receipt safe! 🔄✨",
    followUp: ["Start a return", "Return shipping details", "Refund processing time"],
    icon: <RotateCcw className="w-5 h-5" />,
    category: "returns"
  },
  "international shipping": {
    answer: "We ship worldwide, fam! 🌍 US/Canada: 3-5 days • EU: 5-7 days • Asia/Oceania: 7-10 days. FREE shipping over $150 globally! 📦",
    followUp: ["Shipping costs by region", "Customs & duties info", "International tracking"],
    icon: <Package className="w-5 h-5" />,
    category: "shipping"
  },
  "sizes": {
    answer: "XS to 3XL available! We run slightly oversized for that perfect streetwear fit. Pro tip: When in doubt, size down one! 📏🔥",
    followUp: ["View size chart", "Size exchange process", "Fit recommendations by style"],
    icon: <Shirt className="w-5 h-5" />,
    category: "sizing"
  },
  "delivery time": {
    answer: "Lightning fast delivery! ⚡ Standard US: 2-4 business days • Express: 1-2 days • International varies. Tracking sent within 24hrs!",
    followUp: ["Upgrade to express", "Track existing order", "Delivery notifications"],
    icon: <Clock className="w-5 h-5" />,
    category: "shipping"
  },
  "track order": {
    answer: "Easy tracking! Check your email for the link, or login to your account. No account? Use order # + email on our tracking page 📍",
    followUp: ["Track without account", "Delivery issues help", "Change delivery address"],
    icon: <Package className="w-5 h-5" />,
    category: "orders"
  },
  "limited edition": {
    answer: "Most DARK ELK drops are LIMITED AF! 🔥 We restock core pieces but collabs & seasonal drops are ONE TIME ONLY. Don't sleep on it!",
    followUp: ["Set restock alerts", "Upcoming limited drops", "VIP early access signup"],
    icon: <Zap className="w-5 h-5" />,
    category: "products"
  },
  "payment methods": {
    answer: "All major payment methods accepted! 💳 Cards, PayPal, Apple Pay, Google Pay, Klarna (buy now pay later). Secure checkout guaranteed!",
    followUp: ["Klarna payment plans", "Payment security info", "Checkout troubleshooting"],
    icon: <CreditCard className="w-5 h-5" />,
    category: "payment"
  },
  "fabric care": {
    answer: "Keep your DARK ELK gear fresh! 🧺 Machine wash COLD, hang dry (no high heat!). Avoid bleach. Our prints are built to last with proper TLC!",
    followUp: ["Care by fabric type", "Print longevity tips", "Repair services"],
    icon: <Shirt className="w-5 h-5" />,
    category: "care"
  },
  "cancel order": {
    answer: "Need to cancel? You got 1 HOUR after purchase! ⏰ After that, we're already packing your fire pieces. Hit us up ASAP if you need changes!",
    followUp: ["Modify existing order", "Cancel after 1 hour", "Emergency order changes"],
    icon: <X className="w-5 h-5" />,
    category: "orders"
  },
  "restock": {
    answer: "Core items restock regularly, limited drops DON'T! 🔔 Sign up for restock alerts on product pages - you'll be first to know when we drop!",
    followUp: ["Enable restock notifications", "Core vs limited items", "New collection alerts"],
    icon: <RotateCcw className="w-5 h-5" />,
    category: "products"
  },
  "customization": {
    answer: "No custom orders ATM, but we drop FIRE designs weekly! 🎨 Follow @darkelk for sneak peeks & potential custom collab opportunities!",
    followUp: ["Custom collaboration requests", "Design feedback", "Follow social media"],
    icon: <Sparkles className="w-5 h-5" />,
    category: "custom"
  },
  "location": {
    answer: "DARK ELK HQ is in Los Angeles, CA! 🌴☀️ Born in the streets, designed for the culture. We ship globally from our LA warehouse.",
    followUp: ["Visit LA showroom", "Local pickup options", "LA exclusive events"],
    icon: <MapPin className="w-5 h-5" />,
    category: "company"
  }
};

// Enhanced Quick Action buttons with dark theme
const QUICK_ACTIONS = [
  { text: "Track Order", key: "track order", emoji: "📦" },
  { text: "Return Help", key: "return policy", emoji: "↩️" },
  { text: "Size Guide", key: "sizes", emoji: "📏" },
  { text: "Shipping Info", key: "international shipping", emoji: "🌍" },
];

const DarkELKChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize chat with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage = {
        id: Date.now(),
        type: 'bot',
        content: "Yo! Welcome to DARK ELK 🖤🔥 I'm your streetwear concierge - here to help with orders, sizing, drops, and everything that makes your fit go HARD. What's good?",
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  // Enhanced typing animation
  const simulateTyping = () => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
    }, 800 + Math.random() * 1200);
  };

  // Improved matching algorithm with better keyword detection
  const findBestMatch = (userInput) => {
    const input = userInput.toLowerCase().trim();
    
    // Enhanced keyword matching with scoring
    let bestMatch = null;
    let highestScore = 0;

    for (const [key, data] of Object.entries(FAQ_DATABASE)) {
      let score = 0;
      const keywords = key.split(' ');
      
      // Exact key match
      if (input.includes(key)) score += 10;
      
      // Individual keyword matches
      keywords.forEach(keyword => {
        if (input.includes(keyword)) score += 3;
      });

      // Extended keyword variations
      const variations = {
        'return': ['return', 'refund', 'send back', 'exchange'],
        'shipping': ['ship', 'delivery', 'send', 'mail'],
        'size': ['size', 'fit', 'sizing', 'measurements'],
        'track': ['track', 'where', 'status', 'progress'],
        'payment': ['pay', 'payment', 'card', 'paypal'],
        'cancel': ['cancel', 'stop', 'remove'],
        'restock': ['restock', 'available', 'back in stock'],
        'custom': ['custom', 'personalize', 'design'],
        'location': ['where', 'location', 'based', 'address'],
        'limited': ['limited', 'exclusive', 'special'],
        'care': ['wash', 'care', 'clean', 'maintain']
      };

      // Check variations
      Object.entries(variations).forEach(([mainKey, vars]) => {
        vars.forEach(variation => {
          if (input.includes(variation) && key.includes(mainKey)) {
            score += 5;
          }
        });
      });

      if (score > highestScore) {
        highestScore = score;
        bestMatch = { key, ...data };
      }
    }

    return highestScore > 2 ? bestMatch : null;
  };

  // Handle user message submission
  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    const currentInput = inputValue;
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setShowQuickActions(false);
    
    // Simulate bot response
    simulateTyping();
    
    setTimeout(() => {
      const match = findBestMatch(currentInput);
      let botResponse;

      if (match) {
        botResponse = {
          id: Date.now() + 1,
          type: 'bot',
          content: match.answer,
          followUp: match.followUp,
          icon: match.icon,
          category: match.category,
          timestamp: new Date()
        };
      } else {
        botResponse = {
          id: Date.now() + 1,
          type: 'bot',
          content: "Hmm, not sure about that specific question! 🤔 But I'm your go-to for orders, shipping, returns, sizing, drops & product info. Try asking something else or hit up our customer service squad! 💪",
          followUp: ["Contact customer service", "Browse all FAQs", "Track an order", "Size guide"],
          timestamp: new Date()
        };
      }

      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  // Handle quick action clicks
  const handleQuickAction = (actionKey) => {
    const faqData = FAQ_DATABASE[actionKey];
    if (!faqData) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: QUICK_ACTIONS.find(action => action.key === actionKey)?.text || actionKey,
      timestamp: new Date()
    };

    const botResponse = {
      id: Date.now() + 1,
      type: 'bot',
      content: faqData.answer,
      followUp: faqData.followUp,
      icon: faqData.icon,
      category: faqData.category,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setShowQuickActions(false);
  };

  // Handle follow-up button clicks
  const handleFollowUp = (followUpText) => {
    setInputValue(followUpText);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Dark Theme Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="relative"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="bg-yellow-500 hover:bg-yellow-400 text-black p-4 rounded-full shadow-2xl transition-all duration-200 border-2 border-yellow-600"
            >
              <MessageCircle className="w-7 h-7" />
              
              {/* Notification badge */}
              <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                !
              </div>
            </motion.button>
            
            {/* Dark help prompt */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 }}
              className="absolute right-16 top-2 bg-gray-900 text-yellow-400 px-4 py-2 rounded-lg text-sm font-medium shadow-xl whitespace-nowrap border border-yellow-500/30"
            >
              Need help? Let's chat! 🔥
              <div className="absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dark Theme Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="bg-black rounded-2xl shadow-2xl w-[420px] h-[650px] flex flex-col overflow-hidden border-2 border-yellow-500/40"
          >
            {/* Dark Header */}
            <div className="bg-gray-900 text-white p-5 flex items-center justify-between border-b-2 border-yellow-500/30">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xl font-bold text-black">DE</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-yellow-400">DARK ELK</h3>
                  <p className="text-sm text-gray-300 flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    Streetwear Support
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-yellow-400 transition-colors p-2 hover:bg-gray-800 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Messages - Dark Theme with Good Readability */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5 bg-gray-950">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] rounded-2xl p-4 ${
                    message.type === 'user' 
                      ? 'bg-yellow-500 text-black font-medium shadow-lg' 
                      : 'bg-gray-900 text-gray-100 border border-yellow-500/30 shadow-lg'
                  }`}>
                    {message.type === 'bot' && message.icon && (
                      <div className="flex items-center space-x-3 mb-3 pb-3 border-b border-yellow-500/20">
                        <div className="p-2 bg-yellow-500/20 rounded-full border border-yellow-500/30">
                          {message.icon}
                        </div>
                        <span className="text-sm font-semibold text-yellow-400 uppercase tracking-wide">
                          {message.category || 'Support'}
                        </span>
                      </div>
                    )}
                    <p className={`${message.type === 'user' ? 'text-base' : 'text-base'} leading-relaxed`}>
                      {message.content}
                    </p>
                    
                    {message.followUp && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {message.followUp.map((followUp, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleFollowUp(followUp)}
                            className="bg-gray-800 hover:bg-yellow-500 text-gray-200 hover:text-black px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 border border-yellow-500/30 hover:border-yellow-400"
                          >
                            {followUp}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Dark Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-900 rounded-2xl p-4 border border-yellow-500/30 shadow-lg">
                    <div className="flex items-center space-x-3">
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce" />
                        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                      <span className="text-sm text-gray-400">DARK ELK is typing...</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Dark Quick Actions */}
              {showQuickActions && messages.length <= 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-2 gap-3"
                >
                  {QUICK_ACTIONS.map((action, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleQuickAction(action.key)}
                      className="bg-gray-900 hover:bg-yellow-500 border-2 border-yellow-500/30 hover:border-yellow-400 text-gray-200 hover:text-black p-4 rounded-xl text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <span className="block text-2xl mb-2">{action.emoji}</span>
                      {action.text}
                    </motion.button>
                  ))}
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Dark Input */}
            <div className="p-5 bg-gray-900 border-t-2 border-yellow-500/30">
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                  placeholder="Ask about orders, sizing, drops, returns..."
                  className="flex-1 bg-gray-800 border-2 border-yellow-500/40 rounded-full px-5 py-3 text-base text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200"
                />
                <button
                  onClick={handleSubmit}
                  disabled={!inputValue.trim()}
                  className="bg-yellow-500 hover:bg-yellow-400 text-black rounded-full px-5 py-3 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DarkELKChatbot;