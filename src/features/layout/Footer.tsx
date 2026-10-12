import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Clock, MessageSquare, Check } from 'lucide-react';
import { APP_CONFIG } from '../../core/config';

interface FooterProps {
  onNavigate?: (page: 'home' | 'about') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const oemEngines = [
    'Cummins',
    'Kirloskar',
    'Tata Motors',
    'Ashok Leyland',
    'Mahindra',
    'Caterpillar',
    'Perkins',
    'Volvo Penta',
    'Baudouin',
    'Scania',
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

            {/* Social Links */}
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
                  className="w-8 h-8 rounded-[2px] bg-[#131D3B] hover:bg-[#1C2C54] text-[#DFE9FB] flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.4 9.74v-8.37H5.06v8.37h2.8z"/></svg>
                </a>
                <a
                  href="#contact"
                  className="w-8 h-8 rounded-[2px] bg-[#131D3B] hover:bg-[#1C2C54] text-[#DFE9FB] flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/></svg>
                </a>
                <a
                  href="#contact"
                  className="w-8 h-8 rounded-[2px] bg-[#131D3B] hover:bg-[#1C2C54] text-[#DFE9FB] flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a
                  href="#contact"
                  className="w-8 h-8 rounded-[2px] bg-[#131D3B] hover:bg-[#1C2C54] text-[#DFE9FB] flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-rubik font-semibold text-lg uppercase tracking-tight text-white">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 font-karla text-xs sm:text-sm text-[#DFE9FB]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate && onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left font-bold text-white"
                >
                  About Us
                </button>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Sales &amp; Products
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Services &amp; Maintenance
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Comprehensive AMC
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Clients &amp; Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
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
