import React, { useState } from 'react';
import { Menu, FileText, ChevronDown, User } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { mrGeneratorsLogo } from '../../assets/images';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white shadow-xs border-b border-slate-100 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between gap-4">
          {/* Logo with subtitle */}
          <a href="#top" className="flex items-center gap-3 group">
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
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            <a
              href="#top"
              className="px-4 py-1.5 rounded-md bg-[#E8F0FE] text-[#1D4ED8] font-karla font-semibold text-sm transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="px-2 py-1.5 text-slate-700 hover:text-[#00163D] font-karla font-medium text-sm transition-colors"
            >
              About Us
            </a>
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 px-2 py-1.5 text-slate-700 hover:text-[#00163D] font-karla font-medium text-sm transition-colors cursor-pointer"
              >
                <span>Business Verticals</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>
            <a
              href="#brands"
              className="px-2 py-1.5 text-slate-700 hover:text-[#00163D] font-karla font-medium text-sm transition-colors"
            >
              Brands
            </a>
            <a
              href="#testimonials"
              className="px-2 py-1.5 text-slate-700 hover:text-[#00163D] font-karla font-medium text-sm transition-colors"
            >
              Clients
            </a>
            <a
              href="#contact"
              className="px-2 py-1.5 text-slate-700 hover:text-[#00163D] font-karla font-medium text-sm transition-colors"
            >
              Contact Us
            </a>
          </nav>

          {/* Right Action: Get a Quote & User Profile */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="h-10 px-5 bg-[#00163D] hover:bg-[#00225A] text-white font-karla font-bold text-xs uppercase tracking-wider rounded-md flex items-center gap-2 transition-all shadow-sm active:scale-98 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>GET A QUOTE</span>
            </button>

            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="w-10 h-10 rounded-full bg-[#00163D] hover:bg-[#00225A] text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer"
              aria-label="User Account Profile"
            >
              <User className="w-5 h-5" />
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
      />
    </>
  );
};
