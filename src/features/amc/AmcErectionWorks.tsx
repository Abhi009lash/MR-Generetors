import React from 'react';
import {
  ShieldAlert,
  Zap,
  Flame,
  VolumeX,
  Cpu,
  Fuel,
} from 'lucide-react';
import { AMC_ERECTION_WORKS, type AmcErectionItem } from './amcData';

interface AmcErectionWorksProps {
  onSelectErection?: (title: string) => void;
}

export const AmcErectionWorks: React.FC<AmcErectionWorksProps> = ({
  onSelectErection,
}) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'earthing':
        return <ShieldAlert className="w-5 h-5 text-emerald-600" />;
      case 'cabling':
        return <Zap className="w-5 h-5 text-[#385BAB]" />;
      case 'exhaust':
        return <Flame className="w-5 h-5 text-amber-600" />;
      case 'acoustic':
        return <VolumeX className="w-5 h-5 text-[#DC2626]" />;
      case 'amf-sync':
        return <Cpu className="w-5 h-5 text-indigo-600" />;
      default:
        return <Fuel className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-[#F8F9FF] border-t border-slate-200 select-none" id="amc-erection">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="font-rubik font-bold text-xs uppercase tracking-wider text-[#385BAB] block">
            COMPLETE TURNKEY INSTALLATION &amp; INFRASTRUCTURE
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] tracking-tight">
            Turnkey Erection &amp; Installation Works
          </h2>
          <p className="font-karla text-sm text-slate-600 leading-relaxed">
            M.R Generators executes full MEP/Substation-level generator installation works, complying with Central Electricity Authority (CEA) regulations and local Discom standards:
          </p>
        </div>

        {/* 6 Erection Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AMC_ERECTION_WORKS.map((work: AmcErectionItem) => (
            <div
              key={work.id}
              onClick={() => onSelectErection?.(work.title)}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs hover:shadow-md hover:border-[#00163D] transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getIcon(work.id)}
                </div>

                <h3 className="font-rubik font-bold text-base text-[#00163D] group-hover:text-[#DC2626] transition-colors leading-tight">
                  {work.title}
                </h3>

                <p className="font-karla text-xs text-slate-600 leading-relaxed">
                  {work.description}
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-xs font-karla text-[#00163D] font-bold group-hover:text-[#DC2626]">
                <span>CEA &amp; Discom Compliant</span>
                <span>&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
