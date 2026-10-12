import React from 'react';

export const ClientsHeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full bg-[#0A1D3F] text-white py-16 px-4 sm:px-6 lg:px-12 overflow-hidden select-none">
      {/* Ambient technical grid overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1D3F] via-[#0F2B5C] to-[#0A1D3F] opacity-90 pointer-events-none" />
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#88A9FE]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto flex flex-col gap-8">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#D32F2F] text-white font-karla text-xs uppercase tracking-wider font-bold">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Enterprise Verified Portfolio
          </span>
          <span className="font-karla text-xs text-[#D0DBED] uppercase tracking-wider font-semibold">
            Trusted by Industry Titans across Telangana &amp; Andhra Pradesh
          </span>
        </div>

        {/* Headline & CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 flex flex-col gap-4">
            <h1 className="font-rubik font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Powering Critical Infrastructure, Healthcare, Tech Hubs &amp; Government Establishments
            </h1>
            <p className="font-karla text-base sm:text-lg text-[#D0DBED] max-w-3xl leading-relaxed">
              Over 1,650+ installations across diverse high-uptime sectors. From mission-critical vaccine manufacturing labs and 500-bed apex hospitals to central government mint security and premier IT tech parks, M.R Generators delivers 100% standby power reliability.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
            <button
              type="button"
              onClick={() => scrollTo('client-directory')}
              className="w-full text-center bg-[#385BAB] text-white px-6 py-3.5 rounded-[4px] font-karla font-bold text-sm uppercase tracking-wider hover:bg-[#88A9FE] hover:text-[#0A1D3F] transition-all shadow-md cursor-pointer"
            >
              Explore 1,650+ Client Directory
            </button>
            <button
              type="button"
              onClick={() => scrollTo('turnkey-spotlights')}
              className="w-full text-center bg-[#0F2B5C] text-white px-6 py-3.5 rounded-[4px] font-karla font-bold text-sm uppercase tracking-wider hover:bg-[#131D3B] transition-all cursor-pointer"
            >
              View Engineering Spotlights
            </button>
          </div>
        </div>

        {/* Stats Metric Counter Strip */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#131D3B] p-6 rounded-lg shadow-md border border-white/5">
          <div className="flex flex-col gap-1 pr-4 border-r border-white/10 last:border-r-0">
            <div className="flex items-baseline gap-1">
              <span className="font-rubik font-bold text-2xl sm:text-3xl text-white">1,650</span>
              <span className="text-[#D32F2F] font-rubik font-bold text-xl">+</span>
            </div>
            <span className="font-karla text-xs text-[#D0DBED] uppercase tracking-wider font-medium">
              Enterprise Clients Served
            </span>
          </div>

          <div className="flex flex-col gap-1 pr-4 border-r border-white/10 last:border-r-0">
            <div className="flex items-baseline gap-1">
              <span className="font-rubik font-bold text-2xl sm:text-3xl text-white">2,500</span>
              <span className="text-[#88A9FE] font-rubik font-bold text-xl">+</span>
            </div>
            <span className="font-karla text-xs text-[#D0DBED] uppercase tracking-wider font-medium">
              DG Sets Deployed (5-2000 kVA)
            </span>
          </div>

          <div className="flex flex-col gap-1 pr-4 border-r border-white/10 last:border-r-0">
            <div className="flex items-baseline gap-1">
              <span className="font-rubik font-bold text-2xl sm:text-3xl text-white">99.98%</span>
            </div>
            <span className="font-karla text-xs text-[#D0DBED] uppercase tracking-wider font-medium">
              Uptime on Synchronized Grids
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-baseline gap-1">
              <span className="font-rubik font-bold text-2xl sm:text-3xl text-[#D97706]">&lt; 60</span>
              <span className="text-white font-karla text-sm font-medium">Mins</span>
            </div>
            <span className="font-karla text-xs text-[#D0DBED] uppercase tracking-wider font-medium">
              Emergency Dispatch SLA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
