'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Send, Loader2, ExternalLink } from 'lucide-react';

interface SuggestedProduct {
  slug: string;
  name: string;
  tagline: string;
  price: number;
  image: string;
  category: string;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  products?: SuggestedProduct[];
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hey! I'm Peak — your peptide protocol advisor. Ask me anything about dosing, stacking, or which peptides are right for your goals. I'll show you the exact products from our catalog.",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMessage: Message = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.reply || 'Sorry, I encountered an error. Please try again.',
          products: data.suggestedProducts || [],
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Connection error. Please try again.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {/* Toggle button — logo avatar */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 z-50 w-16 h-16 rounded-full overflow-hidden shadow-xl hover:scale-105 transition-transform border-2 border-violet-500/40"
        style={{ background: '#0f0f1a' }}
        aria-label="Open peptide advisor chat"
      >
        {open ? (
          <span className="flex items-center justify-center w-full h-full bg-[#0f0f1a]">
            <X size={24} className="text-white" />
          </span>
        ) : (
          <Image src="/logo.png" alt="Peak AI" width={64} height={64} className="w-full h-full object-cover" />
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          className="fixed z-50 flex flex-col overflow-hidden rounded-2xl border border-[#2d2d50] shadow-2xl shadow-black/60 bg-[#0f0f1a]"
          style={{
            bottom: '5.5rem',
            right: '1.25rem',
            width: 'min(380px, calc(100vw - 2rem))',
            maxHeight: 'min(580px, calc(100vh - 8rem))',
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-[#1e1e35] bg-gradient-to-r from-violet-600/10 to-cyan-500/10 shrink-0">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-violet-500/30 shrink-0">
              <Image src="/logo.png" alt="Peak" width={40} height={40} className="w-full h-full object-cover" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white leading-tight">Peak AI Advisor</p>
              <p className="text-xs text-zinc-500 truncate">PeptidesClav protocol specialist</p>
            </div>
            <div className="ml-auto flex items-center gap-1.5 shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-emerald-500">Online</span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ minHeight: 0 }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                {/* Bubble */}
                <div
                  className={`max-w-[90%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-violet-600 text-white rounded-br-sm'
                      : 'bg-[#141428] text-zinc-300 border border-[#1e1e35] rounded-bl-sm'
                  }`}
                >
                  {msg.content}
                </div>

                {/* Product cards for assistant messages */}
                {msg.role === 'assistant' && msg.products && msg.products.length > 0 && (
                  <div className="w-full mt-2 space-y-2">
                    {msg.products.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/products/${product.slug}`}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 p-2.5 rounded-xl border border-[#2d2d50] bg-[#0a0a14] hover:border-violet-500/40 transition-colors group"
                      >
                        {/* Product image */}
                        <div
                          className="w-14 h-14 rounded-lg overflow-hidden shrink-0 flex items-center justify-center"
                          style={{ background: '#0d0d1f' }}
                        >
                          {product.image.startsWith('http') ? (
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-contain p-1"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-violet-600/20 to-cyan-500/20 flex items-center justify-center text-xl">
                              🧬
                            </div>
                          )}
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-white truncate group-hover:text-violet-300 transition-colors">
                            {product.name}
                          </p>
                          <p className="text-[10px] text-zinc-500 truncate mt-0.5">{product.category}</p>
                          <p className="text-xs font-semibold text-violet-400 mt-1">${product.price}</p>
                        </div>

                        {/* Arrow */}
                        <ExternalLink size={12} className="text-zinc-600 group-hover:text-violet-400 transition-colors shrink-0" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-[#141428] border border-[#1e1e35] rounded-xl rounded-bl-sm px-3.5 py-2.5">
                  <Loader2 size={14} className="text-violet-400 animate-spin" />
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Suggested prompts */}
          {messages.length === 1 && (
            <div className="px-4 pb-3 flex flex-wrap gap-1.5 shrink-0">
              {[
                'Best healing peptides?',
                'Peptides for fat loss?',
                'GH peptide stack?',
                'Anti-aging protocol?',
              ].map((q) => (
                <button
                  key={q}
                  onClick={() => setInput(q)}
                  className="text-xs px-2.5 py-1.5 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400 hover:bg-violet-500/20 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="px-3 pb-3 pt-2 border-t border-[#1e1e35] flex gap-2 shrink-0">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask about peptides, dosing, stacks..."
              className="flex-1 bg-[#141428] border border-[#1e1e35] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-violet-500 transition-colors min-w-0"
            />
            <button
              onClick={send}
              disabled={!input.trim() || loading}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center disabled:opacity-40 hover:opacity-90 transition-opacity shrink-0"
            >
              <Send size={15} className="text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
