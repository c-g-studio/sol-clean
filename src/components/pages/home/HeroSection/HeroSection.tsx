'use client';
import Image from 'next/image';

import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Typography } from '@/components/common/Typography/Typography';
import { Button } from '@/components/common/Button/Button';

import useWindowWidth from '@/hooks/useIsDesctopWidth';

import s from './styles.module.scss';

export const HeroSection = () => {
  const isDesktop = useWindowWidth();

  return (
    <section className={s.heroSection}>
      <AppContainer classes={s.heroContainer}>
        <div className={s.box}>
          <Typography variant={'h1'} className={s.heroTitle}>
            Maximale Effizienz für Ihre Solarenergie
          </Typography>
          <Image
            src={
              isDesktop
                ? '/img/home/hero_desktop.png'
                : '/img/home/hero_mobile.png'
            }
            alt={'some img'}
            className={s.heroImg}
            width="728"
            height="543"
          />
        </div>
        <div className={s.heroTextWrapper}>
          <Typography variant={'body2'} className={s.heroText}>
            Professionelle Wartung und Reinigung von Solaranlagen – damit Ihre
            Anlage volle Leistung bringt
          </Typography>
          <Button
            variant={'primary'}
            buttonType={'buttonLink'}
            href={'#calculatorSection'}
            className={s.heroButton}
          >
            Wirtschaftlichkeitsrechnung
          </Button>
        </div>
      </AppContainer>
    </section>
  );
};
