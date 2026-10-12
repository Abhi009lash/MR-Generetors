import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, AlertTriangle } from 'lucide-react';
import { PORTABLE_FAQS, type PortableFaqItem } from './portableData';
import { APP_CONFIG } from '../../core/config';

export const PortableFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#EFF4FF] py-16 lg:py-20 border-b border-[#D6E4FF] select-none">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-2">
          <span className="font-karla font-bold text-xs uppercase tracking-widest text-[#385BAB] block">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl text-[#00163D] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-karla text-sm text-[#44464F]">
            Key technical and regulatory answers regarding mobile diesel, trailer towing, and portable power.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {PORTABLE_FAQS.map((faq: PortableFaqItem, index: number) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200/80 rounded-[4px] overflow-hidden shadow-2xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-rubik font-semibold text-sm sm:text-base text-[#00163D] hover:text-[#385BAB] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#385BAB] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 font-karla text-sm text-[#44464F] leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Emergency Breakdown Bottom Banner */}
        <div className="bg-[#D32F2F] rounded-[4px] p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-rubik font-bold text-sm sm:text-base leading-tight">
                Immediate Mobile Power Emergency in Telangana or AP?
              </h3>
              <p className="font-karla text-xs text-red-100 mt-0.5">
                Our central Hyderabad fleet dispatches road-towable silent generators within 120 minutes.
              </p>
            </div>
          </div>

          <a
            href={`tel:${APP_CONFIG.phonePrimary}`}
            className="px-5 py-2.5 bg-white hover:bg-slate-100 text-[#D32F2F] font-rubik font-bold text-xs uppercase tracking-wider rounded-[2px] flex items-center gap-2 shrink-0 transition-colors shadow-sm cursor-pointer"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>+91 {APP_CONFIG.phonePrimary}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
