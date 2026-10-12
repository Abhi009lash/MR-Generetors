import React from 'react';
import { PillarCard } from './PillarCard';
import type { PillarItem } from './PillarCard';
import {
  Wrench,
  Award,
  Users,
  Clock,
  Zap,
  ShieldCheck,
} from 'lucide-react';

const PILLARS_DATA: PillarItem[] = [
  {
    id: 'ready-services',
    title: 'Ready for Services',
    description:
      'Comprehensive service dispatch teams on call 24/7 across Hyderabad and Telangana.',
    icon: <Wrench className="w-5 h-5 text-navy-950" />,
  },
  {
    id: 'authorised-dealer',
    title: 'Authorised Brand Dealership',
    description:
      'Direct manufacturer-backed sales & warranty guarantees on Greaves Power gensets.',
    icon: <Award className="w-5 h-5 text-brand-blue" />,
  },
  {
    id: 'trained-engineers',
    title: 'Factory-Trained Engineers',
    description:
      'Over 10 certified technical and mechanical engineering personnel for swift diagnosis and execution.',
    icon: <Users className="w-5 h-5 text-navy-950" />,
  },
  {
    id: 'emergency-assistance',
    title: '24x7 Emergency Assistance',
    description:
      'Round-the-clock emergency mobile hotline for rapid breakdown dispatch.',
    icon: <Clock className="w-5 h-5 text-brand-amber" />,
  },
  {
    id: 'quick-response',
    title: 'Quick Response & Mobilization',
    description:
      'Fast deployment of standby units and rental sets with onsite technicians.',
    icon: <Zap className="w-5 h-5 text-brand-red" />,
  },
  {
    id: 'genuine-components',
    title: '100% Genuine Components',
    description:
      'Strict use of OEM filters, alternators, controllers, and lubricants for longevity.',
    icon: <ShieldCheck className="w-5 h-5 text-brand-blue" />,
  },
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-us" className="py-16 sm:py-20 lg:py-24 bg-[#DFE9FB] border-b border-slate-200/60 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex px-3 py-1 bg-white rounded-[2px] text-brand-blue font-karla font-bold text-xs uppercase tracking-wider shadow-xs">
              The M.R Generators Advantage
            </div>

            <h2 className="font-rubik font-semibold text-2xl sm:text-3xl lg:text-4xl text-navy-950 tracking-tight leading-tight">
              Why Enterprise Leaders Choose M.R Generators
            </h2>
          </div>

          <p className="font-karla text-xs sm:text-sm text-industrial-textMuted max-w-md md:text-right leading-relaxed">
            Engineering precision, manufacturer certifications, and rapid-dispatch field teams trusted across Telangana.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {PILLARS_DATA.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
};
