import React, { useState } from 'react';
import { TopBar } from './features/layout/TopBar';
import { Navbar } from './features/layout/Navbar';
import { HeroSection } from './features/hero/HeroSection';
import { PowerRequirementFinder } from './features/calculator/PowerRequirementFinder';
import { StatsStrip } from './features/stats/StatsStrip';
import { CorporateProfile } from './features/about/CorporateProfile';
import { ProductsSection } from './features/products/ProductsSection';
import { BrandsSection } from './features/brands/BrandsSection';
import { WhyChooseUsSection } from './features/why-us/WhyChooseUsSection';
import { EnterpriseClientsSection } from './features/clients/EnterpriseClientsSection';
import { TestimonialsSection } from './features/testimonials/TestimonialsSection';
import { ContactSection } from './features/contact/ContactSection';
import { Footer } from './features/layout/Footer';
import { QuoteModal } from './features/quote/QuoteModal';
import { BrochureModal } from './features/quote/BrochureModal';
import { ProductItem, BrandItem, SizingRequirement } from './types';
import { Phone, MessageSquare } from 'lucide-react';
import { APP_CONFIG } from './core/config';

export const App: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedCapacity, setSelectedCapacity] = useState<string>('');

  const handleOpenQuoteModal = (modelName?: string, capacity?: string) => {
    if (modelName) {
      setSelectedCapacity(capacity || '');
    }
    setIsQuoteModalOpen(true);
  };

  const handleSelectProduct = (product: ProductItem) => {
    setSelectedProduct(product);
    setSelectedCapacity(`${product.capacityKva} kVA`);
    setIsQuoteModalOpen(true);
  };

  const handleSelectBrand = (brand: BrandItem) => {
    setSelectedProduct(null);
    setSelectedCapacity(brand.kVaRange);
    setIsQuoteModalOpen(true);
  };

  const handleRequirementSelect = (req: SizingRequirement) => {
    setSelectedCapacity(req.capacityKva);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsQuoteModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FF] text-industrial-textDark antialiased">
      {/* Top utility bar */}
      <TopBar onOpenBrochureModal={() => setIsBrochureModalOpen(true)} />

      {/* Main sticky navigation header */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Embedded Sizing Tool */}
        <PowerRequirementFinder onRequirementSelect={handleRequirementSelect} />

        {/* Dark Stats Credibility Strip */}
        <div className="mt-14 sm:mt-16">
          <StatsStrip />
        </div>

        {/* Corporate Profile & Circular Ecosystem */}
        <CorporateProfile
          onOpenBrochureModal={() => setIsBrochureModalOpen(true)}
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* Greaves Diesel Generators Showcase Grid */}
        <ProductsSection
          onSelectProduct={handleSelectProduct}
          onOpenTurnkeyModal={() =>
            handleOpenQuoteModal('Turnkey Substation & DG Sets', '1000 - 2000 kVA')
          }
        />

        {/* Multi-Brand Sales & Spares Support */}
        <BrandsSection onSelectBrand={handleSelectBrand} />

        {/* Enterprise Advantages / Why Choose Us */}
        <WhyChooseUsSection />

        {/* Enterprise Clients Grid */}
        <EnterpriseClientsSection />

        {/* Testimonials & Reviews */}
        <TestimonialsSection />

        {/* Emergency Contacts & Interactive Quote Form */}
        <ContactSection initialCapacity={selectedCapacity} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Modals */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => {
          setIsQuoteModalOpen(false);
          setSelectedProduct(null);
        }}
        selectedModelName={selectedProduct?.name}
        selectedCapacity={selectedCapacity}
      />

      <BrochureModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
      />

      {/* Floating Mobile Fast Actions */}
      <div className="fixed bottom-4 right-4 z-40 sm:hidden flex flex-col gap-2.5">
        <a
          href={`https://wa.me/91${APP_CONFIG.phonePrimary}?text=Hi%20MR%20Generators,%20I%20need%20a%20diesel%20generator%20quotation.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg active:scale-95"
          aria-label="WhatsApp enquiry"
        >
          <MessageSquare className="w-6 h-6 fill-current" />
        </a>
        <a
          href={`tel:${APP_CONFIG.phonePrimary}`}
          className="w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center shadow-lg active:scale-95"
          aria-label="Call emergency dispatch"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default App;
