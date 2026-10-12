import React from 'react';
import { MessageSquare, Phone, Mail, Clock } from 'lucide-react';
import { APP_CONFIG } from '../../core/config';

export const WhatsAppCtaBanner: React.FC = () => {
  const whatsappUrl = `https://wa.me/91${APP_CONFIG.phonePrimary}?text=Hi%20MR%20Generators,%20I%20need%20an%20instant%20diesel%20generator%20quotation%20and%20technical%20datasheet.`;

  return (
    <section className="bg-[#00163D] text-white py-12 border-t border-white/10 relative overflow-hidden select-none">
      {/* Background glow */}
      <div className="absolute -bottom-20 right-10 w-80 h-80 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        {/* Left Information */}
        <div className="space-y-3 text-center lg:text-left max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white/10 rounded-[2px] text-[#D97706] font-karla font-bold text-xs uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-[#D97706]" />
            <span>20-SEC RESPONSE TIME</span>
          </div>

          <h2 className="font-rubik font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight">
            NEED INSTANT QUOTATION ON WHATSAPP?
          </h2>

          <p className="font-karla text-xs sm:text-sm text-[#DFE9FB] leading-relaxed">
            Chat directly with senior genset application engineers and dispatch your project electrical schematic, generator kVA requirement, or breakdown photos for immediate consultation.
          </p>
        </div>

        {/* Right CTA Button & Quick Icons */}
        <div className="flex flex-col items-center lg:items-end gap-4 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 px-6 bg-[#22C55E] hover:bg-[#16A34A] text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] flex items-center gap-2.5 transition-all shadow-md active:scale-98"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>WHATSAPP QUICK CHAT (+91 {APP_CONFIG.phonePrimary})</span>
          </a>

          <div className="flex items-center gap-3 text-slate-300 text-xs font-karla">
            <a
              href={`tel:${APP_CONFIG.phonePrimary}`}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-[2px] transition-colors"
              aria-label="Direct Phone Call"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${APP_CONFIG.email}`}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-[2px] transition-colors"
              aria-label="Email Dispatch"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
            <span className="text-[11px] text-[#C4C6D0] uppercase tracking-wider">
              24/7 Monitored Dispatch Gate
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
