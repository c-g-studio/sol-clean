import { FC } from 'react';

import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { RightSideContent } from '@/components/layout/Footer/components/RightSideContent/RightSideContent';
import { LeftSideContent } from '@/components/layout/Footer/components/LeftSideContent/LeftSideContent';

import s from './styles.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={s.footer}>
      <AppContainer classes={s.footerContainer}>
        <LeftSideContent />
        <RightSideContent />
      </AppContainer>
    </footer>
  );
};
