import React from 'react';
import { Info, ArrowRight } from 'lucide-react';
import { MAHINDRA_COMPARISON_MATRIX, type MahindraComparisonRow } from './mahindraData';

interface MahindraComparisonMatrixProps {
  onOpenQuoteModal: (capacity: string) => void;
}

export const MahindraComparisonMatrix: React.FC<MahindraComparisonMatrixProps> = ({
  onOpenQuoteModal,
}) => {
  return (
    <section className="py-12 sm:py-16 bg-white border-t border-slate-200 select-none" id="mahindra-matrix">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="font-rubik font-bold text-xs uppercase tracking-wider text-[#385BAB] block">
            POWERTRAIN BENCHMARK &amp; FUEL EFFICIENCY
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] tracking-tight">
            Powertrain &amp; Fuel Efficiency Comparison Matrix
          </h2>
          <p className="font-karla text-sm text-slate-600 leading-relaxed">
            Engineered segment benchmark governing, maximum power density, dynamic transient response, and optimized fuel consumption across all prime generation steps.
          </p>
        </div>

        {/* Responsive Table Container */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs">
          <table className="w-full text-left border-collapse text-xs font-karla">
            <thead>
              <tr className="bg-[#00163D] text-white font-rubik font-bold text-[11px] uppercase tracking-wider">
                <th className="p-3.5 pl-5">Capacity (kVA)</th>
                <th className="p-3.5">Engine Model</th>
                <th className="p-3.5 text-center">Cylinders</th>
                <th className="p-3.5">Aspiration</th>
                <th className="p-3.5 text-center">Fuel Consumption @ 75%</th>
                <th className="p-3.5 text-center">Oil Sump</th>
                <th className="p-3.5 text-center">Noise @ 1m</th>
                <th className="p-3.5 pr-5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {MAHINDRA_COMPARISON_MATRIX.map((row: MahindraComparisonRow, idx: number) => (
                <tr
                  key={row.capacity}
                  className={`hover:bg-[#F8F9FF] transition-colors ${
                    idx % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'
                  }`}
                >
                  <td className="p-3.5 pl-5 font-rubik font-bold text-[#00163D]">
                    <span className="px-2 py-0.5 rounded bg-[#EFF4FF] text-[#00163D]">
                      {row.capacity}
                    </span>
                  </td>
                  <td className="p-3.5 font-semibold text-slate-800">
                    {row.engineModel}
                  </td>
                  <td className="p-3.5 text-center text-slate-600 font-medium">
                    {row.cylinders}
                  </td>
                  <td className="p-3.5 text-slate-600">
                    {row.aspiration}
                  </td>
                  <td className="p-3.5 text-center font-bold text-emerald-700">
                    {row.fuelConsumption75}
                  </td>
                  <td className="p-3.5 text-center text-slate-600">
                    {row.oilSump}
                  </td>
                  <td className="p-3.5 text-center text-slate-600 font-medium">
                    {row.noiseLevel}
                  </td>
                  <td className="p-3.5 pr-5 text-right">
                    <button
                      type="button"
                      onClick={() => onOpenQuoteModal(row.capacity)}
                      className="px-3 py-1.5 rounded bg-[#00163D] hover:bg-[#DC2626] text-white font-rubik font-bold text-[10px] uppercase tracking-wider inline-flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>QUOTE</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note Disclaimer Box */}
        <div className="p-4 rounded-xl bg-[#F8F9FF] border border-slate-200 flex items-start gap-3 text-xs font-karla text-slate-600">
          <Info className="w-4 h-4 text-[#385BAB] shrink-0 mt-0.5" />
          <p>
            * Fuel consumption values based on standard test conditions (ISO 3046 / ISO 8528). Actual site consumption may vary depending on ambient temperature, power factor, fuel density, and dynamic load cycling.
          </p>
        </div>
      </div>
    </section>
  );
};
