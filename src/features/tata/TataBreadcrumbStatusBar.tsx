import React from 'react';
import { ChevronRight } from 'lucide-react';

interface TataBreadcrumbStatusBarProps {
  onNavigateHome: () => void;
  onNavigateProducts: () => void;
}

export const TataBreadcrumbStatusBar: React.FC<TataBreadcrumbStatusBarProps> = ({
  onNavigateHome,
  onNavigateProducts,
}) => {
  return (
    <div className="bg-[#EFF4FF] border-b border-[#D6E4FF] select-none py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-karla font-bold tracking-wider uppercase text-slate-600">
            <button
              type="button"
              onClick={onNavigateHome}
              className="hover:text-[#00163D] transition-colors cursor-pointer"
            >
              HOME
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <button
              type="button"
              onClick={onNavigateProducts}
              className="hover:text-[#00163D] transition-colors cursor-pointer"
            >
              SALES &amp; PRODUCTS
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#00163D] font-extrabold">
              TATA DIESEL GENERATORS
            </span>
          </nav>

          {/* Right Live Status Strip */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-1.5 bg-[#E5EEFF] px-2.5 py-0.5 rounded-[2px] border border-[#CCDFFF]">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="font-karla font-bold text-[11px] text-[#00163D] uppercase tracking-wider">
                DEPOT DISPATCH: 25 - 100 kVA READY IN HYDERABAD
              </span>
            </div>

            <span className="hidden md:inline font-karla font-bold text-[11px] text-slate-600 uppercase tracking-wider">
              AUTHORIZED SALES &amp; FACTORY AMC PARTNER
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
