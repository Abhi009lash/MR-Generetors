import React from 'react';

const METRICS = [
  {
    id: 'kva-range',
    stat: '10-2250',
    unit: 'kVA',
    label: 'KVA PRIME POWER CAPACITY',
    subtext: 'Compact commercial to multi-MW arrays',
  },
  {
    id: 'oil-interval',
    stat: '500 Hrs',
    unit: '',
    label: 'EXTENDED SERVICE INTERVALS',
    subtext: 'Minimized engine lifecycle upkeep costs',
  },
  {
    id: 'response-sla',
    stat: '< 2 Hrs',
    unit: '',
    label: 'HYDERABAD RESPONSE SLA',
    subtext: 'Emergency breakdown engineer dispatch',
  },
  {
    id: 'genuine-parts',
    stat: '100%',
    unit: '',
    label: 'GENUINE LEYPARTS® BACKED',
    subtext: 'OEM warranty & factory spares depot',
  },
];

export const LeypowerStatsStrip: React.FC = () => {
  return (
    <section className="bg-[#131D3B] text-white py-10 border-y border-[#1E2B52] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {METRICS.map((m) => (
            <div
              key={m.id}
              className="flex flex-col items-center text-center space-y-1.5 p-3 rounded-[4px] bg-[#1A264D]/50 border border-[#263768]/40"
            >
              <div className="flex items-baseline gap-1">
                <span className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#D97706] tracking-tight">
                  {m.stat}
                </span>
                {m.unit && (
                  <span className="font-rubik font-bold text-sm text-[#D97706]">
                    {m.unit}
                  </span>
                )}
              </div>
              <h3 className="font-karla font-bold text-xs uppercase tracking-wider text-slate-200">
                {m.label}
              </h3>
              <p className="font-karla text-[11px] text-slate-400">
                {m.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
