import React, { useEffect } from 'react';
import { X, Clock, User, Calendar, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import type { BlogPost } from './blogData';

interface BlogArticleModalProps {
  article: BlogPost | null;
  onClose: () => void;
  onOpenQuote?: () => void;
}

export const BlogArticleModal: React.FC<BlogArticleModalProps> = ({
  article,
  onClose,
  onOpenQuote,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0A1D3F] text-white border-b border-[#0F2B5C]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-rubik font-bold uppercase tracking-wider bg-[#DC2626] text-white">
              {article.categoryBadge}
            </span>
            <span className="flex items-center gap-1 text-xs font-karla text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              {article.readTime}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close article modal"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto scrollbar-none p-6 sm:p-8 space-y-6">
          <div className="space-y-3">
            <h2 className="font-rubik font-bold text-xl sm:text-2xl text-[#00163D] leading-snug">
              {article.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs font-karla text-slate-500 pb-4 border-b border-slate-100">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#00163D]" />
                {article.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {article.date}
              </span>
            </div>
          </div>

          {/* Lead excerpt */}
          <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-[#00163D] text-slate-700 font-karla text-sm leading-relaxed italic">
            &ldquo;{article.excerpt}&rdquo;
          </div>

          {/* Body content */}
          <div className="prose prose-slate max-w-none font-karla text-sm sm:text-base text-slate-700 leading-relaxed space-y-4">
            {article.content.split('\n\n').map((paragraph, idx) => {
              const trimmed = paragraph.trim();
              if (!trimmed) return null;

              if (trimmed.startsWith('###')) {
                return (
                  <h3 key={idx} className="font-rubik font-bold text-base sm:text-lg text-[#00163D] pt-2">
                    {trimmed.replace(/^###\s*/, '')}
                  </h3>
                );
              }

              if (trimmed.startsWith('1.') || trimmed.startsWith('2.') || trimmed.startsWith('3.') || trimmed.startsWith('4.')) {
                return (
                  <div key={idx} className="flex gap-3 bg-amber-50/50 p-3.5 rounded-lg border border-amber-100/60">
                    <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <p className="font-karla text-slate-800 text-sm">{trimmed}</p>
                  </div>
                );
              }

              return (
                <p key={idx} className="text-slate-600">
                  {trimmed}
                </p>
              );
            })}
          </div>

          {/* In-article Advisory Box */}
          <div className="bg-[#00163D] text-white rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-rubik font-bold text-sm sm:text-base text-white">
                Need Engineering Consultation for this Genset?
              </h4>
              <p className="font-karla text-xs text-slate-300">
                Talk directly with senior electrical engineers at M.R Generators Hyderabad.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:+918977778811"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-rubik font-semibold text-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                Call Desk
              </a>
              {onOpenQuote && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenQuote();
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#DC2626] hover:bg-red-700 text-white font-rubik font-bold text-xs uppercase transition-colors shadow-sm"
                >
                  Get Quote <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
