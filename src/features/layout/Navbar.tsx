import React, { useState } from 'react';
import { Menu, Zap, FileText } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { MobileMenu } from './MobileMenu';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-[3px] bg-navy-950 text-white flex items-center justify-center font-bold shadow group-hover:bg-brand-blue transition-colors">
              <Zap className="w-5 h-5 text-brand-amber fill-brand-amber" />
            </div>
            <div className="flex flex-col">
              <span className="font-rubik font-bold text-xl tracking-tight text-navy-950 leading-none">
                M.R GENERATORS
              </span>
              <span className="font-karla text-[10px] tracking-wider font-bold text-brand-blue uppercase mt-1">
                Powering Infrastructure Since 2014
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <a
              href="#top"
              className="font-karla font-bold text-xs uppercase tracking-[0.72px] text-navy-950 hover:text-brand-blue transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="font-karla font-bold text-xs uppercase tracking-[0.72px] text-slate-600 hover:text-navy-950 transition-colors"
            >
              About Us
            </a>
            <a
              href="#products"
              className="font-karla font-bold text-xs uppercase tracking-[0.72px] text-slate-600 hover:text-navy-950 transition-colors"
            >
              Greaves DG Sets
            </a>
            <a
              href="#brands"
              className="font-karla font-bold text-xs uppercase tracking-[0.72px] text-slate-600 hover:text-navy-950 transition-colors"
            >
              Brands
            </a>
            <a
              href="#why-us"
              className="font-karla font-bold text-xs uppercase tracking-[0.72px] text-slate-600 hover:text-navy-950 transition-colors"
            >
              Spares &amp; Services
            </a>
            <a
              href="#contact"
              className="font-karla font-bold text-xs uppercase tracking-[0.72px] text-slate-600 hover:text-navy-950 transition-colors"
            >
              Contact Us
            </a>
          </nav>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              size="md"
              onClick={onOpenQuoteModal}
              leftIcon={<FileText className="w-4 h-4" />}
              className="hidden sm:inline-flex"
            >
              GET A QUOTE
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2.5 rounded-[2px] bg-slate-100 hover:bg-slate-200 text-navy-950 lg:hidden transition-colors"
              aria-label="Open mobile navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenQuoteModal={onOpenQuoteModal}
      />
    </>
  );
};
