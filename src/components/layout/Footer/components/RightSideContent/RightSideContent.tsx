import { FooterNavigation } from '@/components/layout/Footer/components/FooterNavigation/FooterNavigation';
import { ContactList } from '@/components/layout/Footer/components/ContactList/ContactList';
import { Button } from '@/components/common/Button/Button';

import s from './styles.module.scss';

export const RightSideContent = () => {
  return (
    <div className={s.rightSideContent}>
      <div className={s.navWrapper}>
        <FooterNavigation />
        <ContactList />
      </div>
      <Button variant={'primary'} type={'button'} className={s.rightSideButton}>
        Wirtschaftlichkeitsrechnung
      </Button>
    </div>
  );
};
