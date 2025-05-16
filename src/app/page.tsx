import { Metadata } from 'next';

import { HeroSection } from '@/components/pages/home/HeroSection/HeroSection';
import { AdvantagesSection } from '@/components/pages/home/AdvantagesSection/AdvantagesSection';
import { ClearAllSection } from '@/components/pages/home/ClearAllSection/ClearAllSection';
import { WorkStepsSection } from '@/components/pages/home/WorkStepsSection/WorkStepsSection';
import { LetsTalkSection } from '@/components/pages/home/LetsTalkSection/LetsTalkSection';
import { ImportanceCleaningSection } from '@/components/pages/home/ImportanceCleaningSection/ImportanceCleaningSection';
import { CallBackSection } from '@/components/pages/home/CallBackSection/CallBackSection';
import { ReviewsSection } from '@/components/pages/home/ReviewsSection/ReviewsSection';
import { CleaningSection } from '@/components/pages/home/CleaningSection/CleaningSection';
import { OurRangeSection } from '@/components/pages/home/OurRangeSection/OurRangeSection';
import { CalculatorSection } from '@/components/pages/home/CalculatorSection/CalculatorSection';

export const metadata: Metadata = {
  title: 'Sol Clean | Maximale Effizienz für Ihre Solarenergie '
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AdvantagesSection />
      <CleaningSection />
      <ClearAllSection />
      <CalculatorSection />
      <OurRangeSection />
      <WorkStepsSection />
      <LetsTalkSection />
      <ReviewsSection />
      <CallBackSection />
      <ImportanceCleaningSection />
    </>
  );
}
