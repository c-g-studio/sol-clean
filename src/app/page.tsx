import { Metadata } from 'next';

import { HeroSection } from '@/components/pages/home/HeroSection/HeroSection';
import { AdvantagesSection } from '@/components/pages/home/AdvantagesSection/AdvantagesSection';
import { ClearAllSection } from '@/components/pages/home/ClearAll/ClearAllSection';

export const metadata: Metadata = {
  title: 'Sol Clean | Maximale Effizienz für  Ihre Solarenergie '
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AdvantagesSection />
      <ClearAllSection />
    </main>
  );
}
