import React from 'react';
import { Info, ArrowRight } from 'lucide-react';
import { KIRLOSKAR_COMPARISON_MATRIX, type KirloskarComparisonRow } from './kirloskarData';

interface KirloskarComparisonMatrixProps {
  onRequestTechMatrix?: () => void;
}

export const KirloskarComparisonMatrix: React.FC<KirloskarComparisonMatrixProps> = ({
  onRequestTechMatrix,
}) => {
  const handleScrollToQuote = () => {
    if (onRequestTechMatrix) {
      onRequestTechMatrix();
    } else {
      const elem = document.getElementById('kirloskar-quote');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-14 lg:py-16 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#0D652D] block">
            SIDE-BY-SIDE SPECS
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] uppercase tracking-tight">
            Technical Powertrain Comparison
          </h2>
          <p className="font-karla text-sm text-slate-600">
            Official engineering benchmarks for factory-certified Kirloskar KOEL Green diesel generator sets in Hyderabad:
          </p>
        </div>

        {/* Matrix Table */}
        <div className="bg-white border border-slate-200 rounded-[2px] shadow-xs overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[880px]">
            <thead>
              <tr className="bg-[#0A1D3F] text-white font-karla font-bold text-xs uppercase tracking-wider">
                <th className="py-3.5 px-4">GENERATOR RATING</th>
                <th className="py-3.5 px-4">ENGINE MODEL</th>
                <th className="py-3.5 px-4">CYLINDER CONFIG</th>
                <th className="py-3.5 px-4">ASPIRATION / COOLING</th>
                <th className="py-3.5 px-4">FUEL CONS. @ 75%</th>
                <th className="py-3.5 px-4">BASE TANK</th>
                <th className="py-3.5 px-4">NOISE LEVEL</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-karla text-xs sm:text-sm">
              {KIRLOSKAR_COMPARISON_MATRIX.map((row: KirloskarComparisonRow, idx: number) => (
                <tr
                  key={row.rating}
                  className={`hover:bg-emerald-50/40 transition-colors ${
                    row.isFlagship
                      ? 'bg-emerald-50/30 font-medium'
                      : idx % 2 === 1
                      ? 'bg-slate-50/60'
                      : 'bg-white'
                  }`}
                >
                  <td className="py-3.5 px-4 font-bold text-[#00163D] whitespace-nowrap">
                    {row.rating}
                    {row.isFlagship && (
                      <span className="ml-2 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded-[2px] uppercase">
                        POPULAR
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-slate-800 font-semibold whitespace-nowrap">
                    {row.engineModel}
                  </td>
                  <td className="py-3.5 px-4 text-slate-700 whitespace-nowrap">{row.cylinderConfig}</td>
                  <td className="py-3.5 px-4 text-slate-700 whitespace-nowrap">{row.aspiration}</td>
                  <td className="py-3.5 px-4 text-[#0D652D] font-bold whitespace-nowrap">
                    {row.fuelRate}
                  </td>
                  <td className="py-3.5 px-4 text-slate-700 whitespace-nowrap">{row.baseTank}</td>
                  <td className="py-3.5 px-4 text-slate-700 whitespace-nowrap">{row.noiseLevel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Callout Banner */}
        <div className="bg-[#E6F4EA] border border-[#B7E1CD] rounded-[2px] p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-[#0D652D] shrink-0 mt-0.5" />
            <p className="font-karla text-xs sm:text-sm text-slate-700">
              Need custom installations such as auto-synchronized multi-megawatt setups, mobile trailer-mounted silent enclosures, or bulk fuel day tanks? Consult our technical sales desk.
            </p>
          </div>
          <button
            type="button"
            onClick={handleScrollToQuote}
            className="shrink-0 h-10 px-5 bg-[#00163D] hover:bg-[#0F2B5C] text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <span>REQUEST FULL TECH MATRIX</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
