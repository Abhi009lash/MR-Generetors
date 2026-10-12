import React from 'react';
import { MapPin, PhoneCall, FileText, Phone } from 'lucide-react';
import { APP_CONFIG } from '../../core/config';

interface ClientsCtaSectionProps {
  onOpenQuoteModal?: () => void;
  onNavigateContact?: () => void;
}

export const ClientsCtaSection: React.FC<ClientsCtaSectionProps> = ({
  onOpenQuoteModal,
  onNavigateContact,
}) => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-12 bg-[#DFE9FB] select-none">
      <div className="max-w-7xl mx-auto bg-white rounded-lg p-8 lg:p-12 shadow-sm border border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <span className="font-karla text-xs font-bold text-[#D32F2F] uppercase tracking-wider">
              Industrial Client Onboarding Desk
            </span>
            <h2 className="font-rubik font-bold text-2xl sm:text-3xl text-[#00163D] tracking-tight">
              Join 1,650+ Leading Organizations Relying on M.R Generators
            </h2>
            <p className="font-karla text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Whether upgrading your existing industrial standby plant or commissioning a zero-downtime turnkey DG configuration for a new commercial facility, our certified senior engineers provide comprehensive site calculations and load profiling.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-2 pt-2 text-xs font-karla text-slate-700">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-4 h-4 text-[#D32F2F] shrink-0" />
                Veera Ratna Towers, Near ESI Metro, Hyderabad
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <PhoneCall className="w-4 h-4 text-[#385BAB] shrink-0" />
                Direct Depot: {APP_CONFIG.phoneLandline}
              </span>
            </div>
          </div>

          {/* Right Column (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
            <button
              type="button"
              onClick={() => {
                if (onOpenQuoteModal) onOpenQuoteModal();
                else if (onNavigateContact) onNavigateContact();
              }}
              className="w-full text-center bg-[#D32F2F] text-white px-6 py-4 rounded-[4px] font-karla font-bold text-sm uppercase tracking-wider hover:bg-[#B71C1C] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <FileText className="w-4 h-4" />
              <span>Request Site Assessment</span>
            </button>

            <a
              href={`tel:${APP_CONFIG.phonePrimary}`}
              className="w-full text-center bg-[#00163D] text-white px-6 py-4 rounded-[4px] font-karla font-bold text-sm uppercase tracking-wider hover:bg-[#0F2B5C] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <Phone className="w-4 h-4 text-[#D32F2F]" />
              <span>Call 24/7 Desk: +91-{APP_CONFIG.phonePrimary}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
