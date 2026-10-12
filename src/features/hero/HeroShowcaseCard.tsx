import React from 'react';
import { GeneratorIllustration } from '../../components/ui/GeneratorIllustration';
import { Shield, Sparkles } from 'lucide-react';

interface HeroShowcaseCardProps {
  onOpenQuoteModal: () => void;
}

export const HeroShowcaseCard: React.FC<HeroShowcaseCardProps> = ({
  onOpenQuoteModal,
}) => {
  return (
    <div className="w-full max-w-lg lg:max-w-none bg-navy-850 border border-white/10 rounded-lg p-4 sm:p-5 shadow-2xl relative overflow-hidden backdrop-blur-sm group">
      {/* Decorative gradient corner */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lightBlue/10 rounded-full blur-2xl pointer-events-none" />

      {/* Generator Visual Display Container */}
      <div className="relative w-full h-56 sm:h-64 rounded-md overflow-hidden bg-navy-950 border border-white/10 flex items-center justify-center">
        <GeneratorIllustration model="hero" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="px-2.5 py-1 bg-navy-950/90 border border-white/20 text-white font-karla font-bold text-[11px] uppercase tracking-wider rounded-[2px] backdrop-blur-sm">
            GREAVES POWER
          </span>
          <span className="px-2.5 py-1 bg-brand-amber text-navy-950 font-karla font-bold text-[11px] uppercase tracking-wider rounded-[2px] shadow-sm flex items-center gap-1">
            <Sparkles className="w-3 h-3 fill-current" />
            CPCB IV+
          </span>
        </div>

        {/* Gradient Overlay at Bottom */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent p-3 sm:p-4 flex items-end justify-between">
          <div>
            <p className="font-karla font-bold text-xs uppercase tracking-wider text-brand-amber">
              Featured Standby Unit
            </p>
            <h3 className="font-rubik font-bold text-lg sm:text-xl text-white">
              Greaves Power 82.5 kVA
            </h3>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="px-3 py-1.5 bg-brand-blue hover:bg-blue-600 text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] transition-colors"
          >
            Inquire
          </button>
        </div>
      </div>

      {/* Mini Spec Ribbon (3 Specs) */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4">
        <div className="bg-navy-950/70 border border-white/10 rounded-[2px] p-2.5 text-center flex flex-col justify-center">
          <span className="font-karla text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-brand-softBlue">
            Emission
          </span>
          <span className="font-rubik font-bold text-sm sm:text-base text-white mt-0.5">
            CPCB IV+
          </span>
        </div>

        <div className="bg-navy-950/70 border border-white/10 rounded-[2px] p-2.5 text-center flex flex-col justify-center">
          <span className="font-karla text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-brand-softBlue">
            Range
          </span>
          <span className="font-rubik font-bold text-sm sm:text-base text-white mt-0.5">
            5 - 2000 kVA
          </span>
        </div>

        <div className="bg-navy-950/70 border border-white/10 rounded-[2px] p-2.5 text-center flex flex-col justify-center">
          <span className="font-karla text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-brand-softBlue">
            Support
          </span>
          <span className="font-rubik font-bold text-sm sm:text-base text-brand-amber mt-0.5">
            24/7 365
          </span>
        </div>
      </div>

      {/* OEM Warranty Guarantee Footer */}
      <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-karla text-brand-softBlue/80">
        <div className="flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-brand-amber" />
          <span>Manufacturer Warranty Guarantee</span>
        </div>
        <span className="text-white font-bold">100% Genuine</span>
      </div>
    </div>
  );
};
