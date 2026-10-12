import React from 'react';
import { Cpu, Thermometer, Shield, Activity, Zap, Wrench } from 'lucide-react';
import { CATERPILLAR_BENCHMARKS, type CaterpillarBenchmark } from './caterpillarData';

const getBenchmarkIcon = (iconName: CaterpillarBenchmark['iconName']) => {
  switch (iconName) {
    case 'cpu':
      return <Cpu className="w-5 h-5 text-amber-600" />;
    case 'thermometer':
      return <Thermometer className="w-5 h-5 text-[#D32F2F]" />;
    case 'shield':
      return <Shield className="w-5 h-5 text-emerald-600" />;
    case 'activity':
      return <Activity className="w-5 h-5 text-[#385BAB]" />;
    case 'zap':
      return <Zap className="w-5 h-5 text-amber-500" />;
    case 'wrench':
      return <Wrench className="w-5 h-5 text-[#00163D]" />;
    default:
      return <Cpu className="w-5 h-5 text-amber-600" />;
  }
};

export const CaterpillarBenchmarksSection: React.FC = () => {
  return (
    <section className="bg-white py-14 lg:py-16 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Header */}
        <div className="space-y-2 max-w-3xl">
          <span className="font-karla font-bold text-xs uppercase tracking-wider text-amber-600 block">
            ENGINEERING BENCHMARKS
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] uppercase tracking-tight">
            Engineering Architecture &amp; Technical Benchmarks
          </h2>
          <p className="font-karla text-sm text-slate-600 leading-relaxed">
            Caterpillar diesel gensets engineered for 24/7 continuous operation under extreme harsh ambient conditions of 50°C temperatures without deration or power drops:
          </p>
        </div>

        {/* 6 Cards Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATERPILLAR_BENCHMARKS.map((bench: CaterpillarBenchmark) => (
            <div
              key={bench.id}
              className="bg-[#F8F9FF] border border-slate-200 rounded-[2px] p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-amber-500 hover:shadow-md transition-all"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-[2px] bg-white border border-slate-200 flex items-center justify-center">
                  {getBenchmarkIcon(bench.iconName)}
                </div>

                <div>
                  <h3 className="font-rubik font-bold text-base text-[#00163D] leading-snug">
                    {bench.title}
                  </h3>
                  <span className="font-karla font-bold text-[10px] text-amber-600 uppercase tracking-wider block mt-0.5">
                    {bench.subtitle}
                  </span>
                </div>

                <p className="font-karla text-xs text-slate-600 leading-relaxed">
                  {bench.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
