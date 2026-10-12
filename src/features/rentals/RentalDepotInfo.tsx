import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { APP_CONFIG } from '../../core/config';

const SERVICE_ZONES = [
  'HITEC City',
  'Gachibowli',
  'Kondapur',
  'Madhapur',
  'Jeedimetla',
  'Patancheru',
  'Cherlapally',
  'Shamshabad',
  'Secunderabad',
];

export const RentalDepotInfo: React.FC = () => {
  return (
    <div className="lg:col-span-5 space-y-6">
      <div className="space-y-2">
        <span className="font-rubik font-bold text-xs uppercase tracking-wider text-[#385BAB] block">
          FAST DISPATCH &amp; MOBILIZATION
        </span>
        <h2 className="font-rubik font-bold text-2xl sm:text-3xl text-[#00163D] tracking-tight">
          RENT A GENERATOR IN HYDERABAD TODAY
        </h2>
        <p className="font-karla text-sm text-slate-600 leading-relaxed">
          Connect with our industrial rental desk today for immediate hire, site power load assessments, or emergency dispatch throughout Telangana and Andhra Pradesh.
        </p>
      </div>

      <div className="space-y-3.5 font-karla text-xs text-slate-700">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex items-start gap-3">
          <MapPin className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
          <div>
            <strong className="block text-slate-900 font-semibold uppercase text-[11px]">
              Main Hyderabad Rental Yard:
            </strong>
            Plot No. 8-3-191/10/A, Vengal Rao Nagar, SR Nagar, Hyderabad - 500038
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex items-start gap-3">
          <Phone className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <strong className="block text-slate-900 font-semibold uppercase text-[11px]">
              Direct Rental Dispatch Hotline:
            </strong>
            <a href={`tel:${APP_CONFIG.phonePrimary}`} className="font-bold text-[#00163D] hover:underline">
              +91 {APP_CONFIG.phonePrimary}
            </a>{' '}
            / {APP_CONFIG.phoneLandline}
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex items-start gap-3">
          <Mail className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
          <div>
            <strong className="block text-slate-900 font-semibold uppercase text-[11px]">
              Commercial Email:
            </strong>
            <a href={`mailto:${APP_CONFIG.email}`} className="text-slate-600 hover:underline">
              {APP_CONFIG.email}
            </a>
          </div>
        </div>
      </div>

      {/* Service Zones Chips */}
      <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-2">
        <span className="block font-rubik font-bold text-[11px] uppercase text-slate-600">
          Primary Service Zones (Rapid 2-4 Hr Dispatch):
        </span>
        <div className="flex flex-wrap gap-1.5">
          {SERVICE_ZONES.map((zone) => (
            <span
              key={zone}
              className="px-2 py-0.5 bg-[#EFF4FF] text-[#00163D] rounded text-[10px] font-karla font-semibold"
            >
              {zone}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
