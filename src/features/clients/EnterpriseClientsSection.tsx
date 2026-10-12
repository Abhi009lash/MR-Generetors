import React from 'react';

export const EnterpriseClientsSection: React.FC = () => {
  const clients = [
    { name: 'BSNL', sector: 'Telecommunications', color: '#385BAB' },
    { name: 'Biological E.', sector: 'Biopharmaceuticals', color: '#00163D' },
    { name: 'Ramky', sector: 'Infrastructure', color: '#00163D' },
    { name: "Dr. Reddy's", sector: 'Pharmaceuticals', color: '#D32F2F' },
    { name: 'Aparna', sector: 'Real Estate & Infra', color: '#00163D' },
    { name: 'Apollo', sector: 'Healthcare Systems', color: '#385BAB' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200/60 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center space-y-2 mb-10">
          <p className="font-karla font-bold text-xs uppercase tracking-[1.2px] text-industrial-textLightMuted">
            Powering Hyderabad's Premier Hubs
          </p>
          <h2 className="font-rubik font-semibold text-xl sm:text-2xl text-navy-950 uppercase tracking-tight">
            Trusted by Industry Leaders
          </h2>
        </div>

        {/* Client Badges / Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {clients.map((client) => (
            <div
              key={client.name}
              className="bg-surface-light border border-slate-100/80 rounded-[4px] p-4 sm:p-5 flex flex-col items-center justify-center text-center shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-sm"
            >
              <span
                style={{ color: client.color }}
                className="font-rubik font-bold text-base sm:text-lg tracking-tight mb-1"
              >
                {client.name}
              </span>
              <span className="font-karla text-[10px] sm:text-[11px] uppercase tracking-wider text-industrial-textLightMuted font-bold">
                {client.sector}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
