import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { AMC_FAQS, type AmcFaqItem } from './amcData';

export const AmcFaqSection: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1]);

  const toggleIndex = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section className="py-12 sm:py-16 bg-[#F8F9FF] border-t border-slate-200 select-none" id="amc-faqs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="font-rubik font-bold text-xs uppercase tracking-wider text-[#385BAB] block">
            KNOWLEDGE &amp; PROTOCOLS
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl text-[#00163D] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-karla text-sm text-slate-600 leading-relaxed">
            Essential guidelines regarding our annual maintenance agreements, emergency response times, and overhaul scope.
          </p>
        </div>

        {/* FAQs List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {AMC_FAQS.map((faq: AmcFaqItem, idx: number) => {
            const isOpen = openIndexes.includes(idx);
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-4 h-4 text-[#00163D] shrink-0 mt-0.5" />
                    <h3 className="font-rubik font-bold text-sm text-[#00163D] leading-snug">
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
                  <div className="px-5 pb-5 pt-0 font-karla text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
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
