import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Typography } from '@/components/common/Typography/Typography';
import { CustomAccordion } from '@/components/common/CustomAccordion/CustomAccordion';

import faqData from '@/mockData/FaqData.json';

import s from './styles.module.scss';

export const FaqSection = () => {
  return (
    <section className={s.faqSection}>
      <AppContainer>
        <Typography variant={'h2'} className={s.sectionTitle}>
          Häufig gestellte Fragen{' '}
          <Typography variant={'decorSpan'}>(FAQ)</Typography>
        </Typography>
        <CustomAccordion data={faqData} />
      </AppContainer>
    </section>
  );
};
