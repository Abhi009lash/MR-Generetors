import React from 'react';
import { CUMMINS_COMPARISON_MATRIX, type CumminsComparisonRow } from './cumminsData';

export const CumminsComparisonMatrix: React.FC = () => {
  return (
    <section className="bg-white py-14 lg:py-16 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#385BAB] block">
            ISO 8528 &amp; CPCB IV+ VERIFIED DATA
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] uppercase tracking-tight">
            TECHNICAL COMPARISON &amp; POWERTRAIN MATRIX
          </h2>
          <p className="font-karla text-sm text-slate-600">
            Comparative engineering specifications across standard Cummins generator models sold and supported in Hyderabad:
          </p>
        </div>

        {/* Matrix Table */}
        <div className="bg-white border border-slate-200 rounded-[2px] shadow-xs overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[880px]">
            <thead>
              <tr className="bg-[#0A1D3F] text-white font-karla font-bold text-xs uppercase tracking-wider">
                <th className="py-3.5 px-4">MODEL</th>
                <th className="py-3.5 px-4">ENGINE MODEL</th>
                <th className="py-3.5 px-4">CYLINDERS</th>
                <th className="py-3.5 px-4">DISPLACEMENT</th>
                <th className="py-3.5 px-4">ASPIRATION</th>
                <th className="py-3.5 px-4">GOVERNOR</th>
                <th className="py-3.5 px-4">FULL LOAD FUEL (75%)</th>
                <th className="py-3.5 px-4">BASE TANK</th>
                <th className="py-3.5 px-4">SPEED (RPM)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-karla text-xs sm:text-sm">
              {CUMMINS_COMPARISON_MATRIX.map((row: CumminsComparisonRow, idx: number) => (
                <tr
                  key={row.kva}
                  className={idx % 2 === 1 ? 'bg-slate-50/60' : 'bg-white'}
                >
                  <td className="py-3 px-4 font-bold text-[#00163D] whitespace-nowrap">
                    {row.kva}
                  </td>
                  <td className="py-3 px-4 text-slate-800 font-semibold whitespace-nowrap">
                    {row.engineModel}
                  </td>
                  <td className="py-3 px-4 text-slate-700 whitespace-nowrap">{row.cylinders}</td>
                  <td className="py-3 px-4 text-slate-700 whitespace-nowrap">{row.displacement}</td>
                  <td className="py-3 px-4 text-slate-700 whitespace-nowrap">{row.aspiration}</td>
                  <td className="py-3 px-4 text-slate-700 whitespace-nowrap">{row.governor}</td>
                  <td className="py-3 px-4 text-[#385BAB] font-bold whitespace-nowrap">
                    {row.fuelRate}
                  </td>
                  <td className="py-3 px-4 text-slate-700 whitespace-nowrap">{row.baseTank}</td>
                  <td className="py-3 px-4 text-slate-700 whitespace-nowrap">{row.rpm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
