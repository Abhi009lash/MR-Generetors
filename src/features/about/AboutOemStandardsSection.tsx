import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { generators1Img } from '../../assets/images';

export const AboutOemStandardsSection: React.FC = () => {
  const oemBrands = [
    { name: 'Cummins', sub: 'India Fleet' },
    { name: 'Kirloskar', sub: 'KOEL Green' },
    { name: 'Tata Motors', sub: 'Heavy Powertrain' },
    { name: 'Ashok Leyland', sub: 'Industrial Engines' },
    { name: 'Mahindra', sub: 'Powerol Series' },
    { name: 'Caterpillar', sub: 'Heavy Systems' },
  ];

  return (
    <section className="bg-[#0A1D3F] text-white py-16 lg:py-20 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-[#D97706] font-karla font-bold text-xs uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>02. AUTHORIZED DEALERSHIP &amp; ENGINEERING STANDARDS</span>
            </div>

            <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[1.22] tracking-[-0.9px] text-white">
              Greaves Power CPCB IV+ Acoustic Gensets &amp; Multi-Brand Engine Platforms
            </h2>
          </div>

          {/* ISO Certification Badge Box */}
          <div className="bg-[#131D3B] border border-white/10 rounded-[2px] p-4 flex items-center gap-3 shrink-0 self-start lg:self-auto">
            <Award className="w-8 h-8 text-[#DAE2FF] shrink-0" />
            <div>
              <span className="block font-rubik font-semibold text-lg text-white leading-tight">
                ISO 9001:2015
              </span>
              <span className="block font-karla font-bold text-xs text-[#C4C6D0] uppercase tracking-wider mt-0.5">
                Quality Management Certified
              </span>
            </div>
          </div>
        </div>

        {/* Feature Visual Frame */}
        <div className="relative w-full h-[420px] sm:h-[460px] rounded-lg overflow-hidden bg-[#0F2B5C] border border-white/10 shadow-2xl flex items-center justify-center">
          {/* Authentic Greaves Industrial Setup Image (generators_1.png) */}
          <img
            src={generators1Img}
            alt="Greaves Power CPCB IV+ Acoustic Genset Industrial Setup"
            className="w-full h-full object-cover filter brightness-95 contrast-105"
          />

          {/* Bottom Dark Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D3F] via-[#0A1D3F]/60 to-transparent" />

          {/* Frosted Floating Card at bottom left */}
          <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-2xl bg-[#131D3B]/90 backdrop-blur-md border border-white/15 rounded-[2px] p-5 sm:p-6 shadow-xl space-y-2">
            <div className="flex items-center gap-2 text-[#D97706] font-karla font-bold text-[11px] sm:text-xs uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#D97706]" />
              <span>CPCB IV+ READY &amp; ZERO-EMISSION ACOUSTIC</span>
            </div>

            <h3 className="font-rubik font-bold text-lg sm:text-2xl text-white leading-tight">
              Greaves Power Industrial Canopy Solution (CPCB IV+ Ready)
            </h3>

            <p className="font-karla text-xs sm:text-sm text-[#DFE9FB] leading-relaxed">
              Equipped with electronic governors, silent weatherproof soundproofing, and compliant with latest emission norms. Engineered for data centers, multi-specialty hospitals, and heavy manufacturing facilities requiring zero millisecond latency in standby transfer.
            </p>
          </div>
        </div>

        {/* Supported OEM Engine Platforms Strip */}
        <div className="space-y-4 pt-2">
          <span className="block font-karla font-bold text-xs uppercase tracking-wider text-[#C4C6D0]">
            SUPPORTED OEM POWERTRAINS &amp; SPARES STOCKIST:
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {oemBrands.map((brand, idx) => (
              <div
                key={idx}
                className="bg-[#131D3B] border border-white/5 hover:border-white/20 rounded-[2px] p-4 text-center transition-all"
              >
                <span className="block font-rubik font-bold text-lg sm:text-xl text-white">
                  {brand.name}
                </span>
                <span className="block font-karla font-bold text-xs text-[#DAE2FF] tracking-wider mt-1">
                  {brand.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
