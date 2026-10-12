import React from 'react';
import { Wind, Globe, Gauge, Shield, Volume2, Clock } from 'lucide-react';
import { KIRLOSKAR_BENCHMARKS, type KirloskarBenchmark } from './kirloskarData';

const getBenchmarkIcon = (iconName: KirloskarBenchmark['iconName']) => {
  switch (iconName) {
    case 'wind':
      return <Wind className="w-5 h-5 text-[#0D652D]" />;
    case 'globe':
      return <Globe className="w-5 h-5 text-[#385BAB]" />;
    case 'gauge':
      return <Gauge className="w-5 h-5 text-amber-600" />;
    case 'shield':
      return <Shield className="w-5 h-5 text-emerald-600" />;
    case 'volume':
      return <Volume2 className="w-5 h-5 text-[#00163D]" />;
    case 'clock':
      return <Clock className="w-5 h-5 text-[#D32F2F]" />;
    default:
      return <Shield className="w-5 h-5 text-[#0D652D]" />;
  }
};

export const KirloskarBenchmarksSection: React.FC = () => {
  return (
    <section className="bg-[#F8F9FF] py-14 lg:py-16 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Header */}
        <div className="space-y-2 max-w-3xl">
          <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#0D652D] block">
            MARKET BENCHMARK RELIABILITY
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] uppercase tracking-tight">
            Kirloskar KOEL Green Engineering Benchmarks
          </h2>
          <p className="font-karla text-sm text-slate-600 leading-relaxed">
            Market benchmark standards delivered across 15 kVA to 5200 kVA installations in Hyderabad, Secunderabad, and regional manufacturing belts:
          </p>
        </div>

        {/* 6 Cards Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {KIRLOSKAR_BENCHMARKS.map((bench: KirloskarBenchmark) => (
            <div
              key={bench.id}
              className="bg-white border border-slate-200 rounded-[2px] p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#0D652D] hover:shadow-md transition-all"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-[2px] bg-[#F1F8F4] flex items-center justify-center">
                  {getBenchmarkIcon(bench.iconName)}
                </div>

                <div>
                  <h3 className="font-rubik font-bold text-base text-[#00163D] leading-snug">
                    {bench.title}
                  </h3>
                  <span className="font-karla font-bold text-[10px] text-[#0D652D] uppercase tracking-wider block mt-0.5">
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
