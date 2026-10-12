import React from 'react';
import { Zap, RotateCcw, Truck, Wrench, PhoneCall } from 'lucide-react';
import { aboutEcosystemImg } from '../../assets/images';

export const AboutHeritageSection: React.FC = () => {
  const pillars = [
    {
      title: 'New & CPCB IV+ DG Sets',
      desc: 'State-of-the-art acoustic canopy diesel gensets with high thermal efficiency and strict national pollution compliance.',
      borderColor: 'border-l-[#00163D]',
      icon: <Zap className="w-5 h-5 text-[#00163D]" />,
    },
    {
      title: 'Reconditioned Fleet',
      desc: 'Certified high-durability remanufactured generators delivering OEM reliability for fast-track projects and budget optimization.',
      borderColor: 'border-l-[#385BAB]',
      icon: <RotateCcw className="w-5 h-5 text-[#385BAB]" />,
    },
    {
      title: 'Mobile & Rental Units',
      desc: 'Rapid-deployment mobile trailer gensets ready for seasonal outages, heavy construction, and event power backup.',
      borderColor: 'border-l-[#D97706]',
      icon: <Truck className="w-5 h-5 text-[#D97706]" />,
    },
    {
      title: '24/7 Field Repairs',
      desc: 'Round-the-clock rapid response mobile engineering squads equipped with genuine spares and advanced diagnostics.',
      borderColor: 'border-l-[#D32F2F]',
      icon: <Wrench className="w-5 h-5 text-[#D32F2F]" />,
    },
  ];

  return (
    <section className="bg-[#EFF4FF] py-16 lg:py-20 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Story & 4 Pillars Grid */}
          <div className="lg:col-span-7 space-y-6">
            {/* Overline with blue bar */}
            <div className="flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#385BAB]" />
              <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#385BAB]">
                01. DECADE OF HERITAGE &amp; INFRASTRUCTURE READINESS
              </span>
            </div>

            {/* Heading 2 */}
            <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-[36px] leading-[1.22] tracking-[-0.9px] text-[#00163D]">
              Engineering Continuous Uptime for Southern India's Mission-Critical Corridors
            </h2>

            {/* Paragraph 1 */}
            <p className="font-karla text-sm sm:text-base text-[#44464F] leading-relaxed">
              Established in 2014, <strong>M.R Generators</strong> was founded to address the growing demand for continuous and dependable power solutions. Recognized among the Top Generator Companies in Hyderabad, we have remained a frontrunner in the sales and services of standby Diesel Generator (DG) sets for over a decade.
            </p>

            {/* Paragraph 2 */}
            <p className="font-karla text-sm sm:text-base text-[#44464F] leading-relaxed">
              We offer DG sets ranging from <strong>5 KVA to 2000 KVA</strong> catering to diverse industrial and commercial power requirements. We are reputed for delivering reliable standby power solutions and undertaking turnkey projects, from site assessment to installation, commissioning, maintenance, and service.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className={`bg-white p-5 rounded-[2px] shadow-xs border-l-4 ${pillar.borderColor} flex flex-col justify-between`}
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    {pillar.icon}
                    <h3 className="font-rubik font-semibold text-base sm:text-lg text-[#00163D] leading-tight">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="font-karla text-xs sm:text-sm text-[#44464F] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Circular Lifecycle Graphic */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded p-6 shadow-md border border-slate-100 flex flex-col items-center">
              <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#747780] mb-4 text-center">
                M.R GENERATORS 24X7 SERVICE SUPPORT LIFECYCLE
              </span>

              {/* Exact Circular Lifecycle Image */}
              <div className="w-full max-w-[380px] aspect-square flex items-center justify-center p-2">
                <img
                  src={aboutEcosystemImg}
                  alt="M.R Generators 24x7 Service Support Lifecycle"
                  className="w-full h-full object-contain filter drop-shadow-sm transition-transform hover:scale-102"
                />
              </div>

              {/* Red Bottom Bar */}
              <div className="w-full pt-4 mt-2 border-t border-[#E5EEFF] flex items-center justify-center gap-2 text-[#D32F2F]">
                <PhoneCall className="w-4 h-4 shrink-0" />
                <span className="font-karla font-bold text-xs uppercase tracking-wider text-center">
                  24/7 RAPID ROUND-THE-CLOCK HOTLINE RESPONSE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
