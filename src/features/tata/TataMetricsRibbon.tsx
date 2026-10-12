import React from 'react';

export const TataMetricsRibbon: React.FC = () => {
  const metrics = [
    { value: '25 - 100 kVA', color: 'text-[#88A9FE]', label: 'PRIME & STANDBY CAPACITY RANGE' },
    { value: '4 & 6 Cylinder', color: 'text-white', label: 'HARMONIZED HEAVY COMMERCIAL ENGINE BLOCK' },
    { value: '+20% Space', color: 'text-[#D97706]', label: 'HOMOGENEOUS ACOUSTIC CANOPY DESIGN' },
    { value: '500+ Centers', color: 'text-[#88A9FE]', label: 'LOWEST COST & QUICKER SPARES ACCESS' },
    { value: 'Lowest Burn', color: 'text-white', label: 'BEST-IN-CLASS FUEL CONSUMPTION IN SEGMENT' },
  ];

  return (
    <div className="bg-[#0A1D3F] text-white py-6 border-b border-[#0F2B5C] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center md:text-left">
          {metrics.map((m, idx) => (
            <div key={idx} className="space-y-1">
              <span className={`block font-rubik font-bold text-xl sm:text-2xl ${m.color} tracking-tight`}>
                {m.value}
              </span>
              <span className="block font-karla font-bold text-[11px] text-[#D0DBED] uppercase tracking-wider leading-tight">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
