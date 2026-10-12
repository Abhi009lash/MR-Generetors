import React from 'react';
import {
  Cpu,
  Thermometer,
  VolumeX,
  Radio,
  Zap,
  ShieldCheck,
} from 'lucide-react';
import { MAHINDRA_BENCHMARKS, type MahindraBenchmark } from './mahindraData';

export const MahindraBenchmarks: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'mpower':
        return <Cpu className="w-5 h-5 text-[#385BAB]" />;
      case 'heat-dissipation':
        return <Thermometer className="w-5 h-5 text-red-500" />;
      case 'acoustic':
        return <VolumeX className="w-5 h-5 text-amber-500" />;
      case 'amf-telematics':
        return <Radio className="w-5 h-5 text-indigo-500" />;
      case 'class-h':
        return <Zap className="w-5 h-5 text-emerald-500" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-sky-500" />;
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-white border-t border-slate-200 select-none" id="mahindra-benchmarks">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="font-rubik font-bold text-xs uppercase tracking-wider text-[#385BAB] block">
            ENGINEERING BENCHMARKS &amp; INNOVATION
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] tracking-tight">
            Engineering Architecture &amp; Technical Benchmarks
          </h2>
          <p className="font-karla text-sm text-slate-600 leading-relaxed">
            Designed for continuous prime power and emergency standby applications, every Mahindra Powerol generator embodies advanced engine design, robust heavy-duty alternators, and world-class acoustic dampening.
          </p>
        </div>

        {/* 6 Benchmarks Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MAHINDRA_BENCHMARKS.map((item: MahindraBenchmark) => (
            <div
              key={item.id}
              className="bg-[#F8F9FF] border border-slate-200 rounded-2xl p-6 shadow-2xs hover:shadow-md hover:border-[#00163D] transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getIcon(item.id)}
                </div>

                <h3 className="font-rubik font-bold text-base text-[#00163D] group-hover:text-[#DC2626] transition-colors leading-tight">
                  {item.title}
                </h3>

                <p className="font-karla text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-slate-200/60 flex items-center justify-between text-xs font-karla text-[#00163D] font-bold group-hover:text-[#DC2626]">
                <span>CPCB IV+ Certified</span>
                <span>&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
