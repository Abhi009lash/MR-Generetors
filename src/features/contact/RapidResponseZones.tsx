import React from 'react';
import { MapPin, Clock, Zap } from 'lucide-react';

interface ZoneData {
  id: string;
  zoneCode: string;
  sla: string;
  title: string;
  description: string;
  localities: string[];
  fleet: string;
}

const ZONES: ZoneData[] = [
  {
    id: 'zone-01',
    zoneCode: 'ZONE 01',
    sla: '45-60 MIN',
    title: 'IT & CYBER CORRIDORS',
    description: 'High-density datacentres, commercial campuses, and media hubs.',
    localities: ['HITEC City & Madhapur', 'Gachibowli & Financial Dist', 'Kondapur & Nanakramguda'],
    fleet: '250 kVA - 2000 kVA Synchronised',
  },
  {
    id: 'zone-02',
    zoneCode: 'ZONE 02',
    sla: '60-90 MIN',
    title: 'MANUFACTURING BELTS',
    description: 'Continuous energy machinery, fabrication, pharma plants & breweries.',
    localities: ['Balanagar & Jeedimetla', 'Sanath Nagar & Kukatpally', 'Patancheru & Pashamylaram'],
    fleet: '125 kVA - 1500 kVA Continuous Prime',
  },
  {
    id: 'zone-03',
    zoneCode: 'ZONE 03',
    sla: '30-45 MIN',
    title: 'COMMERCIAL & HOSPITALS',
    description: 'Multi-speciality healthcare, hospitality chains, and residential high-rises.',
    localities: ['Banjara Hills & Jubilee Hills', 'Begumpet & Somajiguda', 'Secunderabad & Marredpally'],
    fleet: '15 kVA - 500 kVA Acoustic CPCB IV+',
  },
  {
    id: 'zone-04',
    zoneCode: 'ZONE 04',
    sla: '60-90 MIN',
    title: 'LOGISTICS & AEROSPACE',
    description: 'Cold storages, distribution hubs, airport zone & defense parks.',
    localities: ['Shamshabad RGI Airport Hub', 'Adibatla Aerospace Corridor', 'Medchal & Kompally Warehouses'],
    fleet: 'Heavy High kVA Multi-MegaWatt',
  },
];

export const RapidResponseZones: React.FC = () => {
  return (
    <section className="bg-[#EFF4FF] py-14 border-y border-[#D6E4FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="font-karla font-bold text-xs uppercase tracking-wider text-[#385BAB]">
              CITY-WIDE ENGINEERING GRID
            </span>
            <h2 className="font-rubik font-bold text-2xl sm:text-3xl text-[#00163D] uppercase tracking-tight">
              HYDERABAD RAPID RESPONSE ZONES (UNDER 2-HOUR SLA)
            </h2>
          </div>
          <p className="font-karla text-xs sm:text-sm text-slate-600 max-w-md">
            Our mobile fleet vans remain stationed at strategic nodal intersections across Hyderabad to deliver fast, guaranteed response times.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ZONES.map((zone) => (
            <div
              key={zone.id}
              className="bg-white rounded-[2px] border border-slate-200 p-5 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#385BAB] transition-colors"
            >
              <div className="space-y-3">
                {/* Zone Code + SLA Badge */}
                <div className="flex items-center justify-between">
                  <span className="font-karla font-bold text-xs uppercase tracking-wider text-slate-500">
                    {zone.zoneCode}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-50 text-[#D32F2F] border border-red-200 font-mono font-bold text-[11px] rounded-[2px]">
                    <Clock className="w-3 h-3" />
                    <span>{zone.sla}</span>
                  </span>
                </div>

                <h3 className="font-rubik font-bold text-base text-[#00163D] uppercase tracking-tight">
                  {zone.title}
                </h3>

                <p className="font-karla text-xs text-slate-600 leading-relaxed">
                  {zone.description}
                </p>

                {/* Localities list */}
                <div className="space-y-1.5 pt-1">
                  {zone.localities.map((loc, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-karla text-slate-700">
                      <MapPin className="w-3.5 h-3.5 text-[#385BAB] shrink-0" />
                      <span>{loc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fleet Deployment tag */}
              <div className="pt-3 border-t border-slate-100">
                <div className="flex items-start gap-1.5 text-[11px] font-karla text-slate-600">
                  <Zap className="w-3.5 h-3.5 text-[#D97706] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-slate-700 uppercase">Fleet Deployment</span>
                    <span className="text-slate-600 font-medium">{zone.fleet}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
