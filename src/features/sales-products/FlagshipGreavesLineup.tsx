import React from 'react';
import { Zap, Star, FileText, ArrowRight } from 'lucide-react';
import { greavesCutoutImg } from '../../assets/images';
import { FLAGSHIP_PRODUCTS, type FlagshipProduct } from './flagshipData';
import type { FilterState } from './SpecificationFilterPanel';

interface FlagshipGreavesLineupProps {
  filters: FilterState;
  onOpenQuoteModal: (productName: string, capacity: string) => void;
  onOpenBrochureModal: () => void;
  onResetFilters: () => void;
}

export const FlagshipGreavesLineup: React.FC<FlagshipGreavesLineupProps> = ({
  filters,
  onOpenQuoteModal,
  onOpenBrochureModal,
  onResetFilters,
}) => {
  // Apply interactive filters
  const filteredProducts = FLAGSHIP_PRODUCTS.filter((prod) => {
    if (filters.kvaRange !== 'all') {
      if (filters.kvaRange === '5-50' && (prod.capacityKva < 5 || prod.capacityKva > 50)) return false;
      if (filters.kvaRange === '50-125' && (prod.capacityKva < 50 || prod.capacityKva > 125)) return false;
      if (filters.kvaRange === '125-500' && (prod.capacityKva < 125 || prod.capacityKva > 500)) return false;
      if (filters.kvaRange === '500-2000' && (prod.capacityKva < 500 || prod.capacityKva > 2000)) return false;
    }
    if (filters.brand !== 'all' && prod.brandCategory !== filters.brand) {
      return false;
    }
    if (filters.sector !== 'all' && prod.sectorCategory !== filters.sector) {
      return false;
    }
    return true;
  });

  return (
    <section className="bg-[#F8F9FF] py-14 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-[#D32F2F] font-karla font-bold text-xs uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>AUTHORISED GREAVES POWER DEALERSHIP</span>
            </div>
            <h2 className="font-rubik font-bold text-2xl sm:text-3xl text-[#00163D] uppercase tracking-tight">
              FLAGSHIP GREAVES POWER LINEUP (CPCB IV+)
            </h2>
            <p className="font-karla text-sm text-slate-600 max-w-2xl leading-relaxed">
              Factory-tested acoustic enclosures engineered with Greaves high-efficiency diesel engines, digital governor, and low-vibration anti-resonant base.
            </p>
          </div>

          <div className="shrink-0">
            <span className="inline-block px-3 py-1.5 bg-[#DFE9FB] text-[#00163D] font-karla font-bold text-xs uppercase tracking-wider rounded-[2px]">
              GREAVES FACTORY WARRANTY INCLUDED
            </span>
          </div>
        </div>

        {/* Product Cards Grid or Empty State */}
        {filteredProducts.length === 0 ? (
          <div className="p-12 text-center bg-white rounded border border-slate-200 space-y-3">
            <p className="font-rubik font-bold text-lg text-[#00163D]">
              No exact matches for your selected filter combination
            </p>
            <p className="font-karla text-sm text-slate-600">
              Try adjusting the kVA rating, engine manufacturer, or deployment sector.
            </p>
            <button
              type="button"
              onClick={onResetFilters}
              className="px-4 py-2 bg-[#00163D] text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onOpenQuoteModal={onOpenQuoteModal}
                onOpenBrochureModal={onOpenBrochureModal}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

interface ProductCardProps {
  product: FlagshipProduct;
  onOpenQuoteModal: (productName: string, capacity: string) => void;
  onOpenBrochureModal: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenQuoteModal,
  onOpenBrochureModal,
}) => {
  return (
    <div className="bg-white rounded-[4px] border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
      <div>
        {/* Top Image Frame */}
        <div className="relative bg-[#EFF4FF] p-6 h-64 flex items-center justify-center overflow-hidden group">
          <img
            src={greavesCutoutImg}
            alt={product.name}
            className="max-h-48 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />

          {/* Top-Left Tag */}
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#00163D] text-white font-karla font-bold text-[11px] uppercase tracking-wider rounded-[2px]">
            {product.tag}
          </span>

          {/* Top-Right Badge */}
          <span
            className={`absolute top-3 right-3 px-2 py-0.5 rounded-[2px] font-karla font-bold text-[10px] uppercase tracking-wider flex items-center gap-1 ${
              product.badgeColor === 'red'
                ? 'bg-[#D32F2F] text-white'
                : 'bg-[#D9E3F5] text-[#00163D]'
            }`}
          >
            {product.badgeColor === 'amber' && <Star className="w-3 h-3 text-[#D97706] fill-current" />}
            <span>{product.badge}</span>
          </span>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-4">
          <div>
            <span className="block font-karla font-bold text-xs uppercase tracking-wider text-slate-500 mb-0.5">
              {product.model}
            </span>
            <h3 className="font-rubik font-bold text-xl text-[#00163D] uppercase tracking-tight">
              {product.name}
            </h3>
            <p className="font-karla text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
              {product.description}
            </p>
          </div>

          {/* Technical 2x2 Specs Table */}
          <div className="p-3 bg-[#EFF4FF] rounded-[4px] grid grid-cols-2 gap-2 text-xs font-karla">
            {product.specs.map((spec, i) => (
              <div key={i} className="space-y-0.5">
                <span className="block text-[11px] text-slate-500 font-bold uppercase tracking-wider">
                  {spec.label}
                </span>
                <strong className="block text-[#00163D] font-bold text-xs truncate">
                  {spec.value}
                </strong>
              </div>
            ))}
          </div>

          {/* Key Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {product.keyBadges.map((badge, i) => (
              <span
                key={i}
                className="px-2 py-0.5 bg-[#E5EEFF] text-[#44464F] rounded-[2px] font-karla font-bold text-[10px] uppercase tracking-wider"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="p-6 pt-0 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onOpenQuoteModal(product.name, `${product.capacityKva} kVA`)}
          className="flex-1 h-10 bg-[#00163D] hover:bg-[#0F2B5C] text-white font-karla font-bold text-xs uppercase tracking-wider rounded-[2px] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
        >
          <span>REQUEST QUOTE</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          type="button"
          onClick={onOpenBrochureModal}
          className="w-10 h-10 bg-[#E5EEFF] hover:bg-[#D5E4FF] text-[#00163D] rounded-[2px] flex items-center justify-center transition-colors cursor-pointer"
          title="Download Technical Datasheet"
        >
          <FileText className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
