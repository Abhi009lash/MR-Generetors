import React from 'react';
import { ChevronRight, Wrench, Phone } from 'lucide-react';
import { APP_CONFIG } from '../../core/config';

interface ServicesBreadcrumbBannerProps {
  onNavigateHome: () => void;
}

export const ServicesBreadcrumbBanner: React.FC<ServicesBreadcrumbBannerProps> = ({
  onNavigateHome,
}) => {
  return (
    <div className="bg-[#0F2B5C] border-b border-[#00163D] text-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Left Title & Breadcrumb Block */}
          <div className="space-y-1.5">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-karla text-slate-300">
              <button
                type="button"
                onClick={onNavigateHome}
                className="hover:text-white transition-colors cursor-pointer uppercase font-bold"
              >
                HOME
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[#D97706] font-bold tracking-wide uppercase">
                SERVICES &amp; MAINTENANCE
              </span>
            </div>

            {/* Title */}
            <div className="flex items-center gap-2.5">
              <Wrench className="w-5 h-5 text-[#D97706] shrink-0" />
              <h1 className="font-rubik font-semibold text-lg sm:text-2xl text-white tracking-tight uppercase">
                MR GENERATORS - SERVICES &amp; MAINTENANCE
              </h1>
            </div>
          </div>

          {/* Right Status Tag & Direct Call Button */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* 24/7 Alert Badge */}
            <div className="inline-flex items-center gap-2 bg-[#D32F2F] text-white px-3 py-1.5 rounded-[2px] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="font-karla font-bold text-xs uppercase tracking-wider">
                24/7 BREAKDOWN RESPONSE TEAM DISPATCH READY
              </span>
            </div>

            {/* Direct Emergency Call Button */}
            <a
              href={`tel:${APP_CONFIG.phonePrimary}`}
              className="inline-flex items-center gap-2 bg-[#131D3B] hover:bg-[#1A2850] text-[#DFE9FB] font-karla font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-[2px] border border-white/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D97706]" />
              <span>+91 {APP_CONFIG.phonePrimary}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
