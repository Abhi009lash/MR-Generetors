import React from 'react';
import { X, Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { APP_CONFIG } from '../../core/config';
import { Button } from '../../components/ui/Button';
import { mrGeneratorsLogo } from '../../assets/images';
import type { PageId } from '../../types';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteModal: () => void;
  onNavigate?: (page: PageId) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onOpenQuoteModal,
  onNavigate,
}) => {
  if (!isOpen) return null;

  const handleLinkClick = (page?: PageId) => {
    onClose();
    if (page && onNavigate) {
      onNavigate(page);
    }
  };

  const navItems: Array<{ label: string; page?: PageId; href?: string }> = [
    { label: 'Home', page: 'home' },
    { label: 'Get Instant Quote', page: 'quote' },
    { label: 'About Us', page: 'about' },
    { label: 'Sales & Products', page: 'products' },
    { label: 'Mahindra Powerol DG Sets', page: 'mahindra' },
    { label: 'Kirloskar KOEL Green', page: 'kirloskar' },
    { label: 'Caterpillar (CAT®)', page: 'caterpillar' },
    { label: 'Mobile & Portable (1 - 125 kVA)', page: 'portable' },
    { label: 'Eicher DG Sets', page: 'eicher' },
    { label: 'Cummins DG Sets', page: 'cummins' },
    { label: 'Ashok Leyland LEYPOWER', page: 'leypower' },
    { label: 'Tata Motors DG Sets', page: 'tata' },
    { label: 'Services & Maintenance', page: 'services' },
    { label: 'Generator AMC Services', page: 'amc' },
    { label: 'Spares & Accessories', page: 'spares' },
    { label: 'Generator Rentals', page: 'rentals' },
    { label: 'Blog & Insights', page: 'blog' },
    { label: 'Contact Us & Sizing', page: 'contact' },
    { label: 'Enterprise Clients Portfolio', page: 'clients' },
    { label: 'Why Choose Us', href: '#why-us' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden bg-navy-950/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="fixed inset-y-0 right-0 w-full max-w-xs bg-navy-950 text-white shadow-2xl p-6 flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <img
              src={mrGeneratorsLogo}
              alt="M.R Generators Logo"
              className="h-9 w-auto object-contain bg-white px-2 py-0.5 rounded-[2px]"
            />
            <button
              onClick={onClose}
              className="p-1.5 rounded text-slate-300 hover:text-white hover:bg-white/10"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation links */}
          <nav className="mt-6 space-y-1">
            {navItems.map((item) => (
              item.page ? (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleLinkClick(item.page)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded text-sm font-karla font-bold tracking-wider uppercase text-slate-200 hover:text-white hover:bg-white/5 transition-colors cursor-pointer text-left"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => handleLinkClick()}
                  className="flex items-center justify-between px-3 py-2.5 rounded text-sm font-karla font-bold tracking-wider uppercase text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              )
            ))}
          </nav>

          {/* Dealer Badge */}
          <div className="mt-6 p-3 rounded bg-navy-850 border border-white/10 flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-brand-amber shrink-0" />
            <div className="text-xs">
              <p className="font-bold text-white uppercase tracking-wider">
                Authorised Dealer
              </p>
              <p className="text-slate-300">Greaves Power DG Sets</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 border-t border-white/10 space-y-3">
          <Button
            variant="emergency"
            fullWidth
            onClick={() => {
              onClose();
              if (onNavigate) {
                onNavigate('quote');
              } else {
                onOpenQuoteModal();
              }
            }}
          >
            GET A QUOTE
          </Button>

          <a
            href={`tel:${APP_CONFIG.phonePrimary}`}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded bg-white/10 hover:bg-white/15 text-white font-karla font-bold text-xs uppercase tracking-wider transition-colors"
          >
            <Phone className="w-4 h-4 text-brand-red" />
            <span>Call: +91 {APP_CONFIG.phonePrimary}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
