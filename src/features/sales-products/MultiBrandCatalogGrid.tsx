import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface MultiBrandCatalogGridProps {
  onSelectBrand: (brandName: string, kvaRange: string) => void;
  onNavigateToLeypower?: () => void;
}

interface BrandCardItem {
  id: string;
  name: string;
  kvaRange: string;
  isSpecialBadge?: boolean;
  specialBadgeText?: string;
  description: string;
  spec1: string;
  spec2: string;
}

const BRANDS_LIST: BrandCardItem[] = [
  {
    id: 'tata',
    name: 'TATA',
    kvaRange: '15 - 125 kVA',
    description: 'Tata Motors industrial engines known for exceptional fuel economy, robust mechanical reliability, and widespread parts availability.',
    spec1: 'Aspiration: Turbocharged',
    spec2: 'Prime Range: Continuous Utility',
  },
  {
    id: 'cummins',
    name: 'CUMMINS',
    kvaRange: '7.5 - 2000 kVA',
    description: 'Global benchmark for critical standby power. Unmatched transient response for data centers, hospitals, and heavy industrial facilities.',
    spec1: 'PCC Series Controllers',
    spec2: 'Single Step 100% Load',
  },
  {
    id: 'kirloskar',
    name: 'KIRLOSKAR',
    kvaRange: '5 - 1010 kVA',
    description: 'KOEL Green series DG sets, India’s largest selling and highly trusted genset brand with quick startup time and low lifecycle maintenance costs.',
    spec1: 'Over 1 Million In Service',
    spec2: 'Super-Silent Enclosure',
  },
  {
    id: 'ashok-leyland',
    name: 'ASHOK LEYLAND',
    kvaRange: '10 - 2250 kVA',
    description: 'State-of-the-art engine, alternator and controller technology offering fully integrated power systems at low cost of overall ownership.',
    spec1: 'High Fuel Mileage Rate',
    spec2: 'Compact Base Footprint',
  },
  {
    id: 'mahindra',
    name: 'MAHINDRA',
    kvaRange: '5 - 625 kVA',
    description: 'Mahindra Powerol sets equipped with electronic speed control, low vibration dampers, and intelligent diagnostics for telecom and commercial use.',
    spec1: 'Zero-Defect Reliability',
    spec2: 'Minimal Smoke & Noise',
  },
  {
    id: 'eicher',
    name: 'EICHER',
    kvaRange: '10 - 160 kVA',
    description: 'Engineered with heavy-duty air-cooled and water-cooled engine blocks delivering superior power under harsh construction and quarry site environments.',
    spec1: 'High Torque Backup',
    spec2: 'Low Oil Consumption',
  },
  {
    id: 'caterpillar',
    name: 'CAT (CATERPILLAR)',
    kvaRange: '200 - 4000 kVA',
    description: 'Heavy equipment industrial standard. Built for critical continuous rating with world-class alternator excitation and telemetry.',
    spec1: 'High Inrush Handling',
    spec2: 'Heavy Duty Marine-Grade',
  },
  {
    id: 'portable',
    name: 'PORTABLE / MOBILE',
    kvaRange: '5 - 50 kVA',
    isSpecialBadge: true,
    specialBadgeText: 'RENTAL READY',
    description: 'Super-silent capsules on heavy towable trailers with DC battery charging & variable speed options. Ideal for events, telecom & quick emergency response.',
    spec1: 'Trailer Mounted Towbar',
    spec2: 'Variable Speed AC/DC',
  },
];

export const MultiBrandCatalogGrid: React.FC<MultiBrandCatalogGridProps> = ({
  onSelectBrand,
  onNavigateToLeypower,
}) => {
  return (
    <section className="bg-[#EFF4FF] py-14 border-t border-[#D6E4FF] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#385BAB]">
            COMPREHENSIVE MULTI-OEM PORTFOLIO
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl text-[#00163D] uppercase tracking-tight">
            AUTHORIZED MULTI-BRAND DG SETS &amp; SPARES
          </h2>
          <p className="font-karla text-xs sm:text-sm text-slate-600 leading-relaxed">
            In addition to our flagship Greaves Power dealership, we supply, install, and service leading industrial generator platforms with genuine OEM factory spares.
          </p>
        </div>

        {/* 8-Brand Technical Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BRANDS_LIST.map((b) => {
            const isAshokLeyland =
              b.id === 'ashok-leyland' ||
              b.id === 'leypower' ||
              b.name === 'ASHOK LEYLAND';

            return (
              <div
                key={b.id}
                onClick={() => {
                  if (isAshokLeyland && onNavigateToLeypower) {
                    onNavigateToLeypower();
                  }
                }}
                className={`bg-white rounded-[4px] border border-slate-200 p-5 shadow-xs flex flex-col justify-between space-y-4 transition-all ${
                  isAshokLeyland
                    ? 'cursor-pointer hover:border-[#00163D] hover:shadow-md ring-1 ring-[#385BAB]/10'
                    : 'hover:border-[#385BAB] hover:shadow-sm'
                }`}
              >
                <div className="space-y-3">
                  {/* Brand Title + Range Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-rubik font-bold text-lg text-[#00163D] uppercase truncate">
                      {b.name}
                    </h3>
                    <span
                      className={`px-2 py-0.5 rounded-[2px] font-karla font-bold text-[10px] uppercase tracking-wider shrink-0 ${
                        b.isSpecialBadge
                          ? 'bg-[#D32F2F] text-white'
                          : 'bg-[#E5EEFF] text-[#00163D]'
                      }`}
                    >
                      {b.isSpecialBadge ? b.specialBadgeText : b.kvaRange}
                    </span>
                  </div>

                  <p className="font-karla text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {b.description}
                  </p>

                  {/* 2 Specs Box */}
                  <div className="p-2.5 bg-[#EFF4FF] rounded-[2px] space-y-1 font-karla text-xs text-slate-700">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#385BAB] shrink-0" />
                      <span className="truncate">{b.spec1}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#385BAB] shrink-0" />
                      <span className="truncate">{b.spec2}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-karla font-bold text-xs text-[#00163D]">
                    {b.kvaRange}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (isAshokLeyland && onNavigateToLeypower) {
                        onNavigateToLeypower();
                      } else {
                        onSelectBrand(b.name, b.kvaRange);
                      }
                    }}
                    className="font-karla font-bold text-xs uppercase tracking-wider text-[#385BAB] hover:text-[#00163D] flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>VIEW LINEUP</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
