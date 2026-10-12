import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { SERVICE_PROTOCOL_STEPS, type ServiceProtocolStep } from './servicesData';

export const ServicesProtocolSection: React.FC = () => {
  return (
    <section className="bg-[#00163D] text-white py-14 lg:py-16 border-b border-[#0F2B5C] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#131D3B] text-[#D97706] border border-[#D97706]/30 px-3 py-1 rounded-[2px]">
            <ShieldCheck className="w-4 h-4 text-[#D97706]" />
            <span className="font-karla font-bold text-xs uppercase tracking-wider">
              THE 4-TIER PREVENTATIVE SERVICE PROTOCOL
            </span>
          </div>

          <h2 className="font-rubik font-semibold text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight">
            THE 4-TIER PREVENTATIVE SERVICE PROTOCOL
          </h2>

          <p className="font-karla text-xs sm:text-sm text-[#DFE9FB] leading-relaxed">
            Our certified preventative schedules prevent up to 93% of unpredicted engine shutdowns through rigorous multi-point mechanical inspections.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_PROTOCOL_STEPS.map((step: ServiceProtocolStep) => (
            <div
              key={step.stepNumber}
              className={`bg-[#131D3B] border rounded-[4px] p-6 flex flex-col justify-between space-y-5 shadow-xs transition-all ${
                step.isOverhaul ? 'border-[#D32F2F]' : 'border-white/10 hover:border-[#D97706]/60'
              }`}
            >
              <div className="space-y-4">
                {/* Step Number + Hours Badge */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span
                    className={`font-rubik font-bold text-3xl ${
                      step.isOverhaul ? 'text-[#D32F2F]' : 'text-[#D97706]'
                    }`}
                  >
                    {step.stepNumber}
                  </span>
                  <span
                    className={`px-2.5 py-1 rounded-[2px] font-karla font-bold text-[10px] uppercase tracking-wider ${
                      step.isOverhaul
                        ? 'bg-[#D32F2F] text-white'
                        : 'bg-[#00163D] text-[#DFE9FB]'
                    }`}
                  >
                    {step.badge}
                  </span>
                </div>

                {/* Title & Short Description */}
                <div className="space-y-1.5">
                  <h3 className="font-rubik font-semibold text-base text-white uppercase">
                    {step.title}
                  </h3>
                  <p className="font-karla text-xs text-[#DFE9FB] leading-snug">
                    {step.description}
                  </p>
                </div>

                {/* Checklist */}
                <ul className="space-y-2 pt-2 text-xs font-karla text-slate-300">
                  {step.checkpoints.map((cp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2
                        className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          step.isOverhaul ? 'text-[#D32F2F]' : 'text-[#D97706]'
                        }`}
                      />
                      <span className="leading-tight">{cp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Category Tag */}
              <div className="pt-3 border-t border-white/10">
                <span
                  className={`font-karla font-bold text-[11px] uppercase tracking-wider ${
                    step.isOverhaul ? 'text-[#D32F2F]' : 'text-[#C4C6D0]'
                  }`}
                >
                  {step.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
