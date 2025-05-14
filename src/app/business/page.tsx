import { Metadata } from 'next';

import { HeroSection } from '@/components/pages/business/HeroSection/HeroSection';
import { RentSection } from '@/components/pages/business/RentSection/RentSection';
import { PartnerSection } from '@/components/pages/business/PartnerSection/PartnerSection';
import { OurRecommendationsSection } from '@/components/pages/about/OurRecommendationsSection/OurRecommendationsSection';
import { SlidesSection } from '@/components/pages/about/SlidesSection/SlidesSection';

import { ourMissionBusinessData } from '@/mockData/ourMissionBusinessData';
import mockData from '@/mockData/sliderSectionBusinessDate.json';

import s from './styles.module.scss';
import { EmergencyServiceSection } from '@/components/pages/business/EmergencyServiceSection/EmergencyServiceSection';

export const metadata: Metadata = {
  title: 'Sol Clean | Business'
};

export default function BusinessPage() {
  return (
    <>
      <HeroSection />
      <RentSection />
      <PartnerSection />
      <OurRecommendationsSection
        classes={s.ourRecommendationsSection}
        data={ourMissionBusinessData}
      />
      <SlidesSection classes={s.sliderSection} data={mockData} />
      <EmergencyServiceSection />
    </>
  );
}
