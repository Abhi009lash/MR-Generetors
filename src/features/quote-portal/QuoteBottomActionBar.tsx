import React from 'react';
import { Mail, PhoneCall, Headphones } from 'lucide-react';
import { APP_CONFIG } from '../../core/config';

export const QuoteBottomActionBar: React.FC = () => {
  return (
    <section className="bg-[#0F2B5C] text-white py-6 px-4 sm:px-6 lg:px-12 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-center md:text-left">
          <Headphones className="w-8 h-8 text-amber-400 shrink-0 hidden sm:block" />
          <div>
            <p className="font-rubik font-bold text-base sm:text-lg uppercase text-white leading-tight">
              Have an immediate load schedule or tender BOM?
            </p>
            <p className="font-karla text-xs text-slate-300">
              Email your technical drawings directly to our engineering desk for immediate takeoff
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <a
            href={`mailto:${APP_CONFIG.email}`}
            className="px-4 py-2.5 bg-white text-[#00163D] rounded-lg font-rubik font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{APP_CONFIG.email}</span>
          </a>

          <a
            href={`tel:${APP_CONFIG.phonePrimary}`}
            className="px-4 py-2.5 bg-[#DC2626] text-white rounded-lg font-rubik font-bold text-xs uppercase tracking-wider hover:bg-red-700 transition-colors flex items-center gap-1.5 shadow"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call Senior Engineer</span>
          </a>
        </div>
      </div>
    </section>
  );
};
