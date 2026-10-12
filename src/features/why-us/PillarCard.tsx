import React from 'react';

export interface PillarItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface PillarCardProps {
  pillar: PillarItem;
}

export const PillarCard: React.FC<PillarCardProps> = ({ pillar }) => {
  return (
    <div className="bg-white rounded-lg p-5 sm:p-6 shadow-xs border border-slate-100 flex items-start gap-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="w-12 h-12 rounded-[2px] bg-brand-softBlue flex items-center justify-center shrink-0">
        {pillar.icon}
      </div>

      <div className="space-y-1.5">
        <h3 className="font-rubik font-medium text-base sm:text-lg text-navy-950">
          {pillar.title}
        </h3>
        <p className="font-karla text-xs sm:text-sm text-industrial-textMuted leading-relaxed">
          {pillar.description}
        </p>
      </div>
    </div>
  );
};
