import React from 'react';
import { MapPin, Phone, Truck, Clock } from 'lucide-react';
import { APP_CONFIG } from '../../core/config';

interface AmcRapidFleetSectionProps {
  onDispatchClick: () => void;
}

const SERVICE_ZONES = [
  'HITEC City',
  'Gachibowli',
  'Kondapur',
  'Madhapur',
  'Patancheru',
  'Jeedimetla',
  'Cherlapally',
  'Katedan',
  'Shamshabad',
  'Medchal',
  'Uppal',
  'Bowenpally',
];

export const AmcRapidFleetSection: React.FC<AmcRapidFleetSectionProps> = ({
  onDispatchClick,
}) => {
  return (
    <section className="py-12 sm:py-16 bg-[#F8F9FF] border-t border-slate-200 select-none" id="amc-fleet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Fleet Specs & Address */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="font-rubik font-bold text-xs uppercase tracking-wider text-[#385BAB] block">
                24/7 RAPID MOBILIZATION ACROSS TELANGANA
              </span>
              <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] tracking-tight">
                Rapid Response Fleet Across Hyderabad &amp; Telangana
              </h2>
              <p className="font-karla text-sm text-slate-600 leading-relaxed">
                Our fleet of fully equipped mobile service vans carry diagnostic tools, emergency consumables, battery jump-start units, and critical OEM spares for immediate on-site breakdown resolution.
              </p>
            </div>

            <div className="space-y-3 font-karla text-xs text-slate-700">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-semibold uppercase text-[11px]">
                    Main Hyderabad Service Headquarters:
                  </strong>
                  Plot No. 8-3-191/10/A, Vengal Rao Nagar, Behind Mythrivanam, SR Nagar, Hyderabad - 500038
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <strong className="text-slate-900 font-semibold uppercase text-[11px]">
                    Operational Service Coverage (Within 30-90 Mins):
                  </strong>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {SERVICE_ZONES.map((zone) => (
                    <span
                      key={zone}
                      className="px-2 py-0.5 bg-[#EFF4FF] text-[#00163D] rounded text-[11px] font-karla font-semibold border border-slate-200/60"
                    >
                      {zone}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onDispatchClick}
                className="h-12 px-6 bg-[#00163D] hover:bg-[#0F2B5C] text-white font-rubik font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 cursor-pointer"
              >
                <Truck className="w-4 h-4 text-amber-400" />
                <span>DISPATCH SERVICE TECHNICIAN</span>
              </button>

              <a
                href={`tel:${APP_CONFIG.phonePrimary}`}
                className="h-12 px-6 bg-white hover:bg-slate-50 border border-slate-300 text-[#00163D] font-rubik font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-all shadow-2xs active:scale-98"
              >
                <Phone className="w-4 h-4 text-[#DC2626]" />
                <span>24/7 DG CARE: +91 {APP_CONFIG.phonePrimary}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Stylized Hyderabad Depot & Hub Coverage Map */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md">
              <div className="p-4 bg-[#00163D] text-white flex items-center justify-between">
                <div>
                  <h4 className="font-rubik font-bold text-xs uppercase tracking-wider">
                    Hyderabad Service Depot
                  </h4>
                  <p className="font-karla text-[11px] text-slate-300">
                    Central Service Yard &amp; Rapid Fleet Base
                  </p>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-rubik font-bold bg-emerald-500 text-white uppercase">
                  Active
                </span>
              </div>

              {/* Graphical Hyderabad Map Canvas */}
              <div className="relative h-64 sm:h-72 bg-gradient-to-br from-slate-100 to-slate-200 p-4 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#00163D_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Simulated Geographic Zone Tags */}
                <div className="relative z-10 flex justify-between text-[11px] font-karla font-semibold text-slate-500">
                  <span className="bg-white/90 px-2 py-0.5 rounded shadow-2xs">Medchal / Jeedimetla</span>
                  <span className="bg-white/90 px-2 py-0.5 rounded shadow-2xs">Secunderabad / Uppal</span>
                </div>

                {/* Central Pin */}
                <div className="relative z-10 mx-auto my-auto text-center space-y-1">
                  <div className="relative inline-block">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                    <div className="relative w-12 h-12 rounded-full bg-[#DC2626] text-white flex items-center justify-center shadow-lg mx-auto">
                      <MapPin className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="bg-[#00163D] text-white px-3 py-1 rounded-full text-xs font-rubik font-bold shadow-md">
                    SR Nagar Central Hub
                  </div>
                  <span className="block text-[10px] font-karla text-slate-600 font-bold">
                    &lt; 30-min reach to HITEC City &amp; Patancheru
                  </span>
                </div>

                <div className="relative z-10 flex justify-between text-[11px] font-karla font-semibold text-slate-500">
                  <span className="bg-white/90 px-2 py-0.5 rounded shadow-2xs">HITEC City / Gachibowli</span>
                  <span className="bg-white/90 px-2 py-0.5 rounded shadow-2xs">Shamshabad Airport Zone</span>
                </div>
              </div>

              <div className="p-3 bg-slate-50 border-t border-slate-200 text-center font-karla text-xs text-slate-600">
                GPS-tracked mobile vans equipped with 400A jump kits &amp; calibrated diagnostic scanners.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
