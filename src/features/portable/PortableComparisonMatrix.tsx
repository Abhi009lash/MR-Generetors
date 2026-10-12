import React from 'react';
import { PORTABLE_COMPARISON_MATRIX, type PortableComparisonRow } from './portableData';
import { FileText } from 'lucide-react';

interface PortableComparisonMatrixProps {
  onRequestTechMatrix?: () => void;
}

export const PortableComparisonMatrix: React.FC<PortableComparisonMatrixProps> = ({
  onRequestTechMatrix,
}) => {
  return (
    <section className="bg-[#F8F9FF] py-16 lg:py-20 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#385BAB] block">
              TECHNICAL SPECIFICATIONS
            </span>
            <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] tracking-tight">
              Engineering Powertrain Matrix
            </h2>
            <p className="font-karla text-sm text-[#44464F]">
              Comprehensive comparative engineering matrix across mobile diesel, petrol and inverter power platforms.
            </p>
          </div>

          <button
            type="button"
            onClick={onRequestTechMatrix}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-50 text-[#00163D] border border-slate-300 font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] transition-colors cursor-pointer self-start md:self-auto shadow-2xs"
          >
            <FileText className="w-4 h-4 text-[#385BAB]" />
            <span>DOWNLOAD COMPLETE MATRIX (PDF)</span>
          </button>
        </div>

        {/* Data Table Container */}
        <div className="bg-white border border-slate-200 rounded-[4px] shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-karla border-collapse">
              <thead>
                <tr className="bg-[#00163D] text-white font-bold uppercase tracking-wider">
                  <th className="py-4 px-4 sm:px-6">Model</th>
                  <th className="py-4 px-4">Engine OEM</th>
                  <th className="py-4 px-4">Alternator Platform</th>
                  <th className="py-4 px-4">Rating (kVA / kW)</th>
                  <th className="py-4 px-4">Fuel</th>
                  <th className="py-4 px-4">Sound @ 7m</th>
                  <th className="py-4 px-4">Mobility Chassis</th>
                  <th className="py-4 px-4 sm:px-6 text-right">Inquiry</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[#00163D]">
                {PORTABLE_COMPARISON_MATRIX.map((row: PortableComparisonRow, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[#F8F9FF] transition-colors"
                  >
                    <td className="py-4 px-4 sm:px-6 font-bold font-rubik text-sm">
                      {row.model}
                    </td>
                    <td className="py-4 px-4 text-slate-700">
                      {row.engine}
                    </td>
                    <td className="py-4 px-4 text-slate-700">
                      {row.alternator}
                    </td>
                    <td className="py-4 px-4 font-bold text-[#385BAB]">
                      {row.kvaKw}
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-block px-2 py-0.5 rounded-[2px] bg-slate-100 text-slate-700 font-bold text-[11px]">
                        {row.fuelType}
                      </span>
                    </td>
                    <td className="py-4 px-4 font-bold text-emerald-700">
                      {row.soundAt7m}
                    </td>
                    <td className="py-4 px-4 text-slate-600">
                      {row.mobilityType}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-right">
                      <button
                        type="button"
                        onClick={onRequestTechMatrix}
                        className="px-3 py-1 bg-[#00163D] hover:bg-[#0F2B5C] text-white font-karla font-bold text-[11px] uppercase tracking-wider rounded-[2px] transition-colors cursor-pointer"
                      >
                        SPECS
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Guarantee Note */}
        <div className="bg-[#EFF4FF] border border-[#CCDFFF] rounded-[2px] p-4 text-xs font-karla text-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span>
            * All mobile generators comply with central pollution control board (CPCB IV+) standards and feature certified highway road suspension systems.
          </span>
          <span className="font-bold text-[#00163D] uppercase whitespace-nowrap">
            ESI Depot Central Yard Hyderabad Stock
          </span>
        </div>
      </div>
    </section>
  );
};
