import React from 'react';
import { ChevronRight, ShieldCheck, Award } from 'lucide-react';

interface PortableComplianceBarProps {
  onNavigateHome: () => void;
  onNavigateProducts: () => void;
}

export const PortableComplianceBar: React.FC<PortableComplianceBarProps> = ({
  onNavigateHome,
  onNavigateProducts,
}) => {
  return (
    <div className="bg-[#F4F6F9] border-b border-slate-200 select-none py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        {/* Left: Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-karla font-bold tracking-wider uppercase text-[#44464F]">
          <button
            type="button"
            onClick={onNavigateHome}
            className="hover:text-[#00163D] transition-colors cursor-pointer"
          >
            HOME
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-[#747780]" />
          <button
            type="button"
            onClick={onNavigateProducts}
            className="hover:text-[#00163D] transition-colors cursor-pointer"
          >
            PRODUCTS
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-[#747780]" />
          <span className="text-[#00163D] font-extrabold">
            MOBILE &amp; PORTABLE GENERATORS
          </span>
        </nav>

        {/* Right: 3 Compliance Badges */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Badge 1: CPCB-IV+ */}
          <div className="inline-flex items-center gap-1.5 bg-[#E5EEFF] px-2.5 py-1 rounded-[2px] text-[#00163D] text-[11px] font-karla font-bold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#385BAB]" />
            <span>CPCB-IV+ COMPLIANT</span>
          </div>

          {/* Badge 2: German AL-KO */}
          <div className="inline-flex items-center gap-1.5 bg-[#E5EEFF] px-2.5 py-1 rounded-[2px] text-[#00163D] text-[11px] font-karla font-bold tracking-wider">
            <ShieldCheck className="w-3 h-3 text-[#385BAB]" />
            <span>GERMAN AL-KO AXLE CERTIFIED</span>
          </div>

          {/* Badge 3: RTO Approved */}
          <div className="inline-flex items-center gap-1.5 bg-[#DFE9FB] px-2.5 py-1 rounded-[2px] text-[#00163D] text-[11px] font-karla font-bold tracking-wider">
            <Award className="w-3 h-3 text-[#D97706]" />
            <span>TELANGANA &amp; AP RTO APPROVED</span>
          </div>
        </div>
      </div>
    </div>
  );
};
