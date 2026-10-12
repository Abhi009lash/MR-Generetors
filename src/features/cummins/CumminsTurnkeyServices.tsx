import React from 'react';
import { Building, ShieldCheck, Headphones } from 'lucide-react';

export const CumminsTurnkeyServices: React.FC = () => {
  return (
    <section className="bg-[#00163D] text-white py-14 lg:py-16 border-b border-[#0F2B5C] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Header */}
        <div className="space-y-2 max-w-3xl">
          <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#D97706] block">
            END-TO-END TURNKEY VALUE ADDITION
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight">
            TURNKEY INSTALLATION, CEIG APPROVALS &amp; LIFETIME AMC
          </h2>
          <p className="font-karla text-sm text-[#DFE9FB] leading-relaxed">
            M.R Generators delivers complete electrical engineering from slab foundation to CEIG approvals and 24/7 lifetime emergency AMC coverage across Telangana:
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#0A1D3F] border border-white/10 rounded-[2px] p-6 space-y-4 hover:border-[#D97706]/60 transition-all">
            <div className="w-10 h-10 rounded-[2px] bg-[#132A55] flex items-center justify-center text-[#D97706]">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="font-rubik font-bold text-base text-white">
              Foundation &amp; Electrical Execution
            </h3>
            <p className="font-karla text-xs text-[#DFE9FB] leading-relaxed">
              Heavy-duty concrete vibration-isolated plinth construction, copper/aluminium earthing pits, acoustic exhaust chimney fabrication, and integrated diesel bulk storage tanks up to 5,000 litres.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0A1D3F] border border-white/10 rounded-[2px] p-6 space-y-4 hover:border-[#D97706]/60 transition-all">
            <div className="w-10 h-10 rounded-[2px] bg-[#132A55] flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-rubik font-bold text-base text-white">
              CEIG &amp; Pollution Clearances
            </h3>
            <p className="font-karla text-xs text-[#DFE9FB] leading-relaxed">
              Full compliance liaisoning for Chief Electrical Inspectorate to Government (CEIG) approvals, State Pollution Control Board (TSPCB) NOCs, noise certification, and diesel drawing licences.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0A1D3F] border border-white/10 rounded-[2px] p-6 space-y-4 hover:border-[#D97706]/60 transition-all">
            <div className="w-10 h-10 rounded-[2px] bg-[#132A55] flex items-center justify-center text-blue-400">
              <Headphones className="w-5 h-5" />
            </div>
            <h3 className="font-rubik font-bold text-base text-white">
              Comprehensive Exercise &amp; AMC Contracts
            </h3>
            <p className="font-karla text-xs text-[#DFE9FB] leading-relaxed">
              Guaranteed 24/7/365 field response with genuine Fleetguard filters and Valvoline lubricants, bi-monthly scheduled checkups, and guaranteed 2-hour field response in Hyderabad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
