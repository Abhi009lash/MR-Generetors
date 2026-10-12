import React from 'react';
import type { ProductItem } from '../../types';
import { GeneratorIllustration } from '../../components/ui/GeneratorIllustration';

interface ProductCardProps {
  product: ProductItem;
  onSelect: (product: ProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-100 flex flex-col justify-between overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg group">
      {/* Visual Image Header */}
      <div className="relative w-full h-56 bg-gradient-to-b from-slate-50 to-slate-100 border-b border-slate-100 flex items-center justify-center p-4 overflow-hidden">
        {product.imageSrc ? (
          <img
            src={product.imageSrc}
            alt={product.name}
            className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <GeneratorIllustration model={product.imageType} />
        )}

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 px-2.5 py-1 bg-navy-950 text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] shadow-xs">
          {product.badge}
        </div>

        <div className="absolute top-3.5 right-3.5 px-2 py-0.5 bg-[#E5EEFF] text-brand-blue font-karla font-bold text-[11px] uppercase tracking-wider rounded-[2px]">
          {product.tag}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <h3 className="font-rubik font-semibold text-lg sm:text-xl text-navy-950 leading-snug group-hover:text-brand-blue transition-colors">
            {product.name}
          </h3>
          <p className="font-karla text-xs sm:text-sm text-industrial-textMuted leading-relaxed">
            {product.description}
          </p>

          {/* 2 Spec Ribbons */}
          <div className="grid grid-cols-2 gap-2 pt-3">
            <div className="bg-surface-light border border-slate-100 rounded-[2px] p-2">
              <span className="block font-karla text-[10px] sm:text-[11px] uppercase tracking-wider text-industrial-textLightMuted">
                {product.spec1Label}
              </span>
              <span className="block font-karla font-bold text-xs sm:text-sm text-navy-950 mt-0.5 truncate">
                {product.spec1Value}
              </span>
            </div>

            <div className="bg-surface-light border border-slate-100 rounded-[2px] p-2">
              <span className="block font-karla text-[10px] sm:text-[11px] uppercase tracking-wider text-industrial-textLightMuted">
                {product.spec2Label}
              </span>
              <span className="block font-karla font-bold text-xs sm:text-sm text-navy-950 mt-0.5 truncate">
                {product.spec2Value}
              </span>
            </div>
          </div>
        </div>

        {/* Footer & CTA */}
        <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <div>
            <span className="block font-karla text-[10px] uppercase tracking-wider text-industrial-textLightMuted">
              Pricing Option
            </span>
            <span className="font-rubik font-medium text-sm sm:text-base text-navy-950">
              {product.priceNote}
            </span>
          </div>

          <button
            onClick={() => onSelect(product)}
            className="px-4 py-2 bg-navy-950 hover:bg-navy-900 text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] transition-colors shadow-xs active:scale-[0.98]"
          >
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
};
