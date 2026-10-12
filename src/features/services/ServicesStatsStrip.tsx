import React from 'react';

const STATS = [
  {
    id: 'arrival-sla',
    value: '< 2 Hours',
    label: 'AVERAGE HYDERABAD ARRIVAL SLA',
  },
  {
    id: 'availability',
    value: '24/7/365',
    label: 'ROUND-THE-CLOCK RAPID RESPONSE',
  },
  {
    id: 'parts-guarantee',
    value: '100% Genuine',
    label: 'FACTORY OEM SPARES GUARANTEED',
  },
  {
    id: 'active-fleet',
    value: '2,500+',
    label: 'GENERATORS ACTIVELY SERVICED',
  },
];

export const ServicesStatsStrip: React.FC = () => {
  return (
    <section className="bg-[#131D3B] text-white py-6 sm:py-8 border-b border-[#0F2B5C] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#0F2B5C]">
          {STATS.map((s) => (
            <div
              key={s.id}
              className="flex flex-col items-center justify-center p-4 text-center space-y-1"
            >
              <span className="font-rubik font-semibold text-2xl sm:text-3xl text-white tracking-tight">
                {s.value}
              </span>
              <span className="font-karla font-bold text-[11px] sm:text-xs uppercase tracking-wider text-[#DFE9FB]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
