import React from 'react';
import { CircularHubDiagram } from './CircularHubDiagram';
import { ShieldCheck, Clock, FileDown, ArrowRight } from 'lucide-react';
import { Button } from '../../components/ui/Button';

interface CorporateProfileProps {
  onOpenBrochureModal: () => void;
  onOpenQuoteModal: () => void;
}

export const CorporateProfile: React.FC<CorporateProfileProps> = ({
  onOpenBrochureModal,
  onOpenQuoteModal,
}) => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-surface-light border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Ecosystem Hub */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <CircularHubDiagram />
          </div>

          {/* Right Corporate Text Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-[2px] bg-brand-blue" />
              <span className="font-karla font-bold text-xs uppercase tracking-[1.2px] text-brand-blue">
                About M.R Generators
              </span>
            </div>

            <h2 className="font-rubik font-semibold text-2xl sm:text-3xl lg:text-4xl text-navy-950 tracking-tight leading-tight">
              Over a Decade of Engineering Trust in Diesel Standby Power
            </h2>

            <p className="font-karla text-sm sm:text-base text-industrial-textMuted leading-relaxed">
              Electric power is an integral part of our lives. When there is a disruption in the power supply, we either wait for restoration or depend on a reliable backup source. A generator produces electrical energy and serves as an essential power backup solution for institutions, offices, commercial establishments, factories, and marine vessels. Generators of various capacities ensure uninterrupted operations across industries.
            </p>

            <p className="font-karla text-sm sm:text-base text-industrial-textDark leading-relaxed">
              Recognized as one of the leading Best Diesel Generator Sales &amp; Suppliers in Hyderabad, M.R Generators was established in 2014 to meet the growing demand for continuous and dependable power solutions. Based in Hyderabad, the company has remained a frontrunner for over 10 years in the sales and services of standby Diesel Generator (DG) sets, offering capacities ranging from 5 KVA to 2000 KVA to suit diverse power requirements.
            </p>

            {/* 2 Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-[4px] border border-slate-100 shadow-xs flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-[2px] bg-blue-50 flex items-center justify-center text-brand-blue shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-rubik font-medium text-sm text-navy-950">
                    Certified OEM Spares
                  </h4>
                  <p className="font-karla text-xs text-industrial-textMuted mt-1">
                    100% genuine engine filters, lubricants, and electronic controllers.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-[4px] border border-slate-100 shadow-xs flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-[2px] bg-red-50 flex items-center justify-center text-brand-red shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-rubik font-medium text-sm text-navy-950">
                    Rapid Emergency Response
                  </h4>
                  <p className="font-karla text-xs text-industrial-textMuted mt-1">
                    Rapid-response breakdown teams mobilized 24/7 across Hyderabad industrial zones.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={onOpenBrochureModal}
                leftIcon={<FileDown className="w-4 h-4" />}
              >
                Download Corporate Brochure
              </Button>

              <Button
                variant="outline"
                size="md"
                onClick={onOpenQuoteModal}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Request Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
