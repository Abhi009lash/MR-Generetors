import React from 'react';
import { ArrowRight, HelpCircle } from 'lucide-react';
import { TATA_CLIENT_LOGOS } from './tataData';

interface TataTrustAndFaqSectionProps {
  onRequestAudit: () => void;
}

export const TataTrustAndFaqSection: React.FC<TataTrustAndFaqSectionProps> = ({
  onRequestAudit,
}) => {
  return (
    <>
      {/* 1. Trust Strip */}
      <section className="bg-[#E5EEFF] py-10 border-b border-[#CCDFFF] select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-6">
          <div className="text-center space-y-1">
            <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#385BAB]">
              PROVEN DEPLOYMENT CREDENTIALS
            </span>
            <h3 className="font-rubik font-bold text-xl text-[#00163D] uppercase tracking-tight">
              TRUSTED ON INFRASTRUCTURE SITES ACROSS TELANGANA
            </h3>
            <p className="font-karla text-xs text-slate-600 max-w-xl mx-auto">
              Over 850+ Tata industrial generators actively operating in commercial &amp; critical infrastructure installations.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {TATA_CLIENT_LOGOS.map((client) => (
              <div
                key={client.name}
                className="bg-white rounded-[2px] p-4 text-center shadow-xs border border-slate-200"
              >
                <span className="font-rubik font-bold text-sm text-[#00163D] block truncate">
                  {client.name}
                </span>
                <span className="font-karla font-bold text-[10px] text-slate-500 uppercase tracking-wider block mt-0.5 truncate">
                  {client.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. FAQ & Site Study Section */}
      <section className="bg-white py-14 lg:py-16 border-b border-slate-200 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left FAQ Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1.5">
                <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#385BAB]">
                  ENGINEERING FREQUENTLY ASKED QUESTIONS
                </span>
                <h3 className="font-rubik font-bold text-2xl sm:text-3xl text-[#00163D] leading-tight">
                  Why Choose Tata Diesel Engines Over Other Compact Alternatives?
                </h3>
              </div>

              <div className="space-y-4">
                <div className="bg-[#F4F6F9] p-5 rounded-[2px] border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#385BAB] shrink-0" />
                    <h4 className="font-rubik font-bold text-base text-[#00163D]">
                      What is the advantage of a 4-cylinder engine in 30-35 kVA?
                    </h4>
                  </div>
                  <p className="font-karla text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                    Many compact generators in this range utilize 2 or 3 cylinder engines which vibrate intensely, run hot, and suffer accelerated wear. Tata's harmonized 4-cylinder engine runs smoother, lasts over 20,000+ hours before overhaul, and handles high inductive startup spikes easily.
                  </p>
                </div>

                <div className="bg-[#F4F6F9] p-5 rounded-[2px] border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#385BAB] shrink-0" />
                    <h4 className="font-rubik font-bold text-base text-[#00163D]">
                      How quickly are spare parts delivered in Telangana &amp; AP?
                    </h4>
                  </div>
                  <p className="font-karla text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                    With more than 500 authorized Tata spares stockists across Hyderabad, Secunderabad, Vijayawada, and Visakhapatnam, consumable items (oil filters, belts, gaskets) are reachable within hours at automotive volume prices.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Fast-Track Site Study Card */}
            <div className="lg:col-span-5 bg-[#0A1D3F] text-white p-7 sm:p-8 rounded-[8px] flex flex-col justify-between space-y-6 shadow-md border border-[#0F2B5C]">
              <div className="space-y-4">
                <span className="inline-block bg-[#D32F2F] text-white font-karla font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-[2px]">
                  HYDERABAD &amp; SECUNDERABAD FAST TRACK
                </span>

                <h4 className="font-rubik font-bold text-xl sm:text-2xl text-white leading-tight">
                  Need an on-site electrical load study conducted in Hyderabad?
                </h4>

                <p className="font-karla text-xs sm:text-sm text-[#D0DBED] leading-relaxed">
                  Our senior service engineers visit your site within 4 hours to verify transformer capacity, calculate motor loads, and draft civil foundation plinth dimensions.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={onRequestAudit}
                  className="w-full py-3.5 bg-[#D32F2F] hover:bg-red-700 text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>REQUEST COMPLIMENTARY SITE AUDIT</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <p className="font-karla font-bold text-[11px] text-[#88A9FE] text-center tracking-wider uppercase">
                  &bull; ZERO COMMITMENT &bull; FREE ENGG REPORT
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
