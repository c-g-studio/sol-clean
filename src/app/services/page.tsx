import { Metadata } from 'next';

import { OurRangeSection } from '@/components/pages/services/OurRangeSection/OurRangeSection';
import { DifferenceSection } from '@/components/pages/services/DifferenceSection/DifferenceSection';
import { OurRecommendationsSection } from '@/components/pages/services/OurRecommendationsSection/OurRecommendationsSection';
import { FaqSection } from '@/components/pages/services/FaqSection/FaqSection';

export const metadata: Metadata = {
  title: 'Sol Clean | Unsere Mission'
};

export default function ServicesPage() {
  return (
    <>
      <OurRangeSection />
      <DifferenceSection />
      <OurRecommendationsSection />
      <FaqSection />
    </>
  );
}
