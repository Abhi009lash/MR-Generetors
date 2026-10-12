import React from 'react';
import { HeroSection } from '../hero/HeroSection';
import { CorporateProfile } from '../about/CorporateProfile';
import { ProductsSection } from '../products/ProductsSection';
import { BrandsSection } from '../brands/BrandsSection';
import { WhyChooseUsSection } from '../why-us/WhyChooseUsSection';
import { EnterpriseClientsSection } from '../clients/EnterpriseClientsSection';
import { TestimonialsSection } from '../testimonials/TestimonialsSection';
import { ContactSection } from '../contact/ContactSection';
import type { ProductItem, BrandItem, SizingRequirement } from '../../types';

interface HomePageProps {
  onOpenQuoteModal: (modelName?: string, capacity?: string) => void;
  onOpenBrochureModal: () => void;
  onSelectProduct: (product: ProductItem) => void;
  onSelectBrand: (brand: BrandItem) => void;
  onRequirementSelect: (req: SizingRequirement) => void;
  selectedCapacity: string;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenQuoteModal,
  onOpenBrochureModal,
  onSelectProduct,
  onSelectBrand,
  onRequirementSelect,
  selectedCapacity,
}) => {
  return (
    <>
      <HeroSection
        onOpenQuoteModal={() => onOpenQuoteModal()}
        onRequirementSelect={onRequirementSelect}
      />

      <CorporateProfile
        onOpenBrochureModal={onOpenBrochureModal}
        onOpenQuoteModal={() => onOpenQuoteModal()}
      />

      <ProductsSection
        onSelectProduct={onSelectProduct}
        onOpenTurnkeyModal={() =>
          onOpenQuoteModal('Turnkey Substation & DG Sets', '1000 - 2000 kVA')
        }
      />

      <BrandsSection onSelectBrand={onSelectBrand} />

      <WhyChooseUsSection />

      <EnterpriseClientsSection />

      <TestimonialsSection />

      <ContactSection initialCapacity={selectedCapacity} />
    </>
  );
};
