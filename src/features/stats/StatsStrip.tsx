import React from 'react';
import { History, Users, CheckSquare, Settings } from 'lucide-react';

export const StatsStrip: React.FC = () => {
  const stats = [
    {
      value: '10+',
      label: 'Years in Business',
      icon: <History className="w-5 h-5 text-brand-amber" />,
    },
    {
      value: '1,658+',
      label: 'Happy Clients',
      icon: <Users className="w-5 h-5 text-brand-amber" />,
    },
    {
      value: '2,567+',
      label: 'Projects Completed',
      icon: <CheckSquare className="w-5 h-5 text-brand-amber" />,
    },
    {
      value: '25+',
      label: 'Trained Engineers',
      icon: <Settings className="w-5 h-5 text-brand-amber" />,
    },
  ];

  return (
    <div className="w-full select-none">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3.5 sm:gap-4 p-2 rounded-[2px]"
          >
            {/* Icon Overlay Badge with dark rounded frame */}
            <div className="w-12 h-12 rounded-lg bg-[#00225A]/70 border border-white/10 flex items-center justify-center shrink-0">
              {stat.icon}
            </div>

            {/* Number and Label */}
            <div className="flex flex-col">
              <span className="font-rubik font-bold text-2xl sm:text-3xl tracking-tight text-white leading-none">
                {stat.value}
              </span>
              <span className="font-karla font-bold text-[11px] sm:text-xs uppercase tracking-[0.6px] text-[#D9E3F5] mt-1">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
