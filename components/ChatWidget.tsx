
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User, Loader2 } from 'lucide-react';
import { getLogisticsAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Welcome to ZS Exports - Imports. I am your premium logistics consultant. How may I assist your global venture today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const aiResponse = await getLogisticsAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${isOpen ? 'bg-red-900 rotate-90' : 'gold-bg rotate-0'}`}
      >
        {isOpen ? <X className="text-white" /> : <MessageSquare className="text-black" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] glass-card rounded-2xl flex flex-col overflow-hidden shadow-2xl border-gold-500/30 animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="p-4 gold-bg text-black flex items-center gap-3">
            <div className="bg-black/20 p-2 rounded-full">
              <Bot size={20} />
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm">ZS AI Advisor</h3>
              <p className="text-[10px] uppercase font-bold tracking-tighter opacity-70">Premium Logistics Intelligence</p>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] flex gap-2 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${m.role === 'user' ? 'bg-gold-500/20 text-gold-500' : 'bg-white/5 text-gold-500 border border-gold-500/20'}`}>
                    {m.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div className={`p-3 rounded-xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-gold-500/10 text-white' : 'bg-onyx border border-white/5 text-gray-300'}`}>
                    {m.content}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 bg-onyx border border-white/5 p-3 rounded-xl">
                  <Loader2 size={16} className="animate-spin text-gold-500" />
                  <span className="text-xs text-gray-500 font-medium">Expert is thinking...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/5 bg-black/40">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask our advisor..."
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-gold-500 transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="w-10 h-10 gold-bg rounded-full flex items-center justify-center text-black hover:scale-105 disabled:opacity-50 disabled:scale-100 transition-all"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
