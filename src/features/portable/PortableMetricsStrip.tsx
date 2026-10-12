import React from 'react';

export const PortableMetricsStrip: React.FC = () => {
  return (
    <section className="bg-[#0F2B5C] py-8 sm:py-10 border-b border-[#00163D] select-none shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Metric 1 */}
          <div className="space-y-1 text-left sm:text-left">
            <span className="block font-rubik font-bold text-4xl sm:text-[46px] leading-tight text-[#F4F6F9] tracking-tight">
              1 - 125
            </span>
            <span className="block font-karla font-bold text-xs uppercase tracking-wider text-[#DAE2FF]">
              kVA Capacity Spectrum
            </span>
            <p className="font-karla text-xs sm:text-sm text-[#7C94CB] pt-0.5">
              From hand-carry to synchronized mobile plants
            </p>
          </div>

          {/* Metric 2 */}
          <div className="space-y-1 text-left sm:text-left">
            <span className="block font-rubik font-bold text-4xl sm:text-[46px] leading-tight text-[#F4F6F9] tracking-tight">
              &lt; 62 dBA
            </span>
            <span className="block font-karla font-bold text-xs uppercase tracking-wider text-[#DAE2FF]">
              Acoustic Sound Floor
            </span>
            <p className="font-karla text-xs sm:text-sm text-[#7C94CB] pt-0.5">
              Encapsulated quiet operations at 7 meters
            </p>
          </div>

          {/* Metric 3 */}
          <div className="space-y-1 text-left sm:text-left">
            <span className="block font-rubik font-bold text-4xl sm:text-[46px] leading-tight text-[#F4F6F9] tracking-tight">
              100%
            </span>
            <span className="block font-karla font-bold text-xs uppercase tracking-wider text-[#DAE2FF]">
              Dual Water Cooling
            </span>
            <p className="font-karla text-xs sm:text-sm text-[#7C94CB] pt-0.5">
              Engine and alternator cooled continuously
            </p>
          </div>

          {/* Metric 4 */}
          <div className="space-y-1 text-left sm:text-left">
            <span className="block font-rubik font-bold text-4xl sm:text-[46px] leading-tight text-[#F4F6F9] tracking-tight">
              &lt; 2 Hrs
            </span>
            <span className="block font-karla font-bold text-xs uppercase tracking-wider text-[#DAE2FF]">
              Rapid Dispatch SLA
            </span>
            <p className="font-karla text-xs sm:text-sm text-[#7C94CB] pt-0.5">
              Towed response across Greater Hyderabad
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
