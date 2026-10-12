import React from 'react';
import { Zap, Phone, Mail, MapPin, ShieldCheck, Clock } from 'lucide-react';
import { APP_CONFIG } from '../../core/config';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-white pt-16 pb-12 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-brand-red flex items-center justify-center font-bold text-white shadow">
                <Zap className="w-4 h-4 fill-current" />
              </div>
              <span className="font-rubik font-bold text-xl text-white tracking-tight">
                M.R GENERATORS
              </span>
            </div>
            <p className="font-karla text-sm text-brand-softBlue/80 leading-relaxed">
              Specialised power backup engineering authority delivering genuine diesel generator sales, authorised Greaves dealership, multi-brand maintenance, and turnkey acoustic installations across Telangana since 2014.
            </p>
            <div className="p-3 bg-navy-900 rounded-[2px] border border-white/10 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-brand-amber shrink-0" />
              <div className="text-xs">
                <p className="font-bold text-white uppercase tracking-wider">
                  Authorised Dealer
                </p>
                <p className="text-slate-300">Greaves Power DG Sets</p>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-rubik font-semibold text-sm uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-lightBlue inline-block" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 font-karla text-sm text-brand-softBlue/80">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About M.R Generators
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Greaves DG Sets (5-2000 kVA)
                </a>
              </li>
              <li>
                <a href="#brands" className="hover:text-white transition-colors">
                  Multi-Brand Sales &amp; Spares
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Annual Maintenance (AMC)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Turnkey Substation Engineering
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact &amp; Emergency Dispatch
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Capacity Quick Jump */}
          <div>
            <h4 className="font-rubik font-semibold text-sm uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-amber inline-block" />
              kVA Rating Range
            </h4>
            <ul className="space-y-2.5 font-karla text-sm text-brand-softBlue/80">
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  5 kVA - 30 kVA (Retail &amp; Offices)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  35 kVA - 82.5 kVA (Commercial)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  100 kVA - 250 kVA (Heavy Duty)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  320 kVA - 750 kVA (Industrial Prime)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  1000 kVA - 2000 kVA (Mega Projects)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-3.5">
            <h4 className="font-rubik font-semibold text-sm uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-red inline-block" />
              Engineering Dispatch
            </h4>
            <div className="flex items-start gap-3 text-sm text-brand-softBlue/80 font-karla">
              <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-1" />
              <span>{APP_CONFIG.address.full}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-brand-softBlue/80 font-karla">
              <Phone className="w-4 h-4 text-brand-amber shrink-0" />
              <a
                href={`tel:${APP_CONFIG.phonePrimary}`}
                className="hover:text-white transition-colors font-bold text-white"
              >
                +91 {APP_CONFIG.phonePrimary} / {APP_CONFIG.phoneSecondary}
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-brand-softBlue/80 font-karla">
              <Mail className="w-4 h-4 text-brand-lightBlue shrink-0" />
              <a
                href={`mailto:${APP_CONFIG.email}`}
                className="hover:text-white transition-colors"
              >
                {APP_CONFIG.email}
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-brand-softBlue/80 font-karla">
              <Clock className="w-4 h-4 text-green-400 shrink-0" />
              <span>{APP_CONFIG.hours}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-karla text-xs text-brand-softBlue/60">
          <p>
            &copy; 2026 {APP_CONFIG.companyName}. All Rights Reserved. ISO 9001:2015 Certified Power Systems Provider.
          </p>
          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Site Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
