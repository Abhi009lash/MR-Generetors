import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import type { ProductItem } from '../../types';
import { ProductCard } from './ProductCard';
import { ProductTurnkeyCard } from './ProductTurnkeyCard';
import { PRODUCTS_DATA } from '../../core/data';

interface ProductsSectionProps {
  onSelectProduct: (product: ProductItem) => void;
  onOpenTurnkeyModal: () => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectProduct,
  onOpenTurnkeyModal,
}) => {
  return (
    <section id="products" className="py-16 sm:py-20 lg:py-24 bg-surface-soft border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="px-2.5 py-1 bg-brand-amber/15 text-brand-amber font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                Authorised Dealership
              </span>
              <span className="text-xs font-karla text-slate-500 font-bold uppercase tracking-wider">
                Greaves Power DG Sets
              </span>
            </div>

            <h2 className="font-rubik font-semibold text-2xl sm:text-3xl lg:text-4xl text-navy-950 tracking-tight leading-tight">
              Authorised Dealers for Greaves Power Generators
            </h2>

            <p className="font-karla text-sm sm:text-base text-industrial-textMuted leading-relaxed">
              High-performance CPCB IV+ compliant diesel power solutions combining engineering excellence, lower total cost of ownership &amp; complete nationwide support. Sales and service hub in Hyderabad.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-karla font-bold text-xs uppercase tracking-wider text-brand-blue hover:text-navy-950 transition-colors shrink-0"
          >
            <span>View Complete Product Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 6 Product Cards Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PRODUCTS_DATA.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
            />
          ))}

          {/* Card 6: Custom Turnkey Substation Card */}
          <ProductTurnkeyCard onContactLeadEngineer={onOpenTurnkeyModal} />
        </div>
      </div>
    </section>
  );
};
