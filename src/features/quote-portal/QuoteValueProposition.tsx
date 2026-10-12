import React from 'react';
import { FileText, Truck, Award, ShieldCheck } from 'lucide-react';

export const QuoteValueProposition: React.FC = () => {
  const cards = [
    {
      title: '100% Transparent Proforma',
      description:
        'Full Bill-of-Materials transparency. Exhaust, cabling, freight, and AMF costs itemized with zero surprise post-install variations.',
      icon: <FileText className="w-6 h-6 text-[#385BAB]" />,
    },
    {
      title: 'Immediate Central Dispatch',
      description:
        'Over 150 ready-to-crank silent DG sets in stock at our Sanathnagar depot. Fast transit to Hyderabad, Warangal, and Vijayawada corridors.',
      icon: <Truck className="w-6 h-6 text-amber-500" />,
    },
    {
      title: 'OEM-Certified Engineers',
      description:
        'Factory-certified technicians trained by Cummins, Tata, Kirloskar, and Mahindra. Full CEIG compliance & acoustic enclosure certification.',
      icon: <Award className="w-6 h-6 text-[#00163D]" />,
    },
    {
      title: 'Genuine Spares Guarantee',
      description:
        'Every quote includes genuine OEM filters, AVRs, starters, and gaskets with complete serial traceability and manufacturer warranty coverage.',
      icon: <ShieldCheck className="w-6 h-6 text-red-600" />,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#EFF4FF] border-t border-slate-200 select-none" id="why-procure">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="font-rubik text-xs uppercase tracking-wider text-[#385BAB] font-bold block">
            GUARANTEED ENGINEERING STANDARDS
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] uppercase leading-tight">
            Why Procure Through M.R Generators?
          </h2>
          <p className="font-karla text-sm text-slate-600 leading-relaxed">
            Serving over 1,200 industrial plants, hospitals, infrastructure projects, and corporate complexes across Telangana &amp; AP with unmatched uptime discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-2xs hover:shadow-md transition-shadow space-y-3 border border-slate-200/80 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#F8F9FF] border border-slate-200 flex items-center justify-center">
                  {c.icon}
                </div>
                <h3 className="font-rubik font-bold text-base text-[#00163D] uppercase leading-tight">
                  {c.title}
                </h3>
                <p className="font-karla text-xs text-slate-600 leading-relaxed">
                  {c.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
