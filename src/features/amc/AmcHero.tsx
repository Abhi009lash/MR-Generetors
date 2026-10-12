import React from 'react';
import { ArrowRight, Phone, ShieldCheck, Zap } from 'lucide-react';
import { sparesHeroEngineImg } from '../../assets/images';
import { APP_CONFIG } from '../../core/config';

interface AmcHeroProps {
  onOpenAuditForm: () => void;
  onNavigateHome: () => void;
}

export const AmcHero: React.FC<AmcHeroProps> = ({
  onOpenAuditForm,
  onNavigateHome,
}) => {
  return (
    <div className="bg-[#0A1D3F] text-white pt-6 pb-12 sm:pb-16 border-b border-[#0F2B5C] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        {/* Top Breadcrumb & Page Identification Banner */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs font-karla">
          <button
            type="button"
            onClick={onNavigateHome}
            className="hover:text-amber-400 text-slate-300 font-bold transition-colors cursor-pointer uppercase"
          >
            HOME
          </button>
          <span className="text-slate-500">&gt;</span>
          <span className="text-slate-300 font-bold uppercase">BUSINESS VERTICALS</span>
          <span className="text-slate-500">&gt;</span>
          <span className="px-2.5 py-0.5 rounded text-[11px] font-rubik font-bold uppercase tracking-wider bg-[#DC2626] text-white">
            ANNUAL MAINTENANCE CONTRACTS | 24/7 DG CARE | OVERHAUL &amp; ERECTION
          </span>
        </div>

        {/* Main Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-rubik font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Top Generator AMC Services <br />
              <span className="text-[#FBBF24]">in Hyderabad</span>
            </h1>

            <p className="font-karla text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
              M.R Generators AMC Division offers executable routine, seasonal and heavy-overhauling power support agreements covering scheduled preventive maintenance, autonomous breakdown response, guaranteed emergency restoration intervals for industrial establishments, IT/ITES facilities &amp; commercial complexes across Hyderabad &amp; Telangana municipal limits.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onOpenAuditForm}
                className="h-12 px-6 bg-[#D97706] hover:bg-[#B45309] text-white font-rubik font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 cursor-pointer"
              >
                <span>GET DG AMC AUDIT AND QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${APP_CONFIG.phonePrimary}`}
                className="h-12 px-6 bg-[#DC2626] hover:bg-red-700 text-white font-rubik font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
              >
                <Phone className="w-4 h-4" />
                <span>24/7 BREAKDOWN RESPONSE: {APP_CONFIG.phonePrimary}</span>
              </a>
            </div>

            {/* Checkpoint Highlights */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-karla text-slate-300">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Zero Downtime Guarantee
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Multi-Brand OEM Master Certified
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                100% Genuine Filter &amp; Lubricant Kits
              </span>
            </div>
          </div>

          {/* Right Column: Fleet Care Badge & Photo Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-[#00163D]">
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src={sparesHeroEngineImg}
                  alt="Generator AMC Service Engineer Hyderabad"
                  className="w-full h-full object-cover object-center transform hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D3F] via-transparent to-transparent opacity-80" />
                <div className="absolute top-3 left-3 bg-[#00163D]/90 backdrop-blur-xs rounded-md px-3 py-1 border border-white/20 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-rubik text-[10px] uppercase font-bold text-white tracking-wider">
                    CPCB-IV+ DG BREAKDOWN SUPPORT
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <h3 className="font-rubik font-bold text-sm text-white leading-tight drop-shadow">
                    CPCB IV+ DG On-Ready Fleet Care
                  </h3>
                  <p className="font-karla text-xs text-slate-300">
                    Multi-brand Engineering Depot Dispatch
                  </p>
                </div>
              </div>

              {/* Specs Table */}
              <div className="p-4 bg-[#131D3B] text-xs font-karla space-y-2 border-t border-white/10">
                <div className="flex justify-between items-center text-slate-300">
                  <span>Contract Coverage:</span>
                  <span className="font-bold text-white">Comprehensive &amp; Non-Comprehensive</span>
                </div>
                <div className="flex justify-between items-center text-slate-300 border-t border-white/5 pt-2">
                  <span>Typical Turn-Around:</span>
                  <span className="font-bold text-emerald-400">30 Mins Urban / &lt; 2 Hrs</span>
                </div>
                <div className="flex justify-between items-center text-slate-300 border-t border-white/5 pt-2">
                  <span>Emergency Escalation SLA:</span>
                  <span className="font-bold text-amber-400">Immediate Dispatch</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bottom Metric Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10">
          <div className="bg-[#131D3B] border border-white/10 rounded-xl p-4 text-center space-y-1">
            <span className="block font-rubik font-bold text-xl sm:text-2xl text-amber-400">5 - 2000 kVA</span>
            <span className="block font-karla text-xs text-slate-300 uppercase font-semibold">
              CAPACITY SPECTRUM
            </span>
          </div>
          <div className="bg-[#131D3B] border border-white/10 rounded-xl p-4 text-center space-y-1">
            <span className="block font-rubik font-bold text-xl sm:text-2xl text-emerald-400">&lt; 2 Hrs</span>
            <span className="block font-karla text-xs text-slate-300 uppercase font-semibold">
              DISPATCH SLA IN HYD
            </span>
          </div>
          <div className="bg-[#131D3B] border border-white/10 rounded-xl p-4 text-center space-y-1">
            <span className="block font-rubik font-bold text-xl sm:text-2xl text-white">100%</span>
            <span className="block font-karla text-xs text-slate-300 uppercase font-semibold">
              GENUINE OEM SPARES
            </span>
          </div>
          <div className="bg-[#131D3B] border border-white/10 rounded-xl p-4 text-center space-y-1">
            <span className="block font-rubik font-bold text-xl sm:text-2xl text-amber-400">3,500+</span>
            <span className="block font-karla text-xs text-slate-300 uppercase font-semibold">
              SUCCESSFUL AMC ENGAGEMENTS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
