import React from 'react';
import { ArrowRight, Check, Shield, AlertTriangle, Cpu, Flame, Volume2, Wrench } from 'lucide-react';
import { SERVICE_CAPABILITIES, type ServiceCapabilityItem } from './servicesData';

interface ServicesCapabilitiesGridProps {
  onSelectService: (serviceTitle: string) => void;
}

const getCapabilityIcon = (id: string) => {
  switch (id) {
    case 'amc-contracts':
      return <Shield className="w-5 h-5 text-[#00163D]" />;
    case 'emergency-breakdown':
      return <AlertTriangle className="w-5 h-5 text-[#D32F2F]" />;
    case 'engine-overhaul':
      return <Wrench className="w-5 h-5 text-[#00163D]" />;
    case 'alternator-rewinding':
      return <Cpu className="w-5 h-5 text-[#00163D]" />;
    case 'amf-sync-panels':
      return <Flame className="w-5 h-5 text-[#00163D]" />;
    case 'acoustic-canopy':
      return <Volume2 className="w-5 h-5 text-[#00163D]" />;
    default:
      return <Wrench className="w-5 h-5 text-[#00163D]" />;
  }
};

export const ServicesCapabilitiesGrid: React.FC<ServicesCapabilitiesGridProps> = ({
  onSelectService,
}) => {
  return (
    <section className="bg-[#F8F9FF] py-14 lg:py-16 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#D32F2F] rounded-[2px]" />
              <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#385BAB]">
                6 CRITICAL ENGINEERING VERTICALS
              </span>
            </div>
            <h2 className="font-rubik font-semibold text-2xl sm:text-3xl text-[#00163D] uppercase tracking-tight">
              COMPREHENSIVE GENSET FIELD SERVICES &amp; OVERHAULS
            </h2>
            <p className="font-karla text-xs sm:text-sm text-slate-600 leading-relaxed">
              From preventive routine maintenance to full-rebuild machining, our certified mechanical and electrical engineers handle every facet of standby and prime power systems.
            </p>
          </div>

          <a
            href="#service-booking"
            className="inline-flex items-center gap-1.5 font-karla font-bold text-xs uppercase tracking-wider text-[#00163D] hover:text-[#385BAB] transition-colors shrink-0"
          >
            <span>EXPLORE TECHNICAL CAPABILITIES</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_CAPABILITIES.map((cap: ServiceCapabilityItem) => (
            <div
              key={cap.id}
              className={`bg-white rounded-[4px] p-6 shadow-xs flex flex-col justify-between space-y-5 border border-slate-200 hover:shadow-md transition-all ${
                cap.isEmergency ? 'border-l-4 border-l-[#D32F2F]' : 'hover:border-[#385BAB]'
              }`}
            >
              <div className="space-y-4">
                {/* Icon & Category Pill */}
                <div className="flex items-center justify-between">
                  <div
                    className={`w-11 h-11 rounded-[2px] flex items-center justify-center ${
                      cap.isEmergency ? 'bg-[#FEE2E2]' : 'bg-[#DFE9FB]'
                    }`}
                  >
                    {getCapabilityIcon(cap.id)}
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-[2px] font-karla font-bold text-[10px] uppercase tracking-wider ${
                      cap.isEmergency
                        ? 'bg-[#FEE2E2] text-[#D32F2F]'
                        : 'bg-slate-100 text-[#00163D]'
                    }`}
                  >
                    {cap.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-rubik font-semibold text-base text-[#00163D] uppercase">
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="font-karla text-xs text-slate-600 leading-relaxed">
                  {cap.description}
                </p>

                {/* Checkpoints */}
                <div className="space-y-1.5 pt-1 text-xs font-karla text-slate-700">
                  <div className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{cap.spec1}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{cap.spec2}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action Link */}
              <div className="pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onSelectService(cap.title)}
                  className={`inline-flex items-center gap-1 font-karla font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                    cap.isEmergency
                      ? 'text-[#D32F2F] hover:text-red-800'
                      : 'text-[#385BAB] hover:text-[#00163D]'
                  }`}
                >
                  <span>{cap.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
