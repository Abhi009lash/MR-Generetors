import React from 'react';
import { Eye, Target, Shield, Users, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const AboutVisionMissionValues: React.FC = () => {
  const values = [
    {
      title: 'Integrity',
      desc: 'As one of the Top Generator Companies in Hyderabad, we remain reliable and trustworthy by upholding integrity, honesty, and complete transparency in all our dealings. We set a benchmark through ethical business practices.',
      borderBottom: 'border-b-[#00163D]',
      icon: <Shield className="w-5 h-5 text-[#00163D]" />,
    },
    {
      title: 'Relationships',
      desc: 'We focus on building strong and lasting relationships with all stakeholders, including customers, dealers, vendors, and employees. We place highest priority on health, safety, and environmental responsibility (HSE).',
      borderBottom: 'border-b-[#385BAB]',
      icon: <HeartHandshake className="w-5 h-5 text-[#385BAB]" />,
    },
    {
      title: 'Teamwork',
      desc: 'To achieve long-term success, we foster a spirit of teamwork by leveraging the combined expertise, dedication, and commitment of our field engineers, building collective pride across every power installation.',
      borderBottom: 'border-b-[#D97706]',
      icon: <Users className="w-5 h-5 text-[#D97706]" />,
    },
    {
      title: 'Commitment',
      desc: 'Our commitment is to remain accountable to our stakeholders while delivering innovative and cost-effective power solutions. We continuously strive to meet evolving needs with rapid turnaround and turnkey excellence.',
      borderBottom: 'border-b-[#D32F2F]',
      icon: <CheckCircle2 className="w-5 h-5 text-[#D32F2F]" />,
    },
  ];

  return (
    <section className="bg-[#F8F9FF] py-16 lg:py-20 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-16">
        {/* Vision & Mission 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Our Vision */}
          <div className="bg-white rounded-lg p-8 sm:p-10 shadow-xs border-t-4 border-[#00163D] space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-[2px] bg-[#00163D]/10 flex items-center justify-center">
                <Eye className="w-6 h-6 text-[#00163D]" />
              </div>

              <h3 className="font-rubik font-bold text-2xl text-[#00163D]">
                Our Vision
              </h3>

              <p className="font-karla text-sm sm:text-base text-[#44464F] leading-relaxed">
                As one of the Top Generator Companies in Hyderabad, our vision is to emerge as the leading provider of reliable and innovative power solutions across the nation. We are committed to ensuring that our product performance consistently meets and exceeds customer expectations.
              </p>

              <p className="font-karla text-xs sm:text-sm text-[#44464F] leading-relaxed">
                We strive to build strong business relationships with the best domestic and Asian brands of Diesel Generator (DG) sets, delivering quality and dependable power backup solutions while creating long-term value and growth in the captive power sector for all our stakeholders.
              </p>
            </div>
          </div>

          {/* Card 2: Our Mission */}
          <div className="bg-white rounded-lg p-8 sm:p-10 shadow-xs border-t-4 border-[#385BAB] space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-[2px] bg-[#385BAB]/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-[#385BAB]" />
              </div>

              <h3 className="font-rubik font-bold text-2xl text-[#00163D]">
                Our Mission
              </h3>

              <p className="font-karla text-sm sm:text-base text-[#44464F] leading-relaxed">
                Through our in-house team of factory-trained service engineers and technicians, we provide the most economical power solutions by adapting global standards, and to create a safe environment that enhances the quality of life, to all our stakeholders.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-[#D32F2F]">
              <span className="w-2 h-2 rounded-full bg-[#D32F2F]" />
              <span className="font-karla font-bold text-xs uppercase tracking-wider">
                ZERO UNPLANNED OUTAGES, ON-EQUIPMENT SAFETY &amp; TOTAL COMPLIANCE
              </span>
            </div>
          </div>
        </div>

        {/* Core Values 4-Card Matrix */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#385BAB]">
              FOUNDATIONAL PILLARS
            </span>
            <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-[36px] text-[#00163D] tracking-tight">
              Our Core Values
            </h2>
            <p className="font-karla text-sm sm:text-base text-[#44464F]">
              The engineering ethos and client-first principles guiding our operations 24 hours a day, 365 days a year.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-[2px] p-6 shadow-xs border-b-2 ${val.borderBottom} space-y-3 flex flex-col justify-between`}
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-[2px] bg-[#E5EEFF] flex items-center justify-center">
                    {val.icon}
                  </div>
                  <h4 className="font-rubik font-bold text-lg sm:text-xl text-[#00163D]">
                    {val.title}
                  </h4>
                  <p className="font-karla text-xs sm:text-sm text-[#44464F] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
