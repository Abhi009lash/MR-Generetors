import React from 'react';
import { MapPin, Sparkles, Mail, ShieldCheck } from 'lucide-react';
import { APP_CONFIG } from '../../core/config';

interface TopBarProps {
  onOpenBrochureModal?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenBrochureModal: _onOpenBrochureModal }) => {
  return (
    <div className="bg-[#00163D] text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-12 border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-[11px] sm:text-xs">
        {/* Left items */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          {/* Location */}
          <div className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-[#DFE9FB] shrink-0" />
            <span>Hyderabad-500038 (Telangana)</span>
          </div>

          <span className="hidden md:inline text-slate-600">|</span>

          {/* Emergency Hotline */}
          <a
            href={`tel:${APP_CONFIG.phonePrimary}`}
            className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-amber shrink-0" />
            <span>
              24X7 Emergency Hotline: <strong className="text-white font-bold">+91-{APP_CONFIG.phonePrimary}</strong>
            </span>
          </a>

          <span className="hidden lg:inline text-slate-600">|</span>

          {/* Email */}
          <a
            href={`mailto:${APP_CONFIG.email}`}
            className="hidden lg:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#DFE9FB] shrink-0" />
            <span>{APP_CONFIG.email}</span>
          </a>
        </div>

        {/* Right Tag */}
        <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-karla font-bold text-[#DFE9FB] uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-amber shrink-0" />
          <span>CPCB IV+ COMPLIANT &bull; 100% GENUINE OEM SPARES</span>
        </div>
      </div>
    </div>
  );
};
