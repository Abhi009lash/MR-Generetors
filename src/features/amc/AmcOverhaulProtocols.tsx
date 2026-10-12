import React from 'react';
import { Wrench, Settings, Zap, Thermometer, Check } from 'lucide-react';
import { AMC_OVERHAUL_PROTOCOLS, type AmcProtocolItem } from './amcData';

interface AmcOverhaulProtocolsProps {
  onRequestOverhaul?: (protocolTitle: string) => void;
}

export const AmcOverhaulProtocols: React.FC<AmcOverhaulProtocolsProps> = ({
  onRequestOverhaul,
}) => {
  const getIcon = (code: string) => {
    switch (code) {
      case 'A':
        return <Wrench className="w-5 h-5 text-amber-500" />;
      case 'B':
        return <Settings className="w-5 h-5 text-[#385BAB]" />;
      case 'C':
        return <Zap className="w-5 h-5 text-emerald-500" />;
      default:
        return <Thermometer className="w-5 h-5 text-red-500" />;
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-white border-t border-slate-200 select-none" id="amc-overhauls">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="font-rubik font-bold text-xs uppercase tracking-wider text-[#385BAB] block">
            FULL MECHANICAL &amp; ELECTRICAL OVERHAULS
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] tracking-tight">
            Engine Overhauling &amp; Service Protocols
          </h2>
          <p className="font-karla text-sm text-slate-600 leading-relaxed">
            For high-running or aged generator fleets across Telangana, our workshop facilities execute complete in-situ and yard-based engine rebuilds:
          </p>
        </div>

        {/* 4 Overhaul Protocol Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMC_OVERHAUL_PROTOCOLS.map((proto: AmcProtocolItem) => (
            <div
              key={proto.id}
              onClick={() => onRequestOverhaul?.(proto.title)}
              className="bg-[#F8F9FF] border border-slate-200 rounded-2xl p-6 shadow-2xs hover:shadow-md hover:border-[#00163D] transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-4">
                {/* Code badge & icon */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                    {getIcon(proto.code)}
                  </div>
                  <span className="w-7 h-7 rounded-full bg-[#00163D] text-white flex items-center justify-center font-rubik font-bold text-xs">
                    {proto.code}
                  </span>
                </div>

                <div>
                  <h3 className="font-rubik font-bold text-base text-[#00163D] group-hover:text-[#DC2626] transition-colors leading-tight">
                    {proto.title}
                  </h3>
                  <span className="inline-block mt-1 px-2 py-0.5 rounded bg-slate-200/70 text-slate-700 text-[10px] font-rubik font-bold uppercase tracking-wider">
                    {proto.intervalTag}
                  </span>
                </div>

                {/* Items */}
                <ul className="space-y-2 pt-2 border-t border-slate-200 text-xs font-karla text-slate-600">
                  {proto.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#385BAB] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 mt-2">
                <span className="block text-center py-2 rounded-lg bg-white border border-slate-200 text-[11px] font-rubik font-bold uppercase tracking-wider text-[#00163D] group-hover:bg-[#00163D] group-hover:text-white transition-colors">
                  Inquire Protocol
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
