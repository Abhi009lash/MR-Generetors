import React from 'react';

export const AboutLeadershipSection: React.FC = () => {
  return (
    <section className="bg-[#EFF4FF] border-t border-[#D9E3F5] py-16 lg:py-20 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-2">
          <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#385BAB]">
            EXECUTIVE TECHNICAL LEADERSHIP
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-[36px] text-[#00163D] tracking-tight">
            Engineered by Industry Veterans
          </h2>
          <p className="font-karla text-sm sm:text-base text-[#44464F]">
            Direct engineering leadership ensuring turnkey execution from mechanical sizing to synchronised electrical panel commissioning.
          </p>
        </div>

        {/* 2-Column Leadership Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Leader 1: Mr. Madhusudhana Rao */}
          <div className="bg-white rounded-lg p-7 sm:p-8 shadow-xs border border-slate-200/60 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              {/* Profile Header */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-[2px] bg-[#0F2B5C] text-white font-rubik font-bold text-2xl flex items-center justify-center shrink-0">
                  MR
                </div>
                <div>
                  <h3 className="font-rubik font-bold text-xl sm:text-2xl text-[#00163D] leading-tight">
                    Mr. Madhusudhana Rao
                  </h3>
                  <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#D32F2F] mt-1 block">
                    FOUNDER &amp; MANAGING DIRECTOR
                  </span>
                </div>
              </div>

              {/* Badges / Credentials */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-2.5 py-1 bg-[#E2E8F0] rounded-[2px] font-karla font-bold text-xs text-[#00163D]">
                  B.Tech (Mechanical Engineering)
                </span>
                <span className="px-2.5 py-1 bg-[#E2E8F0] rounded-[2px] font-karla font-bold text-xs text-[#00163D]">
                  Top Executive Leader in India
                </span>
                <span className="px-2.5 py-1 bg-[#E2E8F0] rounded-[2px] font-karla font-bold text-xs text-[#00163D]">
                  Ex-Heavy Industries &amp; Machinery Executive
                </span>
              </div>

              {/* Narrative Bios */}
              <p className="font-karla text-sm text-[#44464F] leading-relaxed">
                A bright mechanical engineer who began his career in corporate management in 2008 and worked in heavy machinery sectors until 2012. He established M R Power Solutions in 2012, nurturing it into Hyderabad’s most trusted standby power partner.
              </p>

              <p className="font-karla text-xs sm:text-sm text-[#44464F] leading-relaxed">
                During his tenure, he has earned high accolades for the successful execution of critical government standby projects, public hospital power installations, and continuing active initiatives to uplift marginalized communities through skill education.
              </p>
            </div>

            {/* Bottom Meta */}
            <div className="pt-4 border-t border-[#E5EEFF] flex flex-wrap items-center justify-between gap-2 text-xs font-karla font-bold">
              <span className="text-[#747780]">
                Specialisation: Heavy Turbines &amp; Synchronisation
              </span>
              <span className="text-[#385BAB] uppercase tracking-wider">
                Executive Council
              </span>
            </div>
          </div>

          {/* Leader 2: Mr. Varma */}
          <div className="bg-white rounded-lg p-7 sm:p-8 shadow-xs border border-slate-200/60 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              {/* Profile Header */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-[2px] bg-[#385BAB] text-white font-rubik font-bold text-2xl flex items-center justify-center shrink-0">
                  VR
                </div>
                <div>
                  <h3 className="font-rubik font-bold text-xl sm:text-2xl text-[#00163D] leading-tight">
                    Mr. Varma
                  </h3>
                  <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#385BAB] mt-1 block">
                    DIRECTOR &amp; HEAD OF SERVICE &amp; MAINTENANCE
                  </span>
                </div>
              </div>

              {/* Badges / Credentials */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-2.5 py-1 bg-[#E2E8F0] rounded-[2px] font-karla font-bold text-xs text-[#00163D]">
                  B.Tech (Electrical Engineering)
                </span>
                <span className="px-2.5 py-1 bg-[#E2E8F0] rounded-[2px] font-karla font-bold text-xs text-[#00163D]">
                  Ex-Heavy Mechanical &amp; Electrical PSU Authority
                </span>
              </div>

              {/* Narrative Bios */}
              <p className="font-karla text-sm text-[#44464F] leading-relaxed">
                A seasoned electrical engineering authority, Mr. Varma joined the organization in 2014 to build and lead the central Service &amp; Maintenance division across Telangana and Andhra Pradesh.
              </p>

              <p className="font-karla text-xs sm:text-sm text-[#44464F] leading-relaxed">
                Possessing over 15 years of hands-on expertise in electrical synchronization, alternators, PLC control panels, and engine teardowns, he directly commands the 24/7 Mobile Quick Response unit and factory warranty repair standards.
              </p>
            </div>

            {/* Bottom Meta */}
            <div className="pt-4 border-t border-[#E5EEFF] flex flex-wrap items-center justify-between gap-2 text-xs font-karla font-bold">
              <span className="text-[#747780]">
                Command: Central Service Depot &amp; Mobile Fleet
              </span>
              <span className="text-[#385BAB] uppercase tracking-wider">
                Technical Operations Lead
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
