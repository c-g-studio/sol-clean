import { Metadata } from 'next';
import { WorkingHoursSection } from '@/components/pages/contact/WorkingHoursSection/WorkingHoursSection';
import { ContactUsSection } from '@/components/pages/contact/ContactUsSection/ContactUsSection';

export const metadata: Metadata = {
  title: 'Sol Clean | Geschäftszeiten'
};

export default function ContactPage() {
  return (
    <>
      <WorkingHoursSection />
      <ContactUsSection />
    </>
  );
}
