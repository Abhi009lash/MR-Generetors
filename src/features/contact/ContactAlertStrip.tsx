import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { APP_CONFIG } from '../../core/config';

interface ContactAlertStripProps {
  onOpenSizing?: () => void;
}

export const ContactAlertStrip: React.FC<ContactAlertStripProps> = ({ onOpenSizing }) => {
  return (
    <section className="bg-[#D32F2F] text-white shadow-xs select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3.5 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Left Priority Alert */}
        <div className="flex items-center gap-3">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
          </span>
          <span className="font-karla font-bold text-xs uppercase tracking-widest bg-white/20 px-2 py-0.5 rounded-[2px]">
            PRIORITY:
          </span>
          <p className="font-rubik font-semibold text-xs sm:text-sm tracking-wide uppercase">
            24/7 EMERGENCY POWER OUTAGE? DIESEL GENERATORS ON STANDBY IN HYDERABAD
          </p>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href={`tel:${APP_CONFIG.phonePrimary}`}
            className="h-9 px-4 bg-white text-[#D32F2F] hover:bg-slate-100 font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] flex items-center gap-2 transition-all shadow-sm active:scale-98"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>+91 {APP_CONFIG.phonePrimary}</span>
          </a>

          {onOpenSizing && (
            <button
              type="button"
              onClick={onOpenSizing}
              className="h-9 px-3.5 bg-black/20 hover:bg-black/30 text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] flex items-center gap-1.5 transition-colors cursor-pointer border border-white/20"
            >
              <span>GET SIZING</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
