import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Clock, MessageSquare, Check, Globe } from 'lucide-react';
import { APP_CONFIG } from '../../core/config';
import type { PageId } from '../../types';

interface FooterProps {
  onNavigate?: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const oemEngines = [
    'Cummins', 'Kirloskar KOEL', 'Caterpillar CAT', 'Mahindra Powerol', 'Eicher Engines', 'Tata Motors', 'Ashok Leyland',
    'Perkins', 'Volvo Penta', 'Baudouin', 'Scania',
  ];

  return (
    <footer className="bg-[#00163D] text-white pt-14 pb-8 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-10 border-b border-white/10">
          {/* Col 1: Brand & Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-7 bg-[#D32F2F] rounded-[2px]" />
              <span className="font-rubik font-bold text-xl uppercase tracking-tight text-white">
                M.R GENERATORS
              </span>
            </div>

            <p className="font-karla text-xs sm:text-sm text-[#DFE9FB] leading-relaxed">
              Hyderabad's premier diesel power engineering authority. Delivering industrial genset sales, factory-certified maintenance, genuine OEM spares, and uninterrupted emergency backup power infrastructure across Telangana and Andhra Pradesh.
            </p>

            {/* Greaves Box */}
            <div className="p-3 bg-[#131D3B] rounded-[2px] border border-white/10 space-y-1">
              <div className="flex items-center gap-1.5 text-[#D97706] text-[11px] font-karla font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>Authorised Greaves Dealership</span>
              </div>
              <p className="font-karla font-bold text-xs text-white">
                Greaves Power Diesel Generators
              </p>
              <p className="font-karla text-[10px] text-[#C4C6D0]">
                Industrial kVA Ready &bull; ISO 9001:2015 Certified
              </p>
            </div>

            {/* Fast Connect */}
            <div className="space-y-1.5 pt-1">
              <span className="block font-karla font-bold text-[10px] uppercase tracking-wider text-[#C4C6D0]">
                CONNECT WITH US
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/91${APP_CONFIG.phonePrimary}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-[2px] bg-[#131D3B] hover:bg-[#1C2C54] text-[#DFE9FB] flex items-center justify-center transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#contact"
                  className="w-8 h-8 rounded-[2px] bg-[#131D3B] hover:bg-[#1C2C54] text-[#DFE9FB] flex items-center justify-center transition-colors text-xs font-bold"
                  aria-label="Portal"
                >
                  <Globe className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-rubik font-semibold text-lg uppercase tracking-tight text-white">
              QUICK LINKS
            </h4>
            <ul className="space-y-1.5 font-karla text-xs sm:text-sm text-[#DFE9FB]">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'products', label: 'Sales & Products' },
                { id: 'mahindra', label: 'Mahindra Powerol DG Sets' },
                { id: 'leypower', label: 'Ashok Leyland LEYPOWER' },
                { id: 'cummins', label: 'Cummins Diesel Generators' },
                { id: 'tata', label: 'Tata Diesel Generators' },
                { id: 'kirloskar', label: 'Kirloskar KOEL Green' },
                { id: 'caterpillar', label: 'Caterpillar (CAT®) DG Sets' },
                { id: 'portable', label: 'Mobile & Portable (1 - 125 kVA)' },
                { id: 'eicher', label: 'Eicher Diesel Generators' },
                { id: 'services', label: 'Services & Maintenance' },
                { id: 'amc', label: 'Generator AMC Services' },
                { id: 'spares', label: 'Spares & Accessories' },
                { id: 'rentals', label: 'Generator Rentals' },
                { id: 'clients', label: 'Enterprise Client Portfolio' },
                { id: 'blog', label: 'Blog & Power Insights' },
                { id: 'quote', label: 'Commercial Quotation Portal' },
                { id: 'contact', label: 'Contact Us' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate?.(item.id as PageId)}
                    className="hover:text-white transition-colors cursor-pointer text-left text-[#DFE9FB]"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: OEM Engine Platforms */}
          <div className="space-y-4">
            <h4 className="font-rubik font-semibold text-lg uppercase tracking-tight text-white">
              OEM ENGINE PLATFORMS
            </h4>
            <p className="font-karla text-xs text-[#C4C6D0]">
              Supported heavy-duty powertrain manufacturers:
            </p>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 font-karla text-xs text-[#DFE9FB]">
              {oemEngines.map((eng, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <Check className="w-3 h-3 text-[#D97706] shrink-0" />
                  <span>{eng}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4: Branch HQ & Depot */}
          <div className="space-y-4">
            <h4 className="font-rubik font-semibold text-lg uppercase tracking-tight text-white">
              BRANCH HQ &amp; DEPOT
            </h4>
            <div className="space-y-3 font-karla text-xs sm:text-sm text-[#DFE9FB]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-bold">Central Office &amp; Depot</strong>
                  <span>{APP_CONFIG.address.full}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D32F2F] shrink-0" />
                <a href={`tel:${APP_CONFIG.phonePrimary}`} className="text-[#D32F2F] font-bold hover:underline">
                  +91 {APP_CONFIG.phonePrimary}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D97706] shrink-0" />
                <a href={`mailto:${APP_CONFIG.email}`} className="hover:text-white">
                  {APP_CONFIG.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D97706] shrink-0" />
                <span>24/7 Field Crews &amp; Dispatch Yard</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-karla text-xs text-[#C4C6D0]">
          <p>
            &copy; 2026 {APP_CONFIG.companyName}. All Rights Reserved. ISO 9001:2015 Certified Operations.
          </p>
          <div className="flex items-center gap-4 text-[#C4C6D0]">
            <a href="#contact" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>&bull;</span>
            <a href="#contact" className="hover:text-white transition-colors">Service SLA Terms</a>
            <span>&bull;</span>
            <a href="#contact" className="hover:text-white transition-colors">Site Directory</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
