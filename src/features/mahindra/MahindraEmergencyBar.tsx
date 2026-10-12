import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { APP_CONFIG } from '../../core/config';

export const MahindraEmergencyBar: React.FC = () => {
  return (
    <section className="bg-[#00163D] border-t border-[#0F2B5C] py-8 text-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="font-rubik font-bold text-xl sm:text-2xl text-white">
              Need Instant Mahindra DG Sizing or Emergency Breakdown Support?
            </h3>
            <p className="font-karla text-xs sm:text-sm text-slate-300">
              Immediate dispatch of factory engineers across Hyderabad, Secunderabad, and Telangana industrial estates.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={`tel:${APP_CONFIG.phonePrimary}`}
              className="h-11 px-5 bg-[#DC2626] hover:bg-red-700 text-white font-rubik font-bold text-xs uppercase tracking-wider rounded-lg flex items-center gap-2 transition-all shadow-md active:scale-98"
            >
              <Phone className="w-4 h-4" />
              <span>CALL DISPATCH: +91 {APP_CONFIG.phonePrimary}</span>
            </a>

            <a
              href={`https://wa.me/91${APP_CONFIG.phonePrimary}?text=Hi%20MR%20Generators,%20I%20need%20a%20Mahindra%20Powerol%20diesel%20generator%20quotation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 px-5 bg-white hover:bg-slate-100 text-[#00163D] font-rubik font-bold text-xs uppercase tracking-wider rounded-lg flex items-center gap-2 transition-all shadow-xs active:scale-98"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WHATSAPP SALES DESK</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
