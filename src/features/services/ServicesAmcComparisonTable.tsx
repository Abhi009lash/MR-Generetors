import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { AMC_COMPARISON_ROWS, type AmcComparisonRow } from './servicesData';

interface ServicesAmcComparisonTableProps {
  onRequestAmcQuote: () => void;
}

export const ServicesAmcComparisonTable: React.FC<ServicesAmcComparisonTableProps> = ({
  onRequestAmcQuote,
}) => {
  return (
    <section className="bg-[#EFF4FF] py-14 lg:py-16 border-b border-[#D6E4FF] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#E5EEFF] border border-[#CCDFFF] text-[#00163D] px-3.5 py-1.5 rounded-[2px]">
            <ShieldCheck className="w-4 h-4 text-[#D97706]" />
            <span className="font-karla font-bold text-xs uppercase tracking-wider">
              ANNUAL MAINTENANCE CONTRACTS (AMC) COMPARISON
            </span>
          </div>

          <h2 className="font-rubik font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] uppercase tracking-tight">
            SELECT THE RIGHT PROTECTION TIER FOR YOUR FACILITY
          </h2>

          <p className="font-karla text-xs sm:text-sm text-slate-600 leading-relaxed">
            Transparent contractual service scopes tailored to continuous manufacturing loads, commercial IT parks, and standby residential complexes.
          </p>
        </div>

        {/* Matrix Card */}
        <div className="bg-white rounded-[8px] shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              {/* Header */}
              <thead>
                <tr className="bg-[#00163D] text-white">
                  <th className="py-4 px-6 font-karla font-bold text-xs uppercase tracking-wider w-1/3">
                    COVERAGE SCOPE &amp; DELIVERABLES
                  </th>
                  <th className="py-4 px-6 bg-[#0F2B5C] border-l border-[#00163D] w-1/3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#DFE9FB]">
                        NON-COMPREHENSIVE AMC
                      </span>
                      <span className="bg-[#131D3B] text-[#DFE9FB] font-karla font-bold text-[10px] px-2 py-0.5 rounded-[2px] uppercase">
                        LABOR ONLY
                      </span>
                    </div>
                  </th>
                  <th className="py-4 px-6 bg-[#0A1D3F] border-l border-[#00163D] w-1/3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#D97706]">
                        COMPREHENSIVE AMC
                      </span>
                      <span className="bg-[#D32F2F] text-white font-karla font-bold text-[10px] px-2 py-0.5 rounded-[2px] uppercase">
                        100% PARTS INCLUDED
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>

              {/* Rows */}
              <tbody className="divide-y divide-slate-100 text-xs font-karla">
                {AMC_COMPARISON_ROWS.map((row: AmcComparisonRow, idx: number) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3.5 px-6 font-bold text-[#00163D]">
                      {row.deliverable}
                    </td>
                    <td className="py-3.5 px-6 bg-[#EFF4FF]/30 text-slate-700">
                      {row.nonComprehensive}
                    </td>
                    <td
                      className={`py-3.5 px-6 bg-[#DFE9FB]/40 ${
                        row.isHighlight
                          ? 'font-bold text-emerald-800'
                          : 'font-semibold text-[#00163D]'
                      }`}
                    >
                      {row.isHighlight && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 inline mr-1" />}
                      {row.comprehensive}
                    </td>
                  </tr>
                ))}

                {/* Footer Row */}
                <tr className="bg-[#E5EEFF] border-t-2 border-[#CCDFFF]">
                  <td className="py-4 px-6 font-bold text-xs uppercase text-[#00163D]">
                    RECOMMENDED FACILITY PROFILES
                  </td>
                  <td className="py-4 px-6 text-slate-700">
                    Commercial complexes, retail outlets, educational institutions, construction sites.
                  </td>
                  <td className="py-4 px-6 font-bold text-[#00163D] bg-[#DFE9FB]">
                    Critical hospitals, pharma manufacturing, data centers, tier-1 IT parks.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Bottom Custom Proposal CTA Strip */}
          <div className="bg-[#E5EEFF] p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
            <span className="font-karla text-xs sm:text-sm text-[#00163D] text-center sm:text-left">
              Need custom coverage with a dedicated technician stationed full-time at your facility?
            </span>
            <button
              type="button"
              onClick={onRequestAmcQuote}
              className="inline-flex items-center gap-2 bg-[#00163D] hover:bg-[#0A1D3F] text-white font-rubik font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-[2px] transition-colors shrink-0 cursor-pointer"
            >
              <span>REQUEST CUSTOM AMC PROPOSAL</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
