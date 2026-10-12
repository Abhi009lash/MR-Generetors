import React, { useState } from 'react';
import { TopBar } from './features/layout/TopBar';
import { Navbar } from './features/layout/Navbar';
import { HeroSection } from './features/hero/HeroSection';
import { CorporateProfile } from './features/about/CorporateProfile';
import { AboutPage } from './features/about/AboutPage';
import { ProductsSection } from './features/products/ProductsSection';
import { BrandsSection } from './features/brands/BrandsSection';
import { WhyChooseUsSection } from './features/why-us/WhyChooseUsSection';
import { EnterpriseClientsSection } from './features/clients/EnterpriseClientsSection';
import { TestimonialsSection } from './features/testimonials/TestimonialsSection';
import { ContactSection } from './features/contact/ContactSection';
import { ContactPage } from './features/contact/ContactPage';
import { SalesProductsPage } from './features/sales-products/SalesProductsPage';
import { Footer } from './features/layout/Footer';
import { QuoteModal } from './features/quote/QuoteModal';
import { BrochureModal } from './features/quote/BrochureModal';
import type { ProductItem, BrandItem, SizingRequirement } from './types';
import { Phone, MessageSquare } from 'lucide-react';
import { APP_CONFIG } from './core/config';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'products' | 'contact'>('products');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedCapacity, setSelectedCapacity] = useState<string>('');

  const handleNavigate = (page: 'home' | 'about' | 'products' | 'contact') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      <main className="flex-1">
        {currentPage === 'about' ? (
          /* Dedicated About Us Page matching Figma screen 12474d8ecf774619ba81f220b3a50d27 */
          <AboutPage
            onOpenBrochureModal={() => setIsBrochureModalOpen(true)}
            onOpenQuoteModal={() => handleOpenQuoteModal()}
            onNavigateHome={() => handleNavigate('home')}
          />
        ) : currentPage === 'products' ? (
          /* Dedicated Sales & Products Page matching Figma specifications */
          <SalesProductsPage
            onOpenQuoteModal={handleOpenQuoteModal}
            onOpenBrochureModal={() => setIsBrochureModalOpen(true)}
          />
        ) : currentPage === 'contact' ? (
          /* Dedicated Contact Us Page matching Figma screen and media_1791826383802_fd1feea7.png */
          <ContactPage
            onNavigateHome={() => handleNavigate('home')}
            onOpenQuoteModal={() => handleOpenQuoteModal()}
          />
        ) : (
          /* Home Screen */
          <>
            <HeroSection
              onOpenQuoteModal={() => handleOpenQuoteModal()}
              onRequirementSelect={handleRequirementSelect}
            />

            <CorporateProfile
              onOpenBrochureModal={() => setIsBrochureModalOpen(true)}
              onOpenQuoteModal={() => handleOpenQuoteModal()}
            />

            <ProductsSection
              onSelectProduct={handleSelectProduct}
              onOpenTurnkeyModal={() =>
                handleOpenQuoteModal('Turnkey Substation & DG Sets', '1000 - 2000 kVA')
              }
            />

            <BrandsSection onSelectBrand={handleSelectBrand} />

            <WhyChooseUsSection />

            <EnterpriseClientsSection />

            <TestimonialsSection />

            <ContactSection initialCapacity={selectedCapacity} />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

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
