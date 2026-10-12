import React from 'react';
import { Info, ArrowRight } from 'lucide-react';
import { EICHER_COMPARISON_MATRIX, type EicherComparisonRow } from './eicherData';

interface EicherComparisonMatrixProps {
  onRequestTechMatrix?: () => void;
}

export const EicherComparisonMatrix: React.FC<EicherComparisonMatrixProps> = ({
  onRequestTechMatrix,
}) => {
  const handleScrollToQuote = () => {
    if (onRequestTechMatrix) {
      onRequestTechMatrix();
    } else {
      const elem = document.getElementById('eicher-quote');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-14 lg:py-16 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#385BAB] block">
            SIDE-BY-SIDE SPECS
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] uppercase tracking-tight">
            Eicher Genset Technical Comparison Matrix
          </h2>
          <p className="font-karla text-sm text-slate-600">
            Full technical comparison of factory-certified Eicher CPCB IV+ DG sets for commercial, institutional, and industrial facilities:
          </p>
        </div>

        {/* Matrix Table */}
        <div className="bg-white border border-slate-200 rounded-[2px] shadow-xs overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[880px]">
            <thead>
              <tr className="bg-[#0A1D3F] text-white font-karla font-bold text-xs uppercase tracking-wider">
                <th className="py-3.5 px-4">GENERATOR RATING</th>
                <th className="py-3.5 px-4">ENGINE MODEL</th>
                <th className="py-3.5 px-4">CYLINDERS</th>
                <th className="py-3.5 px-4">DISPLACEMENT</th>
                <th className="py-3.5 px-4">ASPIRATION</th>
                <th className="py-3.5 px-4">FUEL CONS. (75% LOAD)</th>
                <th className="py-3.5 px-4">FUEL TANK</th>
                <th className="py-3.5 px-4">SPEED @ 50 HZ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-karla text-xs sm:text-sm">
              {EICHER_COMPARISON_MATRIX.map((row: EicherComparisonRow, idx: number) => (
                <tr
                  key={row.rating}
                  className={`hover:bg-blue-50/40 transition-colors ${
                    row.isFlagship
                      ? 'bg-amber-50/30 font-medium'
                      : idx % 2 === 1
                      ? 'bg-slate-50/60'
                      : 'bg-white'
                  }`}
                >
                  <td className="py-3.5 px-4 font-bold text-[#00163D] whitespace-nowrap">
                    {row.rating}
                    {row.isFlagship && (
                      <span className="ml-2 text-[10px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded-[2px] uppercase">
                        POPULAR
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-slate-800 font-semibold whitespace-nowrap">
                    {row.engineModel}
                  </td>
                  <td className="py-3.5 px-4 text-slate-700 whitespace-nowrap">{row.cylinders}</td>
                  <td className="py-3.5 px-4 text-slate-700 whitespace-nowrap">{row.displacement}</td>
                  <td className="py-3.5 px-4 text-slate-700 whitespace-nowrap">{row.aspiration}</td>
                  <td className="py-3.5 px-4 text-[#385BAB] font-bold whitespace-nowrap">
                    {row.fuelRate}
                  </td>
                  <td className="py-3.5 px-4 text-slate-700 whitespace-nowrap">{row.fuelTank}</td>
                  <td className="py-3.5 px-4 text-slate-700 whitespace-nowrap">{row.rpm} RPM</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Callout Banner */}
        <div className="bg-[#EBF2FE] border border-[#BFD5FA] rounded-[2px] p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-[#385BAB] shrink-0 mt-0.5" />
            <p className="font-karla text-xs sm:text-sm text-slate-700">
              Need custom configurations such as auto-synchronized dual DG sets, AMF transfer panels, or trailer-mounted mobile acoustic enclosures? Contact our engineering design desk.
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
