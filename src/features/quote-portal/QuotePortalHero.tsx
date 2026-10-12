import React from 'react';
import {
  Timer,
  Phone,
  AlertTriangle,
  Clock,
  ShieldCheck,
  Zap,
  CheckCircle,
} from 'lucide-react';
import { APP_CONFIG } from '../../core/config';

interface QuotePortalHeroProps {
  onNavigateHome: () => void;
}

export const QuotePortalHero: React.FC<QuotePortalHeroProps> = ({
  onNavigateHome,
}) => {
  return (
    <>
      {/* 1. Breadcrumb & Status Ribbon */}
      <section className="bg-[#DFE9FB] py-2 px-4 sm:px-6 lg:px-12 border-b border-slate-200 select-none">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-xs font-karla text-slate-700 gap-2">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 uppercase">
            <button
              type="button"
              onClick={onNavigateHome}
              className="hover:text-[#00163D] transition-colors font-semibold cursor-pointer"
            >
              Home
            </button>
            <span className="text-slate-400">/</span>
            <span className="text-[#00163D] font-bold">
              Commercial Quotation &amp; Genset Sizing Portal
            </span>
          </nav>

          <div className="flex items-center gap-4 text-xs">
            <span className="inline-flex items-center gap-1.5 text-[#0A1D3F] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#D97706] animate-ping" />
              Direct Factory Sizing Hub: Sanathnagar Depot Online
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-600">
              <Clock className="w-3.5 h-3.5 text-[#00163D]" />
              Average Turnaround: 14.8 Mins
            </span>
          </div>
        </div>
      </section>

      {/* 2. Hero Section */}
      <section className="bg-[#0A1D3F] text-white py-12 lg:py-16 px-4 sm:px-6 lg:px-12 relative overflow-hidden select-none">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-[#D97706] text-white px-3 py-1 rounded text-xs font-rubik uppercase tracking-wider font-bold shadow-xs">
                  OFFICIAL FACTORY-DIRECT QUOTATION DESK
                </span>
                <span className="bg-[#131D3B] text-sky-200 px-3 py-1 rounded text-xs font-rubik uppercase tracking-wider font-semibold flex items-center gap-1 border border-white/10">
                  <Timer className="w-3.5 h-3.5 text-amber-400" />
                  15-MINUTE GUARANTEED RESPONSE SLA
                </span>
              </div>

              <h1 className="font-rubik font-bold text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tight leading-tight">
                Request an Instant <br />
                <span className="text-[#93C5FD]">Diesel Generator</span> Quotation
              </h1>

              <p className="font-karla text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
                Receive an engineering-validated proforma quote, load sizing analysis, and transparent turnkey pricing for sales, rental, AMC, or genuine spares across Telangana and Andhra Pradesh.
              </p>

              {/* Trust Badges Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-[#131D3B] p-3 rounded-lg border-l-2 border-[#385BAB] flex items-start gap-2.5">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-rubik text-xs uppercase text-white font-bold">15-Min Response</p>
                    <p className="font-karla text-[11px] text-slate-400 leading-tight">Certified SLA Callback</p>
                  </div>
                </div>

                <div className="bg-[#131D3B] p-3 rounded-lg border-l-2 border-[#385BAB] flex items-start gap-2.5">
                  <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-rubik text-xs uppercase text-white font-bold">Free Site Survey</p>
                    <p className="font-karla text-[11px] text-slate-400 leading-tight">Across Hyderabad &amp; RR</p>
                  </div>
                </div>

                <div className="bg-[#131D3B] p-3 rounded-lg border-l-2 border-[#385BAB] flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-rubik text-xs uppercase text-white font-bold">CPCB IV+ Ready</p>
                    <p className="font-karla text-[11px] text-slate-400 leading-tight">Eco-Compliant Stock</p>
                  </div>
                </div>

                <div className="bg-[#131D3B] p-3 rounded-lg border-l-2 border-[#385BAB] flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-rubik text-xs uppercase text-white font-bold">ISO 9001:2015</p>
                    <p className="font-karla text-[11px] text-slate-400 leading-tight">Sanathnagar Depot</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Urgent Banner Card */}
            <div className="lg:col-span-4 bg-[#131D3B] p-6 rounded-2xl shadow-xl space-y-4 border border-white/10">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-[#DC2626] shrink-0" />
                <div>
                  <span className="font-rubik text-xs uppercase text-[#DC2626] tracking-wider font-bold">
                    EMERGENCY OUTAGE?
                  </span>
                  <p className="font-rubik font-bold text-lg text-white leading-tight">
                    Instant Dispatch Desk
                  </p>
                </div>
              </div>

              <p className="font-karla text-xs text-slate-300 leading-relaxed">
                Factory down, hospital backup failure, or critical event? Mobile trailer gensets mobilized in under 2 hours.
              </p>

              <div className="space-y-2">
                <a
                  href={`tel:${APP_CONFIG.phonePrimary}`}
                  className="flex items-center justify-between p-3 bg-[#DC2626] text-white rounded-lg font-rubik font-bold text-xs uppercase tracking-wider hover:bg-red-700 transition-colors shadow"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    +91-{APP_CONFIG.phonePrimary}
                  </span>
                  <span className="text-[10px] bg-black/20 px-2 py-0.5 rounded">24/7 HOTLINE</span>
                </a>

                <a
                  href={`tel:${APP_CONFIG.phoneLandline}`}
                  className="flex items-center justify-between p-3 bg-white text-[#0A1D3F] rounded-lg font-rubik font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {APP_CONFIG.phoneLandline}
                  </span>
                  <span className="text-[11px] text-slate-600 font-normal">Desk Landline</span>
                </a>
              </div>

              <div className="pt-1 flex items-center justify-between text-[11px] font-karla text-slate-400 border-t border-white/5 pt-2">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  9949983305
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  9030017298
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
