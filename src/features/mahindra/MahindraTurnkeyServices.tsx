import React from 'react';
import { Layers, ShieldCheck, Cpu, Wrench } from 'lucide-react';
import { MAHINDRA_TURNKEY_SERVICES, type MahindraTurnkeyService } from './mahindraData';

interface MahindraTurnkeyServicesProps {
  onSelectService?: (title: string) => void;
}

export const MahindraTurnkeyServices: React.FC<MahindraTurnkeyServicesProps> = ({
  onSelectService,
}) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'civil':
        return <Layers className="w-5 h-5 text-amber-500" />;
      case 'electrical':
        return <ShieldCheck className="w-5 h-5 text-emerald-500" />;
      case 'amf':
        return <Cpu className="w-5 h-5 text-[#385BAB]" />;
      default:
        return <Wrench className="w-5 h-5 text-red-500" />;
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-[#F8F9FF] border-t border-slate-200 select-none" id="mahindra-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="font-rubik font-bold text-xs uppercase tracking-wider text-[#385BAB] block">
            END-TO-END DEPLOYMENT &amp; AFTER-SALES LIFECYCLE
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] tracking-tight">
            Turnkey Installation, CPCB Approvals &amp; AMC Services
          </h2>
          <p className="font-karla text-sm text-slate-600 leading-relaxed">
            M.R Generators provides complete, end-to-end electrical, civil, and mechanical engineering for all Mahindra Powerol installations:
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MAHINDRA_TURNKEY_SERVICES.map((serv: MahindraTurnkeyService) => (
            <div
              key={serv.id}
              onClick={() => onSelectService?.(serv.title)}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs hover:shadow-md hover:border-[#00163D] transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getIcon(serv.id)}
                </div>

                <h3 className="font-rubik font-bold text-base text-[#00163D] group-hover:text-[#DC2626] transition-colors leading-tight">
                  {serv.title}
                </h3>

                <p className="font-karla text-xs text-slate-600 leading-relaxed">
                  {serv.description}
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-xs font-karla text-[#00163D] font-bold group-hover:text-[#DC2626]">
                <span>Inquire Execution</span>
                <span>&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
