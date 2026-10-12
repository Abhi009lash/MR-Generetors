import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { QUOTE_FAQS, type QuoteFaq } from './quotePortalData';

export const QuoteFaqSection: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleIndex = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section className="py-12 sm:py-16 bg-[#F8F9FF] border-t border-slate-200 select-none" id="quote-faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="font-rubik text-xs uppercase tracking-wider text-[#385BAB] font-bold block">
            COMMERCIAL &amp; TECHNICAL CLARIFICATIONS
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl text-[#00163D] uppercase leading-tight">
            Quotation &amp; Deployment FAQs
          </h2>
          <p className="font-karla text-sm text-slate-600 leading-relaxed">
            Common queries answered by our sales engineering team regarding lead times, load calculations, and regulatory clearances.
          </p>
        </div>

        <div className="space-y-3">
          {QUOTE_FAQS.map((faq: QuoteFaq, idx: number) => {
            const isOpen = openIndexes.includes(idx);
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-4 h-4 text-[#00163D] shrink-0 mt-0.5" />
                    <h3 className="font-rubik font-bold text-sm text-[#00163D] uppercase leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 font-karla text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
