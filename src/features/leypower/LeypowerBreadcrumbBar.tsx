import React from 'react';
import { Phone, FileText, CheckCircle2, ShieldCheck, Clock, Award } from 'lucide-react';
import { APP_CONFIG } from '../../core/config';

interface LeypowerBreadcrumbBarProps {
  onNavigateHome?: () => void;
  onNavigateProducts?: () => void;
  onOpenQuoteModal: (modelName?: string, capacity?: string) => void;
}

export const LeypowerBreadcrumbBar: React.FC<LeypowerBreadcrumbBarProps> = ({
  onOpenQuoteModal,
}) => {
  return (
    <div className="bg-[#0A1D3F] border-b border-[#0F2B5C] text-white select-none">
      {/* Main Top Header Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-5 sm:py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
          {/* Left Title & Badge Block */}
          <div className="space-y-2">

            {/* Title & Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="font-rubik font-bold text-lg sm:text-2xl text-white tracking-tight uppercase">
                AUTHORIZED ASHOK LEYLAND LEYPOWER GENERATOR SUPPLIERS IN HYDERABAD
              </h1>
              <div className="inline-flex items-center gap-2 bg-[#D32F2F]/20 border border-[#D32F2F]/40 px-2.5 py-1 rounded-[3px]">
                <span className="w-2 h-2 rounded-full bg-[#D32F2F] animate-pulse" />
                <span className="font-karla font-bold text-[11px] text-white tracking-wider uppercase">
                  24/7 DIESEL POWER DISPATCH READY
                </span>
              </div>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${APP_CONFIG.phonePrimary}`}
              className="inline-flex items-center gap-2 bg-[#D32F2F] hover:bg-red-700 text-white font-rubik font-bold text-xs sm:text-sm px-4 py-2.5 rounded-[4px] shadow-sm transition-all uppercase tracking-wider cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>+91 {APP_CONFIG.phonePrimary}</span>
            </a>

            <button
              type="button"
              onClick={() => onOpenQuoteModal('Ashok Leyland LEYPOWER', '10 - 2250 kVA')}
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#00163D] font-rubik font-bold text-xs sm:text-sm px-4 py-2.5 rounded-[4px] shadow-sm transition-all uppercase tracking-wider cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#385BAB]" />
              <span>GET SIZING &amp; QUOTES</span>
            </button>
          </div>
        </div>
      </div>

      {/* SLA Micro Ticker Ribbon */}
      <div className="bg-[#07152E] border-t border-[#0F2B5C]/80 py-2.5 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-karla text-slate-300">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#D97706]" />
            <span className="font-semibold text-white">120m MAX HYDERABAD SLA</span>
            <span className="text-slate-400 text-[11px] hidden sm:inline">— On-site breakdown dispatch</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-semibold text-white">&lt; 75 dBA CPCB IV+ ACOUSTIC</span>
            <span className="text-slate-400 text-[11px] hidden sm:inline">— Eco-compliant silencer</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-semibold text-white">24/7 FIELD ENGINEERS LIVE</span>
            <span className="text-slate-400 text-[11px] hidden sm:inline">— Certified Ashok Leyland techs</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-3.5 h-3.5 text-[#D97706]" />
            <span className="font-semibold text-white">GENUINE LEYPARTS® DEPOT</span>
            <span className="text-slate-400 text-[11px] hidden sm:inline">— Kukatpally warehouse inventory</span>
          </div>
        </div>
      </div>
    </div>
  );
};
