import React from 'react';
import { Calendar, Clock, CheckCircle2, Building, ShieldAlert, ArrowRight } from 'lucide-react';
import { RENTAL_PACKAGES, type RentalPackage } from './rentalsData';

interface RentalPackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export const RentalPackages: React.FC<RentalPackagesProps> = ({
  onSelectPackage,
}) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'emergency-event':
        return <ShieldAlert className="w-5 h-5 text-red-600" />;
      case 'short-term':
        return <Clock className="w-5 h-5 text-sky-600" />;
      case 'long-term':
        return <Building className="w-5 h-5 text-amber-600" />;
      default:
        return <Calendar className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-[#F8F9FF] select-none" id="rental-packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="font-rubik font-bold text-xs uppercase tracking-wider text-[#385BAB] block">
            OPERATIONAL RENTAL TIERS
          </span>
          <h2 className="font-rubik font-bold text-2xl sm:text-3xl text-[#00163D] tracking-tight">
            TAILORED RENTAL PACKAGES FOR EVERY OPERATIONAL NEED
          </h2>
          <p className="font-karla text-sm text-slate-600 leading-relaxed">
            Whether you need temporary backup for special events or long-term industrial hire, our flexible contract terms ensure continuous power uninterrupted.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RENTAL_PACKAGES.map((pkg: RentalPackage) => (
            <div
              key={pkg.id}
              className={`bg-white rounded-2xl p-6 border transition-all flex flex-col justify-between relative shadow-2xs hover:shadow-md ${
                pkg.badge
                  ? 'border-[#00163D] ring-2 ring-[#00163D]/10'
                  : 'border-slate-200'
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3 right-6 bg-[#D97706] text-white px-2.5 py-0.5 rounded-full text-[10px] font-rubik font-bold uppercase tracking-wider shadow-xs">
                  {pkg.badge}
                </div>
              )}

              <div className="space-y-4">
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                  {getIcon(pkg.id)}
                </div>

                <div className="space-y-1">
                  <h3 className="font-rubik font-bold text-lg text-[#00163D] leading-tight">
                    {pkg.name}
                  </h3>
                  <span className="inline-block px-2.5 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px] font-rubik font-semibold uppercase">
                    {pkg.duration}
                  </span>
                </div>

                <p className="font-karla text-xs text-slate-600 leading-relaxed">
                  {pkg.description}
                </p>

                <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs font-karla text-slate-700">
                  {pkg.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-tight">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`w-full h-11 rounded-lg font-rubik font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs ${
                    pkg.badge
                      ? 'bg-[#00163D] hover:bg-[#0F2B5C] text-white'
                      : 'bg-[#EFF4FF] hover:bg-[#00163D] text-[#00163D] hover:text-white'
                  }`}
                >
                  <span>{pkg.buttonLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
