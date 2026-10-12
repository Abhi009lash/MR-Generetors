import React from 'react';

export const ClientsOemStrip: React.FC = () => {
  const oemLogos = [
    {
      name: 'Kirloskar',
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
          <path d="M8 8V16M16 8L10 13L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: 'Cummins',
      icon: (
        <svg className="w-5 h-5 text-[#D32F2F]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3L21 19H3L12 3Z" />
        </svg>
      ),
    },
    {
      name: 'Mahindra',
      icon: (
        <svg className="w-5 h-5 text-[#D32F2F]" viewBox="0 0 24 24" fill="none">
          <path d="M4 7H8L12 14L16 7H20V17H16V11L12 17L8 11V17H4V7Z" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: 'Ashok Leyland',
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
          <path d="M12 6L16 18H8L12 6Z" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: 'Greaves',
      icon: (
        <div className="w-5 h-5 bg-[#D32F2F] rounded flex items-center justify-center font-bold text-[11px] text-white font-rubik">
          G
        </div>
      ),
    },
    {
      name: 'Tata',
      icon: (
        <div className="w-5 h-5 rounded-full bg-[#88A9FE] text-[#0A1D3F] flex items-center justify-center font-bold text-[11px] font-rubik">
          T
        </div>
      ),
    },
    {
      name: 'Caterpillar',
      icon: (
        <div className="w-5 h-5 bg-[#D97706] rounded flex items-center justify-center font-bold text-[10px] text-black font-rubik">
          CAT
        </div>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#0F2B5C] py-4 px-4 sm:px-6 lg:px-12 select-none border-b border-white/10">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 font-karla text-xs uppercase tracking-wider text-[#D0DBED]">
        <span className="font-bold">Authorized OEM Engineering Partner Ecosystem:</span>
        <div className="flex flex-wrap items-center gap-3 font-rubik text-sm">
          {oemLogos.map((oem) => (
            <div
              key={oem.name}
              className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-[4px] border border-white/10 hover:bg-white/15 transition-colors"
            >
              {oem.icon}
              <span className="text-white font-bold">{oem.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
