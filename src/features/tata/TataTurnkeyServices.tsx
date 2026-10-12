import React from 'react';
import { Award, Compass, ShieldCheck } from 'lucide-react';

export const TataTurnkeyServices: React.FC = () => {
  return (
    <section className="bg-[#131D3B] text-white py-14 lg:py-16 border-b border-[#0F2B5C] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2 border-b border-white/10">
          <div className="space-y-2 max-w-xl">
            <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#88A9FE]">
              FACTORY-CERTIFIED TURNKEY CAPABILITIES
            </span>
            <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight">
              TURNKEY INSTALLATION, ERECTION &amp; SERVICES BY M.R GENERATORS
            </h2>
          </div>

          <p className="font-karla text-sm text-[#D0DBED] max-w-lg leading-relaxed">
            From site civil drawings and RCC foundation pads to high-performance acoustic air ducting and CEIG approvals, M.R Generators provides complete single-source project execution.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <div className="bg-[#0F2B5C] rounded-[2px] p-6 flex flex-col justify-between space-y-5 border border-white/5">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-[2px] bg-[#0A1D3F] flex items-center justify-center">
                <Award className="w-6 h-6 text-[#88A9FE]" />
              </div>
              <h3 className="font-rubik font-bold text-lg text-white leading-snug">
                One-Point Contact for Sales &amp; Authorized Service
              </h3>
              <p className="font-karla text-xs sm:text-sm text-[#D0DBED] leading-relaxed">
                Customer and dealer are assured of satisfactory, zero-hassle after-sales support. No shifting blame between engine manufacturer and canopy assembler — M.R Generators assumes full operational accountability.
              </p>
            </div>
            <div className="pt-2 border-t border-white/10">
              <span className="font-karla font-bold text-xs text-[#88A9FE] tracking-wide block">
                &bull; Dedicated Relationship Manager &bull; 24x7 Direct Dispatch
              </span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#0F2B5C] rounded-[2px] p-6 flex flex-col justify-between space-y-5 border border-white/5">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-[2px] bg-[#0A1D3F] flex items-center justify-center">
                <Compass className="w-6 h-6 text-[#88A9FE]" />
              </div>
              <h3 className="font-rubik font-bold text-lg text-white leading-snug">
                Turnkey Execution &amp; Civil Erection
              </h3>
              <p className="font-karla text-xs sm:text-sm text-[#D0DBED] leading-relaxed">
                Complete site load profiling, RCC civil foundation plinths, high-performance acoustic air ducting, heavy-duty insulated exhaust piping with mineral wool cladding, and statutory CEIG approvals.
              </p>
            </div>
            <div className="pt-2 border-t border-white/10">
              <span className="font-karla font-bold text-xs text-[#88A9FE] tracking-wide block">
                &bull; Structural Drawings &bull; Cable Laying &bull; Earthing Pits
              </span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#0F2B5C] rounded-[2px] p-6 flex flex-col justify-between space-y-5 border border-white/5">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-[2px] bg-[#0A1D3F] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[#88A9FE]" />
              </div>
              <h3 className="font-rubik font-bold text-lg text-white leading-snug">
                AMC &amp; Multi-Tier Maintenance Contracts
              </h3>
              <p className="font-karla text-xs sm:text-sm text-[#D0DBED] leading-relaxed">
                Comprehensive and non-comprehensive AMC options. Routine B-Check and C-Check scheduling, top overhauls, computerized load-bank testing, and genuine Tata filters and lubes dispatched right on schedule.
              </p>
            </div>
            <div className="pt-2 border-t border-white/10">
              <span className="font-karla font-bold text-xs text-[#88A9FE] tracking-wide block">
                &bull; 500+ Spares Stockists Access &bull; 99.8% Uptime SLA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
