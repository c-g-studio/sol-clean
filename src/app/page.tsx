import { Metadata } from 'next';
import { HeroSection } from '@/components/pages/home/HeroSection/HeroSection';
import { AdvantagesPage } from '@/components/pages/home/Advantages/Advantages';

export const metadata: Metadata = {
  title: 'Sol Clean | Maximale Effizienz für  Ihre Solarenergie '
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AdvantagesPage />
    </main>
  );
}
