import { Metadata } from 'next';
import { FaqSection } from '@/components/pages/services/FaqSection/FaqSection';
import { OurRecommendationsSection } from '@/components/pages/about/OurRecommendationsSection/OurRecommendationsSection';
import { ReviewsSection } from '@/components/pages/home/ReviewsSection/ReviewsSection';
import { SlidesSection } from '@/components/pages/about/SlidesSection/SlidesSection';
import { PerformanceSection } from '@/components/pages/about/PerformanceSection/PerformanceSection';
import { OurMissionSection } from '@/components/pages/about/OurMissionSection/OurMissionSection';

export const metadata: Metadata = {
  title: 'Sol Clean | Unsere Mission'
};

export default function AboutPage() {
  return (
    <>
      <OurMissionSection />
      <PerformanceSection />
      <SlidesSection />
      <OurRecommendationsSection />
      <ReviewsSection />
      <FaqSection />
    </>
  );
}
