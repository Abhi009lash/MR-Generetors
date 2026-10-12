import React from 'react';
import { Volume2, Droplets, Zap, Cpu, Truck, Clock } from 'lucide-react';
import { PORTABLE_BENCHMARKS, type PortableBenchmarkItem } from './portableData';

const iconMap = {
  Volume2: Volume2,
  Droplets: Droplets,
  Zap: Zap,
  Cpu: Cpu,
  Truck: Truck,
  Clock: Clock,
};

export const PortableArchitectureGrid: React.FC = () => {
  return (
    <section className="bg-[#F8F9FF] py-16 lg:py-20 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-karla font-bold text-xs uppercase tracking-widest text-[#385BAB] block">
            ENGINEERING BENCHMARKS
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] tracking-tight">
            Engineering Architecture Built For Unforgiving Operating Conditions
          </h2>
          <p className="font-karla text-sm sm:text-base text-[#44464F] leading-relaxed">
            Heavy-duty towable and portable power engineered to survive off-road transport, extreme ambient heat, and continuous full-load operating cycles.
          </p>
        </div>

        {/* 6 Cards Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTABLE_BENCHMARKS.map((item: PortableBenchmarkItem) => {
            const IconComponent = iconMap[item.iconName];
            return (
              <div
                key={item.id}
                className="bg-white border border-slate-200 rounded-[4px] p-7 shadow-xs flex flex-col justify-between space-y-6 hover:border-[#385BAB] hover:shadow-md transition-all group"
              >
                <div className="space-y-4">
                  {/* Icon Square */}
                  <div className="w-12 h-12 rounded-[2px] bg-[#E5EEFF] group-hover:bg-[#00163D] transition-colors flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-[#00163D] group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="font-rubik font-bold text-lg sm:text-xl text-[#00163D] leading-snug">
                    {item.title}
                  </h3>

                  <p className="font-karla text-sm text-[#44464F] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Metadata Tags */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-karla font-bold uppercase tracking-wider">
                  <span className="text-[#00163D]">{item.primaryTag}</span>
                  <span
                    style={{ color: item.secondaryTagColor || '#385BAB' }}
                    className="truncate max-w-[150px] text-right"
                  >
                    {item.secondaryTag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
