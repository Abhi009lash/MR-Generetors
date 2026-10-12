import React from 'react';
import { Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../../components/ui/Button';

interface ProductTurnkeyCardProps {
  onContactLeadEngineer: () => void;
}

export const ProductTurnkeyCard: React.FC<ProductTurnkeyCardProps> = ({
  onContactLeadEngineer,
}) => {
  const points = [
    'Multi-engine AMF / Synchronizing Panels for Mega Loads',
    'HT/LT Substation, Power Cabling & Transformer Sync',
    'Telangana PCB Approvals & Custom Acoustic Enclosures',
  ];

  return (
    <div className="bg-navy-950 text-white rounded-lg p-6 sm:p-8 shadow-xl flex flex-col justify-between border border-white/10 relative overflow-hidden group">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />

      <div className="space-y-4 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-red rounded-[2px] text-white font-karla font-bold text-xs uppercase tracking-wider">
          <Zap className="w-3.5 h-3.5 fill-current" />
          <span>Custom Industrial Solutions</span>
        </div>

        <h3 className="font-rubik font-semibold text-xl sm:text-2xl text-white leading-snug">
          Custom Turnkey Substation &amp; Synchronized DG Set Systems
        </h3>

        <p className="font-karla text-xs sm:text-sm text-brand-softBlue/90 leading-relaxed">
          We design, install, synchronize, and commission multi-megawatt diesel power systems for pharmaceutical complexes, data campuses, and IT parks across Hyderabad.
        </p>

        {/* Feature Points */}
        <ul className="space-y-3 pt-2">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-softBlue font-karla">
              <CheckCircle2 className="w-4 h-4 text-brand-amber shrink-0 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Button */}
      <div className="pt-6 mt-6 border-t border-white/10 relative z-10">
        <Button
          variant="white"
          fullWidth
          onClick={onContactLeadEngineer}
          rightIcon={<ArrowRight className="w-4 h-4" />}
        >
          Speak to a Lead Engineer
        </Button>
      </div>
    </div>
  );
};
