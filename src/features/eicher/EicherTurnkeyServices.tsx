import React from 'react';
import { Layers, Zap, ShieldCheck, Wrench, PhoneCall } from 'lucide-react';
import { APP_CONFIG } from '../../core/config';

export const EicherTurnkeyServices: React.FC = () => {
  return (
    <section className="bg-slate-50 py-14 lg:py-16 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Header split with Emergency Support Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 space-y-3 flex flex-col justify-center">
            <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#385BAB] block">
              FULL-CYCLE ENGINEERING
            </span>
            <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] uppercase tracking-tight">
              Turnkey Installation, CEIG Approvals &amp; Eicher AMC Services
            </h2>
            <p className="font-karla text-sm text-slate-600 leading-relaxed">
              At M.R Generators, we deliver full-scope turnkey commissioning beyond just supplying the equipment. Our factory-trained engineers oversee civil plinth casting, electrical busduct/cabling, statutory Chief Electrical Inspectorate approvals, and multi-year AMC maintenance for uninterrupted uptime.
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#00163D] text-white p-6 rounded-[2px] shadow-sm flex flex-col justify-between border-l-4 border-amber-500">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-karla font-bold text-xs uppercase tracking-wider">
                <PhoneCall className="w-4 h-4" />
                <span>CALL 24/7 EMERGENCY SUPPORT</span>
              </div>
              <h3 className="font-rubik font-bold text-lg text-white">
                On-site OEM Response Team in Hyderabad &amp; Telangana
              </h3>
              <p className="font-karla text-xs text-slate-300">
                Rapid emergency dispatch covering Sanath Nagar, Balanagar, Cherlapally, Katedan, Patancheru, and Medchal industrial parks.
              </p>
            </div>
            <div className="pt-4 mt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
              <a
                href={`tel:${APP_CONFIG.phonePrimary}`}
                className="font-rubik font-bold text-amber-400 text-lg hover:underline"
              >
                +91 {APP_CONFIG.phonePrimary}
              </a>
              <span className="font-karla text-xs text-slate-300">/ +91 {APP_CONFIG.phoneSecondary}</span>
            </div>
          </div>
        </div>

        {/* 4 Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1 */}
          <div className="bg-white border border-slate-200 rounded-[2px] p-5 shadow-xs space-y-3 hover:border-[#385BAB] transition-all">
            <div className="w-10 h-10 rounded-[2px] bg-[#E5EEFF] text-[#00163D] flex items-center justify-center font-bold">
              <Layers className="w-5 h-5 text-[#385BAB]" />
            </div>
            <h4 className="font-rubik font-bold text-sm text-[#00163D] uppercase tracking-wide">
              Civil Foundation &amp; Plinth
            </h4>
            <p className="font-karla text-xs text-slate-600 leading-relaxed">
              Design and casting of reinforced concrete vibration-isolated foundations, spring anti-vibration mounts, and weather-proof plinth drainage channels.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-200 rounded-[2px] p-5 shadow-xs space-y-3 hover:border-[#385BAB] transition-all">
            <div className="w-10 h-10 rounded-[2px] bg-[#E5EEFF] text-[#00163D] flex items-center justify-center font-bold">
              <Zap className="w-5 h-5 text-amber-600" />
            </div>
            <h4 className="font-rubik font-bold text-sm text-[#00163D] uppercase tracking-wide">
              Electrical Cabling &amp; Panels
            </h4>
            <p className="font-karla text-xs text-slate-600 leading-relaxed">
              Armored aluminium/copper cable trenching, LT distribution panel integration, and automatic mains failure (AMF) transfer switches with surge protection.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-200 rounded-[2px] p-5 shadow-xs space-y-3 hover:border-[#385BAB] transition-all">
            <div className="w-10 h-10 rounded-[2px] bg-[#E5EEFF] text-[#00163D] flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <h4 className="font-rubik font-bold text-sm text-[#00163D] uppercase tracking-wide">
              CEIG &amp; Statutory Approvals
            </h4>
            <p className="font-karla text-xs text-slate-600 leading-relaxed">
              Drawing submissions, single line diagram approvals, chemical earthing testing, and liaisoning with the Chief Electrical Inspectorate of Government.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-slate-200 rounded-[2px] p-5 shadow-xs space-y-3 hover:border-[#385BAB] transition-all">
            <div className="w-10 h-10 rounded-[2px] bg-[#E5EEFF] text-[#00163D] flex items-center justify-center font-bold">
              <Wrench className="w-5 h-5 text-blue-600" />
            </div>
            <h4 className="font-rubik font-bold text-sm text-[#00163D] uppercase tracking-wide">
              Comprehensive AMC Services
            </h4>
            <p className="font-karla text-xs text-slate-600 leading-relaxed">
              Scheduled 250/500-hour service routines, genuine VECV filters, lubricating oil replacement, 24/7 priority breakdown dispatch, and health audits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
