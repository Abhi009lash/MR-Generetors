import React from 'react';
import { Award, Zap, ShieldCheck, Factory } from 'lucide-react';

export const StatsStrip: React.FC = () => {
  const stats = [
    {
      value: '10+',
      label: 'Years Excellence',
      icon: <Award className="w-5 h-5 text-brand-amber" />,
    },
    {
      value: '1,500+',
      label: 'DG Sets Installed',
      icon: <Zap className="w-5 h-5 text-brand-amber" />,
    },
    {
      value: '2,500+',
      label: 'Active AMC Clients',
      icon: <ShieldCheck className="w-5 h-5 text-brand-amber" />,
    },
    {
      value: '99+',
      label: 'Major Brands Supported',
      icon: <Factory className="w-5 h-5 text-brand-amber" />,
    },
  ];

  return (
    <section className="bg-navy-950 border-y border-white/10 py-8 px-4 sm:px-6 lg:px-12 select-none">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 sm:gap-4 p-2 sm:p-3 rounded-[2px] transition-transform hover:-translate-y-0.5"
            >
              {/* Icon Overlay Badge */}
              <div className="w-12 h-12 rounded-[2px] bg-white/10 flex items-center justify-center shrink-0 border border-white/5">
                {stat.icon}
              </div>

              {/* Number and Label */}
              <div className="flex flex-col">
                <span className="font-rubik font-bold text-2xl sm:text-3xl tracking-tight text-white leading-none">
                  {stat.value}
                </span>
                <span className="font-karla font-bold text-[11px] sm:text-xs uppercase tracking-[0.6px] text-brand-softBlue mt-1">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
