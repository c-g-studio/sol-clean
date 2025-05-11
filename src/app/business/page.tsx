import { Metadata } from 'next';
import { HeroSection } from '@/components/pages/business/HeroSection/HeroSection';
import { SolCleanSection } from '@/components/pages/business/SolCleanSection/SolCleanSection';
import { RentSection } from '@/components/pages/business/RentSection/RentSection';

export const metadata: Metadata = {
  title: 'Sol Clean | Business'
};

export default function BusinessPage() {
  return (
    <>
      <HeroSection />
      <SolCleanSection />
      <RentSection />
    </>
  );
}
