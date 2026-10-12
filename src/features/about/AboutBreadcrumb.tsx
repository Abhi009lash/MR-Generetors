import React from 'react';
import { Home, ChevronRight, Star } from 'lucide-react';

interface AboutBreadcrumbProps {
  onNavigateHome?: () => void;
}

export const AboutBreadcrumb: React.FC<AboutBreadcrumbProps> = ({ onNavigateHome }) => {
  return (
    <div className="bg-[#0A1D3F] border-b border-[#0F2B5C] py-2.5 px-4 sm:px-6 lg:px-12 select-none">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Left: Breadcrumb Navigation */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onNavigateHome}
            className="flex items-center gap-1.5 text-[#C4C6D0] hover:text-white transition-colors cursor-pointer font-karla font-bold uppercase tracking-wider text-[11px]"
          >
            <Home className="w-3.5 h-3.5 shrink-0" />
            <span>HOME</span>
          </button>

          <ChevronRight className="w-3 h-3 text-[#C4C6D0]" />

          <span className="font-karla font-bold uppercase tracking-wider text-[11px] text-white">
            ABOUT US
          </span>
        </div>

        {/* Right: Dealership status badge */}
        <div className="flex items-center gap-3 font-karla font-bold uppercase tracking-wider text-[11px]">
          <div className="flex items-center gap-1.5 text-[#DFE9FB]">
            <span className="w-2 h-2 rounded-full bg-[#10B981] shrink-0" />
            <span>AUTHORISED GREAVES DEALERSHIP</span>
          </div>

          <span className="text-slate-600 hidden sm:inline">|</span>

          <div className="hidden sm:flex items-center gap-1 text-[#D97706]">
            <Star className="w-3 h-3 fill-current shrink-0" />
            <span>Telangana &amp; Andhra Pradesh</span>
          </div>
        </div>
      </div>
    </div>
  );
};
