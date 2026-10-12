import React from 'react';
import { ShieldCheck, CheckCircle2, Phone, CalendarCheck, Wrench, Droplet, Cpu, FileSpreadsheet } from 'lucide-react';
import { APP_CONFIG } from '../../core/config';

interface LeypowerPartsSupportProps {
  onOpenQuoteModal: (modelName?: string, capacity?: string) => void;
}

const SPARES_LIST = [
  {
    id: 'filters',
    title: 'Lube & Fuel Filters',
    description: 'Genuine spin-on fuel water separators and full-flow lube filters guaranteeing uncompromised engine longevity.',
    icon: Wrench,
  },
  {
    id: 'lube-oil',
    title: 'Leypower 15W40 Lube Oil',
    description: 'Factory-engineered heavy duty diesel engine oil optimized for 500-hour extended drain intervals.',
    icon: Droplet,
  },
  {
    id: 'electrical',
    title: 'Electrical & AVR Spares',
    description: 'OEM brushless alternator diodes, electronic voltage regulators (AVR), and AMF controller cards.',
    icon: Cpu,
  },
  {
    id: 'amc',
    title: 'Comprehensive AMCs',
    description: 'Round-the-clock 24/7 preventive maintenance, scheduled B-checks, and rapid emergency breakdown cover.',
    icon: FileSpreadsheet,
  },
];

export const LeypowerPartsSupport: React.FC<LeypowerPartsSupportProps> = ({
  onOpenQuoteModal,
}) => {
  return (
    <section className="bg-[#EFF4FF] py-14 lg:py-16 border-b border-[#D6E4FF] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Header */}
        <div className="space-y-2">
          <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#385BAB]">
            AFTERMARKET EXCELLENCE
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl text-[#00163D] uppercase tracking-tight">
            100% GENUINE LEYPARTS® &amp; FACTORY CERTIFIED FIELD SERVICE
          </h2>
          <p className="font-karla text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
            Protect your capital investment with OEM Leyparts, genuine lubes, and rapid-response Hyderabad technician dispatch.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 4 Spares Cards & CTA (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SPARES_LIST.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="bg-white border border-slate-200 rounded-[6px] p-4 space-y-2 shadow-2xs hover:border-[#385BAB] transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-[4px] bg-[#EFF4FF] flex items-center justify-center text-[#385BAB]">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="font-rubik font-bold text-sm text-[#00163D]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="font-karla text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => onOpenQuoteModal('Leypower Preventive AMC Inspection', 'Comprehensive AMC')}
              className="inline-flex items-center gap-2 bg-[#D32F2F] hover:bg-red-700 text-white font-rubik font-bold text-xs sm:text-sm px-6 py-3 rounded-[4px] shadow-sm transition-all uppercase tracking-wider cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>BOOK PREVENTIVE AMC INSPECTION</span>
            </button>
          </div>

          {/* Right Column: Navy Depot Box (5 cols) */}
          <div className="lg:col-span-5 bg-[#0A1D3F] border border-[#0F2B5C] text-white rounded-[6px] p-6 space-y-5 shadow-md">
            {/* Header with red badge */}
            <div className="flex items-center justify-between pb-3 border-b border-[#0F2B5C]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <h3 className="font-rubik font-bold text-sm sm:text-base uppercase tracking-wider text-white">
                  DEPOT SLA COMMITMENT
                </h3>
              </div>
              <span className="bg-[#D32F2F] text-white font-karla font-bold text-[10px] px-2 py-0.5 rounded-[2px] tracking-wider uppercase">
                HYDERABAD CENTRAL
              </span>
            </div>

            {/* 4 SLA Bullets */}
            <div className="space-y-3.5 text-xs font-karla text-slate-200">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>&lt; 2 Hours Emergency Breakdown Arrival within Hyderabad ORR limits</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>500+ Genuine Leyparts SKU lines stocked in Kukatpally / Balanagar Depot</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Factory-trained certified DG field technicians with mobile testing kits</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Calibrated Digital Multi-Meters, Clamp Meters &amp; Load Analyzers on site</span>
              </div>
            </div>

            {/* Depot Hotline */}
            <div className="pt-4 border-t border-[#0F2B5C] flex flex-wrap items-center justify-between gap-2 text-xs font-karla">
              <span className="text-slate-400">Direct Depot Hotline:</span>
              <a
                href={`tel:${APP_CONFIG.phonePrimary}`}
                className="font-rubik font-bold text-[#D97706] hover:underline flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 {APP_CONFIG.phonePrimary}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
