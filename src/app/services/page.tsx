import { Metadata } from 'next';

import { OurRangeSection } from '@/components/pages/services/OurRangeSection/OurRangeSection';
import { DifferenceSection } from '@/components/pages/services/DifferenceSection/DifferenceSection';

export const metadata: Metadata = {
  title: 'Sol Clean | Unsere Mission'
};

export default function ServicesPage() {
  return (
    <>
      <OurRangeSection />
      <DifferenceSection />
    </>
  );
}
