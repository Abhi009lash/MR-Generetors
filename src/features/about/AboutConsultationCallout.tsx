import React from 'react';
import { PhoneCall, MessageSquare, Calendar, Check } from 'lucide-react';
import { APP_CONFIG } from '../../core/config';

interface AboutConsultationCalloutProps {
  onOpenQuoteModal: () => void;
}

export const AboutConsultationCallout: React.FC<AboutConsultationCalloutProps> = ({
  onOpenQuoteModal,
}) => {
  return (
    <section className="bg-[#00163D] py-16 px-4 sm:px-6 lg:px-12 select-none">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#0F2B5C] rounded-lg p-8 sm:p-12 shadow-2xl border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Column: Heading, Copy, Features */}
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D32F2F] text-white text-xs font-karla font-bold uppercase tracking-wider rounded-[2px]">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>24-HOUR SITE SURVEY IN HYDERABAD</span>
            </div>

            <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-[36px] text-white leading-tight">
              Plan Your Power Backup Strategy with Our Chief Engineers
            </h2>

            <p className="font-karla text-sm sm:text-base text-[#DFE9FB] leading-relaxed">
              From capacity calculation, fuel economics study, or emergency fault coverage for existing DG sets in Hyderabad; our senior engineering lead provides zero-obligation sizing.
            </p>

            {/* 3 Value Checks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-[#DFE9FB]">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-brand-amber shrink-0" />
                <span>Zero-Obligation Audits</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-brand-amber shrink-0" />
                <span>CPCB IV+ Acoustics</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-brand-amber shrink-0" />
                <span>2-Way Switch Cabling</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 High-Conversion CTAs */}
          <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-3.5 shrink-0">
            {/* Direct Helpline */}
            <a
              href={`tel:${APP_CONFIG.phonePrimary}`}
              className="w-full h-12 px-6 bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] shadow-md transition-all flex items-center justify-center gap-2 active:scale-98"
            >
              <PhoneCall className="w-4 h-4" />
              <span>DIRECT HELPLINE: {APP_CONFIG.phonePrimary}</span>
            </a>

            {/* WhatsApp Business Enquiry */}
            <a
              href={`https://wa.me/91${APP_CONFIG.phonePrimary}?text=Hi%20MR%20Generators,%20I%20would%20like%20to%20consult%20with%20your%20engineering%20team%20regarding%20a%20DG%20set.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-12 px-6 bg-[#059669] hover:bg-[#047857] text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] shadow-md transition-all flex items-center justify-center gap-2 active:scale-98"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WHATSAPP BUSINESS ENQUIRY</span>
            </a>

            {/* Book Site Evaluation */}
            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="w-full h-12 px-6 bg-white hover:bg-slate-100 text-[#00163D] font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] shadow-sm transition-all flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#00163D]" />
              <span>BOOK SITE EVALUATION</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
