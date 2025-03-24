'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputMessage.trim() || isLoading) return;

    // Benutzer-Nachricht hinzufügen
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const res = await fetch("https://drenialj.app.n8n.cloud/webhook-test/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      if (!res.ok) {
        throw new Error('Netzwerk-Antwort war nicht ok');
      }

      const data = await res.json();
      
      // Bot-Antwort hinzufügen
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response || 'Entschuldigung, ich konnte keine Antwort generieren.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Fehler beim Senden der Nachricht:', error);
      // Fehlermeldung hinzufügen
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Entschuldigung, es gab einen Fehler bei der Verarbeitung Ihrer Nachricht.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat-Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-full shadow-lg hover:shadow-purple-500/25 z-50"
        aria-label="Chat öffnen"
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      {/* Chat-Fenster */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-96 h-[600px] bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 z-50 overflow-hidden"
          >
            {/* Chat-Header */}
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-gradient-to-r from-purple-600/10 to-indigo-600/10">
              <h3 className="text-white font-medium flex items-center gap-2">
                <span className="text-xl">🤖</span>
                <span>Axoralutions Chatbot</span>
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Chat schließen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat-Nachrichten */}
            <div className="h-[calc(100%-8rem)] overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="text-center text-gray-400 mt-4">
                  <p>👋 Hallo! Wie kann ich Ihnen helfen?</p>
                  <p className="text-sm mt-2">Sie können mich alles über unsere Leistungen, Preise oder Kontaktmöglichkeiten fragen.</p>
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
                    className={`max-w-[80%] rounded-2xl p-3 ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                        : 'bg-white/5 text-gray-300'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/5 text-gray-300 rounded-2xl p-3">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat-Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ihre Nachricht..."
                  className="flex-1 bg-white/5 text-white placeholder-gray-400 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className={`bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-2 rounded-xl transition-all duration-300 ${
                    isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:from-purple-500 hover:to-indigo-500'
                  }`}
                  aria-label="Nachricht senden"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 