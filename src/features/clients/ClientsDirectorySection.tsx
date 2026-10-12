import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import {
  CLIENT_ITEMS,
  SECTOR_FILTERS,
  INSTITUTIONAL_PARTNERS,
  type ClientSector,
  type InstitutionalPartnerItem,
} from './clientsData';
import { ClientCardItem } from './ClientCardItem';

export const ClientsDirectorySection: React.FC = () => {
  const [activeSector, setActiveSector] = useState<ClientSector>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredClients = useMemo(() => {
    return CLIENT_ITEMS.filter((client) => {
      const matchesSector = activeSector === 'all' || client.sector === activeSector;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        client.name.toLowerCase().includes(q) ||
        client.capacityKva.toLowerCase().includes(q) ||
        client.location.toLowerCase().includes(q) ||
        client.keywords.toLowerCase().includes(q) ||
        client.sectorLabel.toLowerCase().includes(q);
      return matchesSector && matchesSearch;
    });
  }, [activeSector, searchQuery]);

  const renderBadgeColor = (colorScheme: InstitutionalPartnerItem['colorScheme']) => {
    switch (colorScheme) {
      case 'secondary':
        return 'bg-[#385BAB] text-white';
      case 'hazard':
        return 'bg-[#D32F2F] text-white';
      case 'container':
        return 'bg-[#0F2B5C] text-[#88A9FE]';
      case 'amber':
        return 'bg-[#D97706] text-white';
      default:
        return 'bg-[#00163D] text-white';
    }
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-12 bg-[#F8F9FF] select-none" id="client-directory">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Section Intro & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-karla text-xs font-bold uppercase tracking-wider text-[#385BAB] block">
              Client Verification Roster
            </span>
            <h2 className="font-rubik font-bold text-2xl sm:text-3xl lg:text-4xl text-[#00163D] tracking-tight mt-1">
              Institutional &amp; Industrial Partners
            </h2>
            <p className="font-karla text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
              Filter our operational turnkey client portfolio across specialized engineering segments, critical standby power capacities, and automated emergency setups.
            </p>
          </div>

          {/* Live Search Box */}
          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 absolute left-3 top-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search client name or rating..."
              className="w-full pl-9 pr-4 py-2.5 bg-white text-slate-800 text-sm font-karla rounded-[4px] border border-slate-200 shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#385BAB] transition-all"
            />
          </div>
        </div>

        {/* Sector Filter Tabs */}
        <div className="flex flex-wrap gap-2 pb-2">
          {SECTOR_FILTERS.map((filter) => {
            const isActive = activeSector === filter.key;
            return (
              <button
                key={filter.key}
                type="button"
                onClick={() => setActiveSector(filter.key)}
                className={`px-4 py-2 rounded-[4px] font-karla font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#00163D] text-white shadow-sm'
                    : 'bg-[#DFE9FB] text-slate-700 hover:bg-[#D9E3F5] hover:text-[#00163D]'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Verified Clients Grid */}
        {filteredClients.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClients.map((client) => (
              <ClientCardItem key={client.id} client={client} />
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 text-center rounded border border-slate-200">
            <p className="font-rubik text-base text-[#00163D] font-bold">No clients found matching your query</p>
            <p className="font-karla text-sm text-slate-500 mt-1">Try clearing the search or choosing another sector filter.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveSector('all');
              }}
              className="mt-4 px-4 py-2 bg-[#00163D] text-white text-xs font-bold font-karla rounded uppercase"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Extended Institutional Client Badge Cloud */}
        <div className="mt-8 bg-[#EFF4FF] rounded-lg p-6 sm:p-8 flex flex-col gap-6 border border-slate-200/60">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-rubik font-bold text-lg text-[#00163D]">
                Additional Institutional &amp; Builder Partners
              </h4>
              <p className="font-karla text-xs text-slate-500 mt-0.5">
                A small snapshot from our 1,650+ operational fleet and service contracts portfolio
              </p>
            </div>
            <span className="font-karla text-xs font-bold text-[#385BAB] uppercase tracking-wider bg-white px-3 py-1.5 rounded-[4px] border border-slate-200 self-start sm:self-auto shadow-2xs">
              All Verified Clients Under AMC / Active Purchase
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {INSTITUTIONAL_PARTNERS.map((partner) => (
              <div
                key={partner.code}
                className="flex items-center gap-2.5 px-3.5 py-2 bg-white rounded-[4px] shadow-2xs border border-slate-200 hover:border-[#385BAB] transition-all"
              >
                <div
                  className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold font-rubik ${renderBadgeColor(
                    partner.colorScheme
                  )}`}
                >
                  {partner.code}
                </div>
                <span className="text-slate-800 text-xs font-karla font-bold">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
