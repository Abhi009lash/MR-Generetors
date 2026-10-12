import React from 'react';
import { Layers, Volume2, Cpu, Wrench } from 'lucide-react';

export const CaterpillarTurnkeyServices: React.FC = () => {
  return (
    <section className="bg-slate-50 py-14 lg:py-16 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Header */}
        <div className="space-y-3 max-w-3xl">
          <span className="font-karla font-bold text-xs uppercase tracking-wider text-amber-600 block">
            FULL-SCOPE TURNKEY DEPLOYMENT
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] uppercase tracking-tight">
            CEIG Approvals, Mechanical Civil &amp; Lifecycle Support
          </h2>
          <p className="font-karla text-sm text-slate-600 leading-relaxed">
            M.R Generators provides end-to-end electrical substation integration, Chief Electrical Inspector to Government (CEIG) clearance, and factory-certified preventative maintenance for uninterrupted power.
          </p>
        </div>

        {/* 4 Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1 */}
          <div className="bg-white border border-slate-200 rounded-[2px] p-5 shadow-xs space-y-3 hover:border-amber-500 transition-all">
            <div className="w-10 h-10 rounded-[2px] bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              <Layers className="w-5 h-5 text-amber-600" />
            </div>
            <h4 className="font-rubik font-bold text-sm text-[#00163D] uppercase tracking-wide">
              Heavy RCC Plinths &amp; AVM
            </h4>
            <p className="font-karla text-xs text-slate-600 leading-relaxed">
              Reinforced concrete foundation casting engineered with heavy spring vibration isolators and structural steel frames.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-200 rounded-[2px] p-5 shadow-xs space-y-3 hover:border-amber-500 transition-all">
            <div className="w-10 h-10 rounded-[2px] bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              <Volume2 className="w-5 h-5 text-amber-600" />
            </div>
            <h4 className="font-rubik font-bold text-sm text-[#00163D] uppercase tracking-wide">
              Exhaust Silencer &amp; Tall Stacks
            </h4>
            <p className="font-karla text-xs text-slate-600 leading-relaxed">
              Thermal-insulated stainless exhaust piping, multi-stage residential silencers, and TSPCB-compliant vertical chimney stacks.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-200 rounded-[2px] p-5 shadow-xs space-y-3 hover:border-amber-500 transition-all">
            <div className="w-10 h-10 rounded-[2px] bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              <Cpu className="w-5 h-5 text-amber-600" />
            </div>
            <h4 className="font-rubik font-bold text-sm text-[#00163D] uppercase tracking-wide">
              AMF &amp; Synchronization Panels
            </h4>
            <p className="font-karla text-xs text-slate-600 leading-relaxed">
              Motorized breaker transfer panels, multi-megawatt bus synchronizers, ComAp / DeepSea logic, and LT distribution cabling.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-slate-200 rounded-[2px] p-5 shadow-xs space-y-3 hover:border-amber-500 transition-all">
            <div className="w-10 h-10 rounded-[2px] bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              <Wrench className="w-5 h-5 text-amber-600" />
            </div>
            <h4 className="font-rubik font-bold text-sm text-[#00163D] uppercase tracking-wide">
              Comprehensive CAT AMC
            </h4>
            <p className="font-karla text-xs text-slate-600 leading-relaxed">
              Routine 500-hour servicing, genuine Cat fluids, SOS fluid laboratory analysis, and guaranteed 2-hour field response in Hyderabad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
