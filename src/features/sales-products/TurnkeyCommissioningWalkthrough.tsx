import React from 'react';
import { Clock, ShieldCheck, Wrench, FileCheck } from 'lucide-react';

export const TurnkeyCommissioningWalkthrough: React.FC = () => {
  const steps = [
    {
      num: '01',
      numColor: 'bg-[#00163D] text-white',
      title: 'SITE SURVEY & SIZING',
      desc: 'Our certified electrical engineers visit your premises to record connected load curves, inrush motor loads, and harmonic distortions to determine exact kVA rating.',
      tag: 'Max 24h Site Visit SLA',
      icon: Clock,
    },
    {
      num: '02',
      numColor: 'bg-[#00163D] text-white',
      title: 'FOUNDATION & ACOUSTICS',
      desc: 'Civil engineering team prepares vibration-isolated RCC plinths, exhaust ducting routings, and acoustic louver layouts compliant with local municipal bylaws.',
      tag: 'Vibration Isolated RCC',
      icon: Wrench,
    },
    {
      num: '03',
      numColor: 'bg-[#00163D] text-white',
      title: 'ELECTRICAL INTEGRATION',
      desc: 'Delivery, rigging, and cabling of DG set, AMF panel, motorized changeover switch, and busduct connections performed by licensed A-grade electrical contractors.',
      tag: 'A-Grade Electrical Contractors',
      icon: ShieldCheck,
    },
    {
      num: '04',
      numColor: 'bg-[#D32F2F] text-white',
      title: 'CEIG APPROVAL & AMC',
      desc: 'We handle drawings submission, testing certificate validation, and liaison with Telangana Chief Electrical Inspector, followed by preventative AMC handover.',
      tag: 'Full Statutory Clearance',
      icon: FileCheck,
    },
  ];

  return (
    <section className="bg-[#F8F9FF] py-14 border-t border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#385BAB]">
            PROCESS &amp; METHODOLOGY
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl text-[#00163D] uppercase tracking-tight">
            TURNKEY DG SET SUPPLY &amp; COMMISSIONING
          </h2>
          <p className="font-karla text-xs sm:text-sm text-slate-600 leading-relaxed">
            Our full-cycle execution methodology ensures your standby power infrastructure operates seamlessly with guaranteed performance.
          </p>
        </div>

        {/* 4 Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st) => {
            const IconComponent = st.icon;
            return (
              <div
                key={st.num}
                className="bg-white rounded-[4px] border border-slate-200 p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#385BAB] transition-colors"
              >
                <div className="space-y-4">
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`w-10 h-10 rounded-[2px] font-rubik font-bold text-base flex items-center justify-center ${st.numColor}`}
                    >
                      {st.num}
                    </span>
                    <IconComponent className="w-5 h-5 text-slate-400" />
                  </div>

                  <h3 className="font-rubik font-bold text-base text-[#00163D] uppercase tracking-tight">
                    {st.title}
                  </h3>

                  <p className="font-karla text-xs text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                {/* Subtag */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-karla text-[#D97706] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                  <span>{st.tag}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
