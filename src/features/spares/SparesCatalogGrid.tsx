import React, { useState, useMemo } from 'react';
import { Search, CheckCircle2 } from 'lucide-react';
import { SPARES_CATEGORIES } from './sparesData';

interface SparesCatalogGridProps {
  onRequestPart: (categoryTitle: string) => void;
}

export const SparesCatalogGrid: React.FC<SparesCatalogGridProps> = ({
  onRequestPart,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredCategories = useMemo(() => {
    return SPARES_CATEGORIES.filter((cat) => {
      const matchesSearch =
        searchTerm.trim() === '' ||
        cat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cat.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cat.bulletPoints.some((p) => p.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesTab =
        activeTab === 'all' ||
        (activeTab === 'engine' && ['filtration', 'cooling', 'fuel-injection', 'overhaul-kits'].includes(cat.id)) ||
        (activeTab === 'electrical' && ['electrical-avr', 'amf-controllers', 'starting-battery'].includes(cat.id)) ||
        (activeTab === 'hardware' && ['canopy-exhaust'].includes(cat.id));

      return matchesSearch && matchesTab;
    });
  }, [searchTerm, activeTab]);

  return (
    <section className="py-12 sm:py-16 bg-[#F8F9FF] select-none" id="spares-catalog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-slate-200">
          <div className="space-y-1.5 max-w-3xl">
            <span className="font-rubik font-bold text-xs uppercase tracking-wider text-[#DC2626] block">
              COMPREHENSIVE SPARES CATALOG &amp; COMPONENT TILES
            </span>
            <h2 className="font-rubik font-bold text-2xl sm:text-3xl text-[#00163D] tracking-tight">
              GENUINE DG COMPONENTS &amp; ASSEMBLY SYSTEMS
            </h2>
            <p className="font-karla text-sm text-slate-600 leading-relaxed">
              From preventative routine service filters to complete engine overhaul rebuild kits, we stock verified OEM components for all major licensing brands in south Telangana.
            </p>
          </div>

          {/* Quick Search & Filter */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search spares & kits..."
                className="w-full bg-white border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#00163D] font-karla shadow-2xs"
              />
            </div>
            <div className="flex items-center gap-1.5 bg-slate-200/60 p-1 rounded-lg w-full sm:w-auto">
              {[
                { id: 'all', label: 'ALL' },
                { id: 'engine', label: 'ENGINE' },
                { id: 'electrical', label: 'ELECTRICAL' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 sm:flex-none px-3 py-1 rounded text-xs font-rubik font-bold uppercase transition-colors ${
                    activeTab === tab.id
                      ? 'bg-[#00163D] text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 8 Component Cards Grid (4x2 on Large Screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs hover:shadow-md hover:border-[#00163D]/30 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Photo Thumbnail */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="font-rubik font-bold text-base text-[#00163D] leading-snug group-hover:text-[#DC2626] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-karla text-xs text-slate-600 leading-relaxed">
                    {item.subtitle}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-1.5 pt-2 border-t border-slate-100 text-xs font-karla text-slate-700">
                    {item.bulletPoints.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-tight">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  type="button"
                  onClick={() => onRequestPart(item.title)}
                  className="w-full h-10 rounded-lg bg-[#EFF4FF] hover:bg-[#00163D] text-[#00163D] hover:text-white font-rubik font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>{item.buttonLabel}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
