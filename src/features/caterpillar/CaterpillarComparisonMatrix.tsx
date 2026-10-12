import React from 'react';
import { Info, ArrowRight } from 'lucide-react';
import { CATERPILLAR_COMPARISON_MATRIX, type CaterpillarComparisonRow } from './caterpillarData';

interface CaterpillarComparisonMatrixProps {
  onRequestTechMatrix?: () => void;
}

export const CaterpillarComparisonMatrix: React.FC<CaterpillarComparisonMatrixProps> = ({
  onRequestTechMatrix,
}) => {
  const handleScrollToQuote = () => {
    if (onRequestTechMatrix) {
      onRequestTechMatrix();
    } else {
      const elem = document.getElementById('caterpillar-quote');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-14 lg:py-16 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <span className="font-karla font-bold text-xs uppercase tracking-wider text-amber-600 block">
            POWERTRAIN EFFICIENCY
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] uppercase tracking-tight">
            Caterpillar Powertrain &amp; Fuel Efficiency Matrix
          </h2>
          <p className="font-karla text-sm text-slate-600">
            Estimated factory engineering benchmarks calculated under ISO 8528 prime continuous electrical loads:
          </p>
        </div>

        {/* Matrix Table */}
        <div className="bg-white border border-slate-200 rounded-[2px] shadow-xs overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[880px]">
            <thead>
              <tr className="bg-[#0A1D3F] text-white font-karla font-bold text-xs uppercase tracking-wider">
                <th className="py-3.5 px-4">GENERATOR RATING</th>
                <th className="py-3.5 px-4">ENGINE MODEL</th>
                <th className="py-3.5 px-4">CYLINDER / DISP</th>
                <th className="py-3.5 px-4">ASPIRATION TYPE</th>
                <th className="py-3.5 px-4">75% FUEL RATE</th>
                <th className="py-3.5 px-4">CONTROL PANEL</th>
                <th className="py-3.5 px-4">NOISE LEVEL</th>
                <th className="py-3.5 px-4 text-center">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-karla text-xs sm:text-sm">
              {CATERPILLAR_COMPARISON_MATRIX.map((row: CaterpillarComparisonRow, idx: number) => (
                <tr
                  key={row.rating}
                  className={`hover:bg-amber-50/40 transition-colors ${
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
                  <td className="py-3.5 px-4 text-slate-700 whitespace-nowrap">{row.cylinderDisp}</td>
                  <td className="py-3.5 px-4 text-slate-700 whitespace-nowrap">{row.aspiration}</td>
                  <td className="py-3.5 px-4 text-amber-700 font-bold whitespace-nowrap">
                    {row.fuelRate}
                  </td>
                  <td className="py-3.5 px-4 text-slate-700 whitespace-nowrap">{row.controlPanel}</td>
                  <td className="py-3.5 px-4 text-slate-700 whitespace-nowrap">{row.noiseLevel}</td>
                  <td className="py-3.5 px-4 text-center">
                    <button
                      type="button"
                      onClick={handleScrollToQuote}
                      className="px-2.5 py-1 bg-[#00163D] hover:bg-[#0F2B5C] text-white text-[11px] font-bold rounded-[2px] cursor-pointer"
                    >
                      QUOTE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Callout Banner */}
        <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-[2px] p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="font-karla text-xs sm:text-sm text-slate-700">
              Need multi-megawatt bus-synchronizing, custom acoustic sound-attenuated rooms, or bulk fuel transfer systems? Our Caterpillar application engineers are ready to assist.
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
