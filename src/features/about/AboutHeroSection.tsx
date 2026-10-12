import React from 'react';
import { PhoneCall, Download, ShieldCheck } from 'lucide-react';
import { APP_CONFIG } from '../../core/config';

interface AboutHeroSectionProps {
  onOpenBrochureModal: () => void;
}

export const AboutHeroSection: React.FC<AboutHeroSectionProps> = ({
  onOpenBrochureModal,
}) => {
  const trustMetrics = [
    { value: '10+', label: 'YEARS IN BUSINESS', color: 'text-white' },
    { value: '1,658+', label: 'ENTERPRISE CLIENTS', color: 'text-[#DAE2FF]' },
    { value: '2,567+', label: 'TURNKEY PROJECTS', color: 'text-white' },
    { value: '25+', label: 'CERTIFIED ENGINEERS', color: 'text-[#DAE2FF]' },
    { value: 'CPCB IV+', label: 'COMPLIANT FLEET', color: 'text-[#D97706]' },
    { value: '24/7', label: 'MOBILE QUICK RESPONSE', color: 'text-[#D32F2F]' },
  ];

  return (
    <section className="relative overflow-hidden bg-[#131D3B] text-white py-16 lg:py-20 select-none">
      {/* Background Gradients from Figma CSS */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1D3F] via-[#131D3B] to-[#00163D] opacity-95 pointer-events-none" />
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-10">
        {/* Main Header Container */}
        <div className="max-w-4xl space-y-5">
          {/* Red Overline Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D32F2F] rounded-[2px] text-white text-xs font-karla font-bold uppercase tracking-wider shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>INDUSTRIAL GRADE STANDBY POWER AUTHORITY</span>
          </div>

          {/* Heading 1 */}
          <h1 className="font-rubik font-bold text-3xl sm:text-4xl lg:text-[48px] leading-[1.16] tracking-[-1.2px] text-white">
            Top Generator Companies in Hyderabad — A Decade of Uncompromised Standby Power
          </h1>

          {/* Subtitle */}
          <p className="font-karla text-base sm:text-lg text-[#DFE9FB] leading-relaxed max-w-3xl font-normal">
            Powering Hyderabad's healthcare corridors, IT corridors, data centres, and manufacturing plants with reliable diesel generator solutions from <strong className="text-white font-bold">5 kVA to 2000 kVA</strong> since 2014.
          </p>

          {/* Quick CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a
              href={`tel:${APP_CONFIG.phonePrimary}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] shadow-md transition-all active:scale-98"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>24/7 HELPLINE: {APP_CONFIG.phonePrimary}</span>
            </a>

            <button
              type="button"
              onClick={onOpenBrochureModal}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#E2E8F0] hover:bg-white text-[#0A1D3F] font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] shadow-sm transition-all active:scale-98 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>25-PAGE CORPORATE PROFILE</span>
            </button>
          </div>
        </div>

        {/* Trust Metrics Bar */}
        <div className="border-t border-white/10 pt-8 mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustMetrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col">
              <span className={`font-rubik font-bold text-3xl sm:text-4xl tracking-tight leading-none ${metric.color}`}>
                {metric.value}
              </span>
              <span className="font-karla font-bold text-[11px] uppercase tracking-[0.72px] text-[#C4C6D0] mt-2">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
