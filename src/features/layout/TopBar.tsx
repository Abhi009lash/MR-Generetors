import React from 'react';
import { MapPin, Phone, Mail, FileDown } from 'lucide-react';
import { APP_CONFIG } from '../../core/config';

interface TopBarProps {
  onOpenBrochureModal?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenBrochureModal }) => {
  return (
    <div className="bg-navy-950 text-brand-softBlue text-xs py-2 px-4 sm:px-6 lg:px-12 border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left Information */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-[11px] sm:text-xs">
          <div className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-brand-amber shrink-0" />
            <span>Hyderabad, Telangana</span>
          </div>

          <a
            href={`tel:${APP_CONFIG.phonePrimary}`}
            className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors font-bold"
          >
            <Phone className="w-3.5 h-3.5 text-brand-red shrink-0" />
            <span>24/7 Support: +91 {APP_CONFIG.phonePrimary}</span>
          </a>

          <a
            href={`mailto:${APP_CONFIG.email}`}
            className="hidden lg:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-brand-amber shrink-0" />
            <span>{APP_CONFIG.email}</span>
          </a>
        </div>

        {/* Right Information & Actions */}
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <span className="hidden sm:inline-block text-slate-400">
            Authorised Greaves Dealership
          </span>
          <button
            onClick={onOpenBrochureModal}
            className="inline-flex items-center gap-1.5 text-brand-lightBlue hover:text-white font-bold uppercase tracking-wider transition-colors"
          >
            <FileDown className="w-3.5 h-3.5 text-brand-amber shrink-0" />
            <span>Download Brochure</span>
          </button>
        </div>
      </div>
    </div>
  );
};
