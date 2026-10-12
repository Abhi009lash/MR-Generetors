import React from 'react';
import { Headphones, Phone } from 'lucide-react';
import { rentalHeroNightImg } from '../../assets/images';
import { APP_CONFIG } from '../../core/config';

export const QuoteConsultationPanels: React.FC = () => {
  return (
    <div className="space-y-6 select-none">
      {/* Active Hyderabad Deployments Photo Panel */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2.5">
        <span className="font-rubik text-xs uppercase tracking-wider text-[#385BAB] font-bold block">
          Active Hyderabad Deployments
        </span>
        <div className="overflow-hidden rounded-xl relative h-44 bg-slate-900">
          <img
            src={rentalHeroNightImg}
            alt="Active Industrial Genset Testing Bay Hyderabad"
            className="w-full h-full object-cover object-center transform hover:scale-103 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
        </div>
        <div className="flex items-center justify-between font-rubik text-xs text-slate-600 pt-0.5">
          <span>Sundar Nagar Testing Bay</span>
          <span className="text-[#00163D] font-bold">750 kVA Synchronized</span>
        </div>
      </div>

      {/* Direct Consultation Hotcard */}
      <div className="bg-[#EFF4FF] border border-[#D6E4FF] p-5 rounded-2xl space-y-2.5">
        <div className="flex items-center gap-2 text-[#00163D]">
          <Headphones className="w-5 h-5 text-[#385BAB]" />
          <h4 className="font-rubik font-bold text-sm uppercase leading-tight">
            Speak to Chief Sizing Engineer
          </h4>
        </div>

        <p className="font-karla text-xs text-slate-600 leading-relaxed">
          Need a non-standard application, parallel synchronizing switchboards, or specialized acoustic dampening under 65 dB?
        </p>

        <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between">
          <div>
            <p className="font-rubik text-xs uppercase text-[#00163D] font-bold">
              Er. Madhusudhan Rao
            </p>
            <p className="font-karla text-[11px] text-slate-500">
              Technical Operations Director
            </p>
          </div>
          <a
            href={`tel:${APP_CONFIG.phonePrimary}`}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#00163D] text-white font-rubik font-bold text-[11px] hover:bg-[#0F2B5C] transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>CALL DIRECT</span>
          </a>
        </div>
      </div>
    </div>
  );
};
