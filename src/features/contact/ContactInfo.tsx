import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { APP_CONFIG } from '../../core/config';

export const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-6 text-white">
      <div className="inline-flex items-center gap-2">
        <span className="w-2.5 h-6 bg-brand-red rounded-sm" />
        <span className="font-karla font-bold text-xs uppercase tracking-[0.6px] text-brand-red">
          Rapid Response Dispatch
        </span>
      </div>

      <h2 className="font-rubik font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
        Need Reliable Power Backup Today?
      </h2>

      <p className="font-karla text-sm sm:text-base text-brand-softBlue/90 leading-relaxed max-w-xl">
        Contact our central engineering dispatch in Hyderabad for turnkey generator sales, rental availability, genuine OEM spare parts, or comprehensive AMC quotation.
      </p>

      {/* 3 Contact Cards */}
      <div className="space-y-3.5 pt-2">
        {/* Phone Hotline */}
        <div className="p-4 rounded-[4px] bg-navy-850 border border-white/10 flex items-center gap-4 transition-transform hover:-translate-y-0.5">
          <div className="w-11 h-11 rounded-[2px] bg-brand-red flex items-center justify-center text-white shrink-0 shadow-sm">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <span className="block font-karla font-bold text-[11px] uppercase tracking-wider text-brand-softBlue">
              Direct Phone Dispatch
            </span>
            <div className="flex flex-wrap items-center gap-2 mt-0.5">
              <a
                href={`tel:${APP_CONFIG.phonePrimary}`}
                className="font-rubik font-bold text-base sm:text-lg text-white hover:text-brand-amber transition-colors"
              >
                +91 {APP_CONFIG.phonePrimary}
              </a>
              <span className="text-slate-400">/</span>
              <a
                href={`tel:${APP_CONFIG.phoneSecondary}`}
                className="font-rubik font-bold text-base sm:text-lg text-white hover:text-brand-amber transition-colors"
              >
                {APP_CONFIG.phoneSecondary}
              </a>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="p-4 rounded-[4px] bg-navy-850 border border-white/10 flex items-center gap-4 transition-transform hover:-translate-y-0.5">
          <div className="w-11 h-11 rounded-[2px] bg-brand-blue flex items-center justify-center text-white shrink-0 shadow-sm">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <span className="block font-karla font-bold text-[11px] uppercase tracking-wider text-brand-softBlue">
              General &amp; Corporate Enquiries
            </span>
            <a
              href={`mailto:${APP_CONFIG.email}`}
              className="font-rubik font-medium text-sm sm:text-base text-white hover:text-brand-lightBlue transition-colors block mt-0.5"
            >
              {APP_CONFIG.email}
            </a>
          </div>
        </div>

        {/* Central Workshop Address */}
        <div className="p-4 rounded-[4px] bg-navy-850 border border-white/10 flex items-center gap-4 transition-transform hover:-translate-y-0.5">
          <div className="w-11 h-11 rounded-[2px] bg-navy-950 flex items-center justify-center text-brand-amber shrink-0 border border-white/10">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <span className="block font-karla font-bold text-[11px] uppercase tracking-wider text-brand-softBlue">
              Central Workshop &amp; Depot
            </span>
            <p className="font-karla text-xs sm:text-sm text-white/90 mt-0.5 leading-snug">
              {APP_CONFIG.address.full}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
