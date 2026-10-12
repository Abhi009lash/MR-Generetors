import React from 'react';
import { TATA_COMPARISON_MATRIX } from './tataData';

export const TataComparisonMatrix: React.FC = () => {
  return (
    <section className="bg-[#F8F9FF] py-14 lg:py-16 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#385BAB]">
            COMPARATIVE TECHNICAL SPECIFICATIONS
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] uppercase tracking-tight">
            TECHNICAL COMPARISON MATRIX (25 kVA — 100 kVA)
          </h2>
        </div>

        {/* Matrix Table */}
        <div className="bg-white border border-slate-200 rounded-[2px] shadow-xs overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[760px]">
            <thead>
              <tr className="bg-[#0A1D3F] text-white font-karla font-bold text-xs uppercase tracking-wider">
                <th className="py-3.5 px-4">PARAMETER</th>
                <th className="py-3.5 px-4">25 kVA</th>
                <th className="py-3.5 px-4">35 kVA</th>
                <th className="py-3.5 px-4">62.5 kVA</th>
                <th className="py-3.5 px-4">82.5 kVA</th>
                <th className="py-3.5 px-4">100 kVA</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-karla text-xs sm:text-sm">
              {TATA_COMPARISON_MATRIX.map((row, idx) => (
                <tr
                  key={row.parameter}
                  className={idx % 2 === 1 ? 'bg-slate-50/60' : 'bg-white'}
                >
                  <td className="py-3 px-4 font-bold text-[#00163D] whitespace-nowrap">
                    {row.parameter}
                  </td>
                  <td className="py-3 px-4 text-slate-700 whitespace-nowrap">{row.m25}</td>
                  <td className="py-3 px-4 text-slate-700 whitespace-nowrap">{row.m35}</td>
                  <td className="py-3 px-4 text-slate-700 whitespace-nowrap">{row.m62}</td>
                  <td className="py-3 px-4 text-slate-700 whitespace-nowrap">{row.m82}</td>
                  <td
                    className={`py-3 px-4 whitespace-nowrap font-bold ${
                      row.isHighlight ? 'text-[#385BAB]' : 'text-[#00163D]'
                    }`}
                  >
                    {row.m100}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
