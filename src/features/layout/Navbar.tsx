import React, { useState } from 'react';
import { Menu, FileText, User } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { mrGeneratorsLogo } from '../../assets/images';

interface NavbarProps {
  onOpenQuoteModal: () => void;
  currentPage: 'home' | 'about' | 'products' | 'leypower' | 'contact';
  onNavigate: (page: 'home' | 'about' | 'products' | 'leypower' | 'contact') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQuoteModal,
  currentPage,
  onNavigate,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white shadow-xs border-b border-slate-100 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between gap-4">
          {/* Logo with subtitle */}
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 group cursor-pointer text-left"
          >
            <img
              src={mrGeneratorsLogo}
              alt="M.R Generators Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:flex flex-col border-l border-slate-200 pl-2.5">
              <span className="font-rubik font-bold text-xs uppercase tracking-tight text-[#00163D] leading-none">
                M.R GENERATORS
              </span>
              <span className="font-karla text-[9px] uppercase tracking-wider font-bold text-slate-500 mt-0.5">
                POWER SYSTEMS HYDERABAD
              </span>
            </div>
          </button>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className={`px-4 py-1.5 rounded-md font-karla text-sm transition-colors cursor-pointer ${
                currentPage === 'home'
                  ? 'bg-[#DFE9FB] text-[#00163D] font-bold shadow-xs'
                  : 'text-slate-700 hover:text-[#00163D] font-medium'
              }`}
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => onNavigate('about')}
              className={`px-4 py-1.5 rounded-md font-karla text-sm transition-colors cursor-pointer ${
                currentPage === 'about'
                  ? 'bg-[#DFE9FB] text-[#00163D] font-bold shadow-xs'
                  : 'text-slate-700 hover:text-[#00163D] font-medium'
              }`}
            >
              About Us
            </button>

            <button
              type="button"
              onClick={() => onNavigate('products')}
              className={`px-4 py-1.5 rounded-md font-karla text-sm transition-colors cursor-pointer ${
                currentPage === 'products'
                  ? 'bg-[#DFE9FB] text-[#00163D] font-bold shadow-xs'
                  : 'text-slate-700 hover:text-[#00163D] font-medium'
              }`}
            >
              Sales &amp; Products
            </button>

            <a
              href="#why-us"
              className="px-2 py-1.5 text-slate-700 hover:text-[#00163D] font-karla font-medium text-sm transition-colors"
            >
              Services &amp; AMC
            </a>

            <a
              href="#testimonials"
              className="px-2 py-1.5 text-slate-700 hover:text-[#00163D] font-karla font-medium text-sm transition-colors"
            >
              Clients &amp; Portfolio
            </a>

            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className={`px-4 py-1.5 rounded-md font-karla text-sm transition-colors cursor-pointer ${
                currentPage === 'contact'
                  ? 'bg-[#DFE9FB] text-[#00163D] font-bold shadow-xs'
                  : 'text-slate-700 hover:text-[#00163D] font-medium'
              }`}
            >
              Contact Us
            </button>
          </nav>

          {/* Right Action: Get Instant Quote & User Profile */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="h-10 px-5 bg-[#0F2B5C] hover:bg-[#00163D] text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] flex items-center gap-2 transition-all shadow-sm active:scale-98 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>GET INSTANT QUOTE</span>
            </button>

            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="w-8 h-8 rounded-full bg-[#00163D] hover:bg-[#0F2B5C] text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer"
              aria-label="User Account Profile"
            >
              <User className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 lg:hidden transition-colors ml-1 cursor-pointer"
              aria-label="Open mobile navigation"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenQuoteModal={() => {
          setIsMobileMenuOpen(false);
          onOpenQuoteModal();
        }}
        onNavigate={onNavigate}
      />
    </>
  );
};
