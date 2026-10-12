import React from 'react';
import { Tv, LifeBuoy, Radio, Activity, Construction, Sparkles } from 'lucide-react';
import { PORTABLE_APPLICATIONS, type PortableApplicationItem } from './portableData';

const appIconMap = {
  Tv: Tv,
  LifeBuoy: LifeBuoy,
  Radio: Radio,
  Activity: Activity,
  Construction: Construction,
  Sparkles: Sparkles,
};

export const PortableApplicationsSection: React.FC = () => {
  return (
    <section className="bg-[#EFF4FF] py-16 lg:py-20 border-b border-[#D6E4FF] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="font-karla font-bold text-xs uppercase tracking-widest text-[#385BAB] block">
            APPLICATIONS &amp; SECTORS
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] tracking-tight">
            Where Rapid Mobile Power Makes The Critical Difference
          </h2>
          <p className="font-karla text-sm sm:text-base text-[#44464F] leading-relaxed">
            From zero-downtime outside broadcasting to life-critical field surgery and emergency infrastructure restoration.
          </p>
        </div>

        {/* 6 Cards Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTABLE_APPLICATIONS.map((item: PortableApplicationItem) => {
            const IconComp = appIconMap[item.iconName];
            return (
              <div
                key={item.id}
                className="bg-white border border-slate-200 rounded-[4px] p-6 shadow-xs space-y-3.5 hover:border-[#385BAB] hover:shadow-md transition-all group"
              >
                <div className="w-11 h-11 rounded-[2px] bg-[#E5EEFF] group-hover:bg-[#00163D] transition-colors flex items-center justify-center">
                  <IconComp className="w-5 h-5 text-[#00163D] group-hover:text-white transition-colors" />
                </div>

                <h3 className="font-rubik font-bold text-lg text-[#00163D]">
                  {item.title}
                </h3>

                <p className="font-karla text-sm text-[#44464F] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
