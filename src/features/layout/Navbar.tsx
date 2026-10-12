import React, { useState } from 'react';
import { Menu, FileText, User } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { mrGeneratorsLogo } from '../../assets/images';
import type { PageId } from '../../types';

interface NavbarProps {
  onOpenQuoteModal: () => void;
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const NAV_ITEMS: Array<{ id: PageId; label: string }> = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'products', label: 'Sales' },
  { id: 'services', label: 'Services' },
  { id: 'amc', label: 'AMC' },
  { id: 'spares', label: 'Spares' },
  { id: 'rentals', label: 'Rentals' },
  { id: 'clients', label: 'Clients' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact Us' },
];

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQuoteModal,
  currentPage,
  onNavigate,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white shadow-xs border-b border-slate-100 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 xl:px-12 h-20 flex items-center justify-between gap-2 xl:gap-4">
          {/* Logo */}
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="flex items-center group cursor-pointer text-left shrink-0"
          >
            <img
              src={mrGeneratorsLogo}
              alt="M.R Generators Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </button>

          {/* Navigation Links with smooth responsive spacing, fixed uniform padding, no text-wrap, and no layout shift */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 2xl:gap-3 shrink-0">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onNavigate(item.id)}
                  className={`px-2.5 xl:px-3 py-1.5 rounded-md font-karla text-[13px] xl:text-sm whitespace-nowrap transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'bg-[#DFE9FB] text-[#00163D] font-bold shadow-xs'
                      : 'text-slate-700 hover:text-[#00163D] hover:bg-slate-100/70 font-semibold'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Get Instant Quote & User Profile */}
          <div className="flex items-center gap-2 xl:gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => onNavigate('quote')}
              className={`h-10 px-5 font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] flex items-center gap-2 transition-all shadow-sm active:scale-98 cursor-pointer ${
                currentPage === 'quote'
                  ? 'bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold'
                  : 'bg-[#0F2B5C] hover:bg-[#00163D] text-white'
              }`}
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
