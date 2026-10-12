import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Phone } from 'lucide-react';
import { CATERPILLAR_FAQS, type CaterpillarFaqItem } from './caterpillarData';
import { APP_CONFIG } from '../../core/config';

export const CaterpillarFaqSection: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="bg-white py-14 lg:py-16 select-none border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="font-karla font-bold text-xs uppercase tracking-wider text-amber-600 block">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl text-[#00163D] uppercase tracking-tight">
            Caterpillar Power Systems FAQs
          </h2>
          <p className="font-karla text-sm text-slate-600">
            Accurate and validated operational insights for commercial and continuous high-load industrial generator procurement:
          </p>
        </div>

        {/* 4 Accordion Questions */}
        <div className="max-w-4xl mx-auto space-y-3 font-karla">
          {CATERPILLAR_FAQS.map((faq: CaterpillarFaqItem, idx: number) => {
            const isOpen = openIndexes.includes(idx);
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-[2px] overflow-hidden transition-all bg-[#F8F9FF]"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/60 transition-colors"
                >
                  <span className="font-rubik font-bold text-sm sm:text-base text-[#00163D]">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/50 mt-1 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Urgent Support Banner */}
        <div className="max-w-4xl mx-auto bg-[#00163D] border border-amber-500/30 rounded-[2px] p-5 sm:p-6 text-white flex flex-col md:flex-row items-center justify-between gap-5 shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-slate-950 shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-rubik font-bold text-base text-white">
                Require Immediate Caterpillar Technical Sizing or Plant Support?
              </h4>
              <p className="font-karla text-xs text-slate-300">
                Direct engineer hotline open - prompt quotation and site inspection response guaranteed today.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 w-full md:w-auto">
            <a
              href={`tel:${APP_CONFIG.phonePrimary}`}
              className="flex-1 md:flex-none px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] text-center transition-colors shadow-xs"
            >
              +91 {APP_CONFIG.phonePrimary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
