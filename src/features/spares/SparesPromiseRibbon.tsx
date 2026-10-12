import React from 'react';
import { Award, PackageCheck, MapPin, Clock } from 'lucide-react';

export const SparesPromiseRibbon: React.FC = () => {
  const promises = [
    {
      title: 'RIGHT QUALITY',
      icon: Award,
      color: 'text-amber-500',
      description: '100% genuine OEM-sourced components direct from authorized manufacturer supply lines.',
    },
    {
      title: 'RIGHT QUANTITY',
      icon: PackageCheck,
      color: 'text-sky-500',
      description: 'Ample warehouse inventory for immediate delivery matching your engine’s maintenance schedule.',
    },
    {
      title: 'RIGHT PLACE',
      icon: MapPin,
      color: 'text-red-500',
      description: 'Direct on-site delivery to your facility or emergency dispatch collection depot across AP & TS.',
    },
    {
      title: 'RIGHT TIME',
      icon: Clock,
      color: 'text-emerald-500',
      description: 'Prevent prolonged emergency downtime with prompt 2-to-4-hour field rapid delivery dispatch.',
    },
  ];

  return (
    <div className="bg-[#EFF4FF] border-b border-blue-100 py-6 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {promises.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white border border-slate-200/80 rounded-xl p-4 shadow-2xs hover:shadow-sm transition-shadow flex items-start gap-3.5"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div className="space-y-1">
                  <h3 className="font-rubik font-bold text-xs uppercase tracking-wider text-[#00163D]">
                    {item.title}
                  </h3>
                  <p className="font-karla text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
