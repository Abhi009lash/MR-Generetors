import React from 'react';
import { X, Phone, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import { APP_CONFIG } from '../../core/config';
import { Button } from '../../components/ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteModal: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onOpenQuoteModal,
}) => {
  if (!isOpen) return null;

  const links = [
    { label: 'Home', href: '#top' },
    { label: 'About Us', href: '#about' },
    { label: 'Greaves DG Sets', href: '#products' },
    { label: 'Multi-Brand Portfolio', href: '#brands' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Clients & Reviews', href: '#testimonials' },
    { label: 'Contact & Sizing', href: '#contact' },
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
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-brand-red flex items-center justify-center font-bold text-white shadow">
                <Zap className="w-4 h-4 fill-current" />
              </div>
              <div className="font-rubik font-bold tracking-tight text-white leading-tight">
                M.R GENERATORS
              </div>
            </div>
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
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between px-3 py-2.5 rounded text-sm font-karla font-bold tracking-wider uppercase text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
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
              onOpenQuoteModal();
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
