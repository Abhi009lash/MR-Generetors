import React from 'react';
import { Zap, Check, ShieldCheck, Activity } from 'lucide-react';

interface TurnkeySubstationSectionProps {
  onOpenConsultationModal: () => void;
}

export const TurnkeySubstationSection: React.FC<TurnkeySubstationSectionProps> = ({
  onOpenConsultationModal,
}) => {
  const deliverables = [
    'PLC-Controlled Auto Synchronizing & Load Sharing Panel',
    'Motorized Air Circuit Breakers (ACB) with Bus Coupler',
    'Substation Transformer Interlocking & HT/LT Cabling',
    'Telangana CEIG Approval Drawings & Statutory Clearance',
  ];

  return (
    <section className="bg-[#00163D] text-white py-14 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Scope & 4 Architectural Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-[#D97706] font-karla font-bold text-xs uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>HIGH-VOLTAGE &amp; MULTI-MEGAWATT INTEGRATION</span>
              </div>
              <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-white leading-tight">
                TURNKEY MULTI-MEGAWATT SUBSTATION &amp; SYNCHRONIZED DG SETS
              </h2>
              <p className="font-karla text-sm sm:text-base text-[#DFE9FB] leading-relaxed">
                For heavy fabrication plants, data center facilities, high-rise IT parks, and healthcare campuses requiring uncompromised continuous electrical loads, M.R Generators provides synchronized parallel DG setups up to 10+ Megawatts.
              </p>
            </div>

            {/* 4 Feature Boxes (2x2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#131D3B] border border-white/10 rounded-[4px] space-y-1.5">
                <span className="block font-karla font-bold text-xs uppercase tracking-wider text-[#D97706]">
                  AUTO SYNCHRONIZATION PANELS
                </span>
                <p className="font-karla text-xs text-[#DFE9FB] leading-relaxed">
                  Microprocessor based load-sharing panels with motorized breakers and automatic mains failure transfer.
                </p>
              </div>

              <div className="p-4 bg-[#131D3B] border border-white/10 rounded-[4px] space-y-1.5">
                <span className="block font-karla font-bold text-xs uppercase tracking-wider text-[#D97706]">
                  SOUND ATTENUATION HOUSINGS
                </span>
                <p className="font-karla text-xs text-[#DFE9FB] leading-relaxed">
                  Rockwool acoustic louvers, attenuators, and vibration isolation pads keeping plant boundaries &lt; 75 dBA.
                </p>
              </div>

              <div className="p-4 bg-[#131D3B] border border-white/10 rounded-[4px] space-y-1.5">
                <span className="block font-karla font-bold text-xs uppercase tracking-wider text-[#D97706]">
                  CIVIL PLINTH &amp; EXHAUST DUCTING
                </span>
                <p className="font-karla text-xs text-[#DFE9FB] leading-relaxed">
                  Reinforced concrete plinth engineering, anti-vibration bellows, and high-chimney MS exhaust piping.
                </p>
              </div>

              <div className="p-4 bg-[#131D3B] border border-white/10 rounded-[4px] space-y-1.5">
                <span className="block font-karla font-bold text-xs uppercase tracking-wider text-[#D97706]">
                  STATUTORY CEIG APPROVALS
                </span>
                <p className="font-karla text-xs text-[#DFE9FB] leading-relaxed">
                  Complete regulatory filings, drawings, and liaison with Chief Electrical Inspector to Government of Telangana.
                </p>
              </div>
            </div>

            {/* Left Action Button & SLA Notice */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
              <button
                type="button"
                onClick={onOpenConsultationModal}
                className="h-12 px-6 bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>SCHEDULE SUBSTATION FEASIBILITY STUDY</span>
              </button>
              <span className="font-karla text-xs text-[#C4C6D0]">
                SLA: 24-Hour Engineering On-Site Inspection
              </span>
            </div>
          </div>

          {/* Right Column: Parallel Load Simulation Diagram (5 cols) */}
          <div className="lg:col-span-5 bg-[#131D3B] border border-white/10 rounded-lg p-6 shadow-xl space-y-5">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <h3 className="font-rubik font-semibold text-lg text-white uppercase tracking-tight">
                PARALLEL LOAD MANAGEMENT SCHEME
              </h3>
              <div className="flex items-center gap-1.5 px-2 py-0.5 bg-[#D97706]/20 text-[#D97706] font-karla font-bold text-[10px] uppercase rounded-[2px]">
                <Activity className="w-3 h-3 animate-pulse" />
                <span>LIVE SIMULATION</span>
              </div>
            </div>

            {/* Diagram Card */}
            <div className="bg-[#0F2B5C] border border-white/10 rounded-[4px] p-4 space-y-4">
              <div className="flex items-center justify-between text-xs font-karla">
                <span className="font-bold text-[#DFE9FB] uppercase">
                  TOTAL BUSBAR CAPACITY: 4500 kVA
                </span>
                <span className="font-mono font-bold text-[#D97706]">ACTIVE LOAD: 72%</span>
              </div>

              {/* 3 Generator Status Bars */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2.5 bg-[#131D3B] rounded-[2px] border border-white/5 space-y-1.5">
                  <span className="block font-rubik font-bold text-sm text-[#D97706]">DG #1</span>
                  <span className="block font-karla text-[10px] text-white">1500 kVA</span>
                  <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-[#D97706] w-[72%]" />
                  </div>
                  <span className="block font-karla text-[9px] text-[#C4C6D0]">ONLINE</span>
                </div>

                <div className="p-2.5 bg-[#131D3B] rounded-[2px] border border-white/5 space-y-1.5">
                  <span className="block font-rubik font-bold text-sm text-[#D97706]">DG #2</span>
                  <span className="block font-karla text-white text-[10px]">1500 kVA</span>
                  <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-[#D97706] w-[72%]" />
                  </div>
                  <span className="block font-karla text-[9px] text-[#C4C6D0]">ONLINE</span>
                </div>

                <div className="p-2.5 bg-[#131D3B] rounded-[2px] border border-white/5 space-y-1.5">
                  <span className="block font-rubik font-bold text-sm text-slate-400">DG #3</span>
                  <span className="block font-karla text-slate-300 text-[10px]">1500 kVA</span>
                  <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-500 w-[0%]" />
                  </div>
                  <span className="block font-karla text-[9px] text-[#C4C6D0]">AUTO-STANDBY</span>
                </div>
              </div>

              {/* Status Row */}
              <div className="pt-1 flex items-center justify-between text-xs font-karla text-[#DFE9FB]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#D97706]" />
                  <span>BUS VOLTAGE: 415V STABLE</span>
                </div>
                <span>FREQUENCY: 50.0 Hz</span>
              </div>
            </div>

            {/* Turnkey Deliverables Checklist */}
            <div className="space-y-2 pt-1 font-karla text-xs sm:text-sm text-[#DFE9FB]">
              {deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
