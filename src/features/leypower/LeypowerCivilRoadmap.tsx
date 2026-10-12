import React from 'react';
import { Hammer, Cable, Flame, FileCheck, CheckCircle } from 'lucide-react';

const ROADMAP_STEPS = [
  {
    step: '01',
    title: 'Civil Plinth & Vibration Pads',
    description: 'RCC foundation casting as per static/dynamic generator weight calculations with anti-vibration rubber/spring mounts.',
    specBadge: 'RCC Foundation M20 Grade Plinth',
    icon: Hammer,
  },
  {
    step: '02',
    title: 'LT/HT Cabling & AMF Sync',
    description: 'Sizing and laying of 4-core XLPE armored aluminium/copper cables, busduct termination, and motorized AMF changeover synchronization.',
    specBadge: 'Motorized AMF / Synchronizing Panel',
    icon: Cable,
  },
  {
    step: '03',
    title: 'Exhaust Stack Extension',
    description: 'MS/SS exhaust chimney fabrication with thermal rockwool lagging and MS stay wire supports compliant with TSPCB height formula.',
    specBadge: 'TSPCB H = h + 0.2√(kVA) Compliant',
    icon: Flame,
  },
  {
    step: '04',
    title: 'CEIG Liaison & Load Testing',
    description: 'Preparation of single-line diagrams, statutory Chief Electrical Inspector to Government approval, and 100% resistive load-bank testing.',
    specBadge: '100% Step-Load Certified Signoff',
    icon: FileCheck,
  },
];

export const LeypowerCivilRoadmap: React.FC = () => {
  return (
    <section className="bg-white py-14 lg:py-16 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#385BAB]">
            ENGINEERING EXECUTION
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl text-[#00163D] uppercase tracking-tight">
            TURNKEY INSTALLATION &amp; COMMISSIONING ROADMAP
          </h2>
          <p className="font-karla text-xs sm:text-sm text-slate-600 leading-relaxed">
            End-to-end electrical, civil, and statutory commissioning executed by MR Generators certified project engineers.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROADMAP_STEPS.map((s) => {
            const IconComponent = s.icon;
            return (
              <div
                key={s.step}
                className="bg-[#F8F9FF] border border-slate-200 rounded-[6px] p-6 flex flex-col justify-between space-y-5 hover:border-[#385BAB] hover:shadow-sm transition-all"
              >
                <div className="space-y-4">
                  {/* Step Number Circle & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="w-9 h-9 rounded-full bg-[#00163D] text-white font-rubik font-bold text-sm flex items-center justify-center">
                      {s.step}
                    </span>
                    <div className="w-9 h-9 rounded-[4px] bg-[#E5EEFF] flex items-center justify-center text-[#385BAB]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h3 className="font-rubik font-bold text-base text-[#00163D]">
                      {s.title}
                    </h3>
                    <p className="font-karla text-xs text-slate-600 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>

                {/* Badge */}
                <div className="pt-3 border-t border-slate-200">
                  <div className="flex items-center gap-1.5 text-[11px] font-karla font-bold text-[#00163D] bg-white border border-slate-200 p-2 rounded-[3px]">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{s.specBadge}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
