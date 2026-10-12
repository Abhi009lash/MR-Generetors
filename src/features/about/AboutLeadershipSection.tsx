import React from 'react';
import { Award, ShieldCheck, Wrench, CheckCircle2 } from 'lucide-react';
import { madhusudhanaImg, varmaImg } from '../../assets/images';

export const AboutLeadershipSection: React.FC = () => {
  return (
    <section className="bg-[#EFF4FF] border-t border-[#D9E3F5] py-16 lg:py-20 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-2">
          <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#385BAB] flex items-center gap-1.5">
            <Award className="w-4 h-4 text-[#385BAB]" />
            EXECUTIVE TECHNICAL LEADERSHIP
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-[36px] text-[#00163D] tracking-tight">
            Engineered by Industry Veterans
          </h2>
          <p className="font-karla text-sm sm:text-base text-[#44464F]">
            Direct engineering stewardship ensuring turnkey execution from mechanical sizing to synchronised electrical panel commissioning.
          </p>
        </div>

        {/* 2-Column Leadership Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Leader 1: Mr. Madhusudhana Rao */}
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-xs border border-slate-200/80 flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
            <div className="space-y-5">
              {/* Profile Header with Photo */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-lg overflow-hidden border-2 border-[#DFE9FB] shadow-md bg-slate-100 shrink-0 group">
                  <img
                    src={madhusudhanaImg}
                    alt="Mr. Madhusudhana Rao - Founder & Managing Director, M.R Generators"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full shadow-xs"
                    title="Active Executive Command"
                  />
                </div>
                <div className="space-y-1">
                  <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#D32F2F] block">
                    FOUNDER &amp; MANAGING DIRECTOR
                  </span>
                  <h3 className="font-rubik font-bold text-xl sm:text-2xl text-[#00163D] leading-tight">
                    Mr. Madhusudhana Rao
                  </h3>
                  <p className="font-karla text-xs text-slate-500 font-medium">
                    B.Tech (Mechanical Engineering) &bull; Corporate Leader
                  </p>
                  <div className="flex items-center gap-1.5 pt-1 text-[11px] font-karla font-bold text-[#385BAB]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#385BAB]" />
                    <span>Executive Council &bull; Established M.R in 2012</span>
                  </div>
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
                A bright mechanical engineer who began his career in corporate management in 2008 and worked across heavy machinery sectors until 2012. He established M R Power Solutions in 2012, nurturing it into Hyderabad’s most trusted standby power engineering partner.
              </p>

              <p className="font-karla text-xs sm:text-sm text-[#44464F] leading-relaxed">
                During his tenure, he has earned high accolades for the successful execution of critical government standby projects, apex hospital power grids, and continuing active initiatives to uplift marginalized communities through skill education and vocational power engineering training.
              </p>
            </div>

            {/* Bottom Meta */}
            <div className="pt-4 border-t border-[#E5EEFF] flex flex-wrap items-center justify-between gap-2 text-xs font-karla font-bold">
              <span className="text-[#747780] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Specialisation: Heavy Turbines &amp; Synchronisation
              </span>
              <span className="text-[#385BAB] uppercase tracking-wider">
                Founder &amp; MD
              </span>
            </div>
          </div>

          {/* Leader 2: Mr. Varma */}
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-xs border border-slate-200/80 flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
            <div className="space-y-5">
              {/* Profile Header with Photo */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-lg overflow-hidden border-2 border-[#DFE9FB] shadow-md bg-slate-100 shrink-0 group">
                  <img
                    src={varmaImg}
                    alt="Mr. Varma - Director & Head of Service & Maintenance, M.R Generators"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full shadow-xs"
                    title="Active Field Command"
                  />
                </div>
                <div className="space-y-1">
                  <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#385BAB] block">
                    DIRECTOR &amp; HEAD OF SERVICE &amp; MAINTENANCE
                  </span>
                  <h3 className="font-rubik font-bold text-xl sm:text-2xl text-[#00163D] leading-tight">
                    Mr. Varma
                  </h3>
                  <p className="font-karla text-xs text-slate-500 font-medium">
                    B.Tech (Electrical Engineering) &bull; 15+ Years Authority
                  </p>
                  <div className="flex items-center gap-1.5 pt-1 text-[11px] font-karla font-bold text-[#D32F2F]">
                    <Wrench className="w-3.5 h-3.5 text-[#D32F2F]" />
                    <span>Technical Operations &bull; Mobile Depot Command</span>
                  </div>
                </div>
              </div>

              {/* Badges / Credentials */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-2.5 py-1 bg-[#E2E8F0] rounded-[2px] font-karla font-bold text-xs text-[#00163D]">
                  B.Tech (Electrical Engineering)
                </span>
                <span className="px-2.5 py-1 bg-[#E2E8F0] rounded-[2px] font-karla font-bold text-xs text-[#00163D]">
                  Ex-Heavy Electrical &amp; PSU Authority
                </span>
                <span className="px-2.5 py-1 bg-[#E2E8F0] rounded-[2px] font-karla font-bold text-xs text-[#00163D]">
                  15+ Years Hands-on Diagnostics
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
              <span className="text-[#747780] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Command: Central Service Depot &amp; Mobile Fleet
              </span>
              <span className="text-[#385BAB] uppercase tracking-wider">
                Director &bull; Services Lead
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
