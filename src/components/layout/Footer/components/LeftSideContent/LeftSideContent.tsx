import { FooterNavigation } from '@/components/layout/Footer/components/FooterNavigation/FooterNavigation';
import { ContactList } from '@/components/layout/Footer/components/ContactList/ContactList';
import { Button } from '@/components/common/Button/Button';

import s from './styles.module.scss';

export const LeftSideContent = () => {
  return (
    <div className={s.leftSideContent}>
      <div className={s.navWrapper}>
        <FooterNavigation />
        <ContactList />
      </div>
      <Button
        variant={'primary'}
        buttonType={'buttonLink'}
        href={'#calculatorSection'}
        className={s.leftSideButton}
      >
        Wirtschaftlichkeitsrechnung
      </Button>
    </div>
  );
};
