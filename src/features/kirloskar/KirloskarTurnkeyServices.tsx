import React from 'react';
import { Layers, Volume2, Cpu, Wrench } from 'lucide-react';

export const KirloskarTurnkeyServices: React.FC = () => {
  return (
    <section className="bg-slate-50 py-14 lg:py-16 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#0D652D] block">
            FULL-CYCLE TURNKEY DEPLOYMENT
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] uppercase tracking-tight">
            Turnkey Installation, CEIG Approvals &amp; AMC Operations
          </h2>
          <p className="font-karla text-sm text-slate-600 leading-relaxed">
            From civil plinth construction to Chief Electrical Inspector to Government (CEIG) clearance and statutory pollution board liaison, we take complete turnkey accountability for your power asset deployment.
          </p>
        </div>

        {/* 4 Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1 */}
          <div className="bg-white border border-slate-200 rounded-[2px] p-5 shadow-xs space-y-3 hover:border-[#0D652D] transition-all">
            <div className="w-10 h-10 rounded-[2px] bg-[#E6F4EA] text-[#0D652D] flex items-center justify-center font-bold">
              <Layers className="w-5 h-5 text-[#0D652D]" />
            </div>
            <h4 className="font-rubik font-bold text-sm text-[#00163D] uppercase tracking-wide">
              Anti-Vibration Plinths
            </h4>
            <p className="font-karla text-xs text-slate-600 leading-relaxed">
              Engineered reinforced concrete foundation design with spring anti-vibration mountings (AVMs) and seismic base anchors.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-200 rounded-[2px] p-5 shadow-xs space-y-3 hover:border-[#0D652D] transition-all">
            <div className="w-10 h-10 rounded-[2px] bg-[#E6F4EA] text-[#0D652D] flex items-center justify-center font-bold">
              <Volume2 className="w-5 h-5 text-[#385BAB]" />
            </div>
            <h4 className="font-rubik font-bold text-sm text-[#00163D] uppercase tracking-wide">
              Exhaust &amp; Acoustic Ducting
            </h4>
            <p className="font-karla text-xs text-slate-600 leading-relaxed">
              Thermal-clad exhaust piping with residential silencers, hot air radiator discharge louvers, and TSPCB statutory chimney extensions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-200 rounded-[2px] p-5 shadow-xs space-y-3 hover:border-[#0D652D] transition-all">
            <div className="w-10 h-10 rounded-[2px] bg-[#E6F4EA] text-[#0D652D] flex items-center justify-center font-bold">
              <Cpu className="w-5 h-5 text-amber-600" />
            </div>
            <h4 className="font-rubik font-bold text-sm text-[#00163D] uppercase tracking-wide">
              AMF Panels &amp; Busduct Cabling
            </h4>
            <p className="font-karla text-xs text-slate-600 leading-relaxed">
              Auto Mains Failure panels, motorized changeover breakers, multi-core XLPE armored power cabling, and busduct riser interfaces.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-slate-200 rounded-[2px] p-5 shadow-xs space-y-3 hover:border-[#0D652D] transition-all">
            <div className="w-10 h-10 rounded-[2px] bg-[#E6F4EA] text-[#0D652D] flex items-center justify-center font-bold">
              <Wrench className="w-5 h-5 text-[#D32F2F]" />
            </div>
            <h4 className="font-rubik font-bold text-sm text-[#00163D] uppercase tracking-wide">
              Comprehensive KOEL AMC
            </h4>
            <p className="font-karla text-xs text-slate-600 leading-relaxed">
              Factory-scheduled 500-hour B-checks, genuine Kirloskar K-Oil, OEM filtration kits, 24/7 priority technician dispatch, and health certification.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
