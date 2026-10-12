import React, { useState } from 'react';
import { TopBar } from './features/layout/TopBar';
import { Navbar } from './features/layout/Navbar';
import { HomePage } from './features/home/HomePage';
import { AboutPage } from './features/about/AboutPage';
import { SalesProductsPage } from './features/sales-products/SalesProductsPage';
import { LeypowerPage } from './features/leypower/LeypowerPage';
import { TataGensetsPage } from './features/tata/TataGensetsPage';
import { CumminsPage } from './features/cummins/CumminsPage';
import { EicherPage } from './features/eicher/EicherPage';
import { MahindraPage } from './features/mahindra/MahindraPage';
import { KirloskarPage } from './features/kirloskar/KirloskarPage';
import { CaterpillarPage } from './features/caterpillar/CaterpillarPage';
import { ServicesPage } from './features/services/ServicesPage';
import { AmcPage } from './features/amc/AmcPage';
import { SparesPage } from './features/spares/SparesPage';
import { RentalsPage } from './features/rentals/RentalsPage';
import { BlogPage } from './features/blog/BlogPage';
import { ContactPage } from './features/contact/ContactPage';
import { Footer } from './features/layout/Footer';
import { QuoteModal } from './features/quote/QuoteModal';
import { BrochureModal } from './features/quote/BrochureModal';
import type { ProductItem, BrandItem, SizingRequirement } from './types';
import { Phone, MessageSquare } from 'lucide-react';
import { APP_CONFIG } from './core/config';

export type PageId =
  | 'home'
  | 'about'
  | 'products'
  | 'leypower'
  | 'tata'
  | 'cummins'
  | 'eicher'
  | 'mahindra'
  | 'kirloskar'
  | 'caterpillar'
  | 'services'
  | 'amc'
  | 'spares'
  | 'rentals'
  | 'blog'
  | 'contact';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedCapacity, setSelectedCapacity] = useState<string>('');

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (modelName?: string, capacity?: string) => {
    if (modelName) setSelectedCapacity(capacity || '');
    setIsQuoteModalOpen(true);
  };

  const handleSelectProduct = (product: ProductItem) => {
    setSelectedProduct(product);
    setSelectedCapacity(`${product.capacityKva} kVA`);
    setIsQuoteModalOpen(true);
  };

  const handleSelectBrand = (brand: BrandItem) => {
    const brandMap: Record<string, PageId> = {
      leypower: 'leypower',
      'ashok-leyland': 'leypower',
      tata: 'tata',
      cummins: 'cummins',
      eicher: 'eicher',
      mahindra: 'mahindra',
      kirloskar: 'kirloskar',
      caterpillar: 'caterpillar',
      cat: 'caterpillar',
    };
    if (brandMap[brand.id]) {
      handleNavigate(brandMap[brand.id]);
      return;
    }
    const nameLower = brand.name.toLowerCase();
    for (const [key, page] of Object.entries(brandMap)) {
      if (nameLower.includes(key)) {
        handleNavigate(page);
        return;
      }
    }
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

  const brandProps = {
    onNavigateHome: () => handleNavigate('home'),
    onNavigateProducts: () => handleNavigate('products'),
    onOpenQuoteModal: handleOpenQuoteModal,
    onOpenBrochureModal: () => setIsBrochureModalOpen(true),
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FF] text-industrial-textDark antialiased">
      <TopBar onOpenBrochureModal={() => setIsBrochureModalOpen(true)} />

      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      <main className="flex-1">
        {currentPage === 'about' ? (
          <AboutPage
            onOpenBrochureModal={() => setIsBrochureModalOpen(true)}
            onOpenQuoteModal={() => handleOpenQuoteModal()}
            onNavigateHome={() => handleNavigate('home')}
          />
        ) : currentPage === 'products' ? (
          <SalesProductsPage
            onOpenQuoteModal={handleOpenQuoteModal}
            onOpenBrochureModal={() => setIsBrochureModalOpen(true)}
            onNavigateToLeypower={() => handleNavigate('leypower')}
            onNavigateToTata={() => handleNavigate('tata')}
            onNavigateToCummins={() => handleNavigate('cummins')}
            onNavigateToEicher={() => handleNavigate('eicher')}
            onNavigateToMahindra={() => handleNavigate('mahindra')}
            onNavigateToKirloskar={() => handleNavigate('kirloskar')}
            onNavigateToCaterpillar={() => handleNavigate('caterpillar')}
          />
        ) : currentPage === 'leypower' ? (
          <LeypowerPage {...brandProps} />
        ) : currentPage === 'tata' ? (
          <TataGensetsPage {...brandProps} />
        ) : currentPage === 'cummins' ? (
          <CumminsPage {...brandProps} />
        ) : currentPage === 'eicher' ? (
          <EicherPage {...brandProps} />
        ) : currentPage === 'mahindra' ? (
          <MahindraPage {...brandProps} />
        ) : currentPage === 'kirloskar' ? (
          <KirloskarPage {...brandProps} />
        ) : currentPage === 'caterpillar' ? (
          <CaterpillarPage {...brandProps} />
        ) : currentPage === 'services' ? (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenConsultationModal={() => handleOpenQuoteModal()}
            onOpenBrochureModal={() => setIsBrochureModalOpen(true)}
          />
        ) : currentPage === 'amc' ? (
          <AmcPage
            onNavigateHome={() => handleNavigate('home')}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        ) : currentPage === 'spares' ? (
          <SparesPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateServices={() => handleNavigate('services')}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        ) : currentPage === 'rentals' ? (
          <RentalsPage
            onNavigateHome={() => handleNavigate('home')}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        ) : currentPage === 'blog' ? (
          <BlogPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateContact={() => handleNavigate('contact')}
          />
        ) : currentPage === 'contact' ? (
          <ContactPage
            onNavigateHome={() => handleNavigate('home')}
            onOpenQuoteModal={() => handleOpenQuoteModal()}
          />
        ) : (
          <HomePage
            onOpenQuoteModal={handleOpenQuoteModal}
            onOpenBrochureModal={() => setIsBrochureModalOpen(true)}
            onSelectProduct={handleSelectProduct}
            onSelectBrand={handleSelectBrand}
            onRequirementSelect={handleRequirementSelect}
            selectedCapacity={selectedCapacity}
          />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />

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
