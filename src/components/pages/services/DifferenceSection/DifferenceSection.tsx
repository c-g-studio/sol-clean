'use client';

import { SectionTopBar } from '@/components/common/SectionTopBar/SectionTopBar';
import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Typography } from '@/components/common/Typography/Typography';

import { Slider } from '@/components/common/Slider/Slider';
import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import s from './styles.module.scss';
import './styles.styles.css';
import { Button } from '@/components/common/Button/Button';

export const DifferenceSection = () => {
  return (
    <section className={s.differenceSection}>
      <SectionTopBar />
      <AppContainer>
        <Typography variant={'h2'} className={s.sectionTitle}>
          Der Unterschied,
          <br className={s.titleBreakLine} /> den Sie{' '}
          <Typography variant={'decorSpan'}>sehen können</Typography>
        </Typography>
        <Typography variant={'body3'} className={s.text}>
          Ihre Solarmodule verdienen das Beste – und wir sorgen dafür! Sehen Sie
          selbst, wie unsere professionelle Reinigung selbst hartnäckigste
          Verschmutzungen entfernt, die Leistung Ihrer Anlage steigert und sie
          wieder in Topform bringt.
        </Typography>
        <Slider
          breakpoints={{
            768: {
              slidesPerView: 1.2
            },
            1199: {
              slidesPerView: 1
            }
          }}
          className={s.slider}
        >
          <SwiperSlide className={s.slide}>
            <Typography variant={'body1'} className={s.slideText}>
              Verschmutzte Solarpaneele verlieren bis zu 30 % ihrer Leistung, da
              sie weniger Sonnenlicht absorbieren. Staub, Laub und Ablagerungen
              beeinträchtigen die Effizienz und können langfristige Schäden
              verursachen. Eine regelmäßige Reinigung sorgt für maximale
              Energieausbeute und verlängert die Lebensdauer Ihrer Anlage.
            </Typography>
            <div className={s.imagesBox}>
              <Image
                src={'/img/services/differenceSection/image_2.png'}
                width={'380'}
                height={'376'}
                alt={'House image'}
                className={s.slideImage}
              />
              <Image
                src={'/img/services/differenceSection/image_2.png'}
                width={'380'}
                height={'376'}
                alt={'House image'}
                className={s.slideImage}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <Typography variant={'body1'} className={s.slideText}>
              Verschmutzte Solarpaneele verlieren bis zu 30 % ihrer Leistung, da
              sie weniger Sonnenlicht absorbieren. Staub, Laub und Ablagerungen
              beeinträchtigen die Effizienz und können langfristige Schäden
              verursachen. Eine regelmäßige Reinigung sorgt für maximale
              Energieausbeute und verlängert die Lebensdauer Ihrer Anlage.
            </Typography>
            <div className={s.imagesBox}>
              <Image
                src={'/img/services/differenceSection/image_2.png'}
                width={'380'}
                height={'376'}
                alt={'House image'}
                className={s.slideImage}
              />
              <Image
                src={'/img/services/differenceSection/image_2.png'}
                width={'380'}
                height={'376'}
                alt={'House image'}
                className={s.slideImage}
              />
            </div>
          </SwiperSlide>{' '}
          <SwiperSlide className={s.slide}>
            <Typography variant={'body1'} className={s.slideText}>
              Verschmutzte Solarpaneele verlieren bis zu 30 % ihrer Leistung, da
              sie weniger Sonnenlicht absorbieren. Staub, Laub und Ablagerungen
              beeinträchtigen die Effizienz und können langfristige Schäden
              verursachen. Eine regelmäßige Reinigung sorgt für maximale
              Energieausbeute und verlängert die Lebensdauer Ihrer Anlage.
            </Typography>
            <div className={s.imagesBox}>
              <Image
                src={'/img/services/differenceSection/image_2.png'}
                width={'380'}
                height={'376'}
                alt={'House image'}
                className={s.slideImage}
              />
              <Image
                src={'/img/services/differenceSection/image_2.png'}
                width={'380'}
                height={'376'}
                alt={'House image'}
                className={s.slideImage}
              />
            </div>
          </SwiperSlide>{' '}
          <SwiperSlide className={s.slide}>
            <Typography variant={'body1'} className={s.slideText}>
              Verschmutzte Solarpaneele verlieren bis zu 30 % ihrer Leistung, da
              sie weniger Sonnenlicht absorbieren. Staub, Laub und Ablagerungen
              beeinträchtigen die Effizienz und können langfristige Schäden
              verursachen. Eine regelmäßige Reinigung sorgt für maximale
              Energieausbeute und verlängert die Lebensdauer Ihrer Anlage.
            </Typography>
            <div className={s.imagesBox}>
              <Image
                src={'/img/services/differenceSection/image_2.png'}
                width={'380'}
                height={'376'}
                alt={'House image'}
                className={s.slideImage}
              />
              <Image
                src={'/img/services/differenceSection/image_2.png'}
                width={'380'}
                height={'376'}
                alt={'House image'}
                className={s.slideImage}
              />
            </div>
          </SwiperSlide>{' '}
          <SwiperSlide className={s.slide}>
            <Typography variant={'body1'} className={s.slideText}>
              Verschmutzte Solarpaneele verlieren bis zu 30 % ihrer Leistung, da
              sie weniger Sonnenlicht absorbieren. Staub, Laub und Ablagerungen
              beeinträchtigen die Effizienz und können langfristige Schäden
              verursachen. Eine regelmäßige Reinigung sorgt für maximale
              Energieausbeute und verlängert die Lebensdauer Ihrer Anlage.
            </Typography>
            <div className={s.imagesBox}>
              <Image
                src={'/img/services/differenceSection/image_2.png'}
                width={'380'}
                height={'376'}
                alt={'House image'}
                className={s.slideImage}
              />
              <Image
                src={'/img/services/differenceSection/image_2.png'}
                width={'380'}
                height={'376'}
                alt={'House image'}
                className={s.slideImage}
              />
            </div>
          </SwiperSlide>{' '}
          <SwiperSlide className={s.slide}>
            <Typography variant={'body1'} className={s.slideText}>
              Verschmutzte Solarpaneele verlieren bis zu 30 % ihrer Leistung, da
              sie weniger Sonnenlicht absorbieren. Staub, Laub und Ablagerungen
              beeinträchtigen die Effizienz und können langfristige Schäden
              verursachen. Eine regelmäßige Reinigung sorgt für maximale
              Energieausbeute und verlängert die Lebensdauer Ihrer Anlage.
            </Typography>
            <div className={s.imagesBox}>
              <Image
                src={'/img/services/differenceSection/image_2.png'}
                width={'380'}
                height={'376'}
                alt={'House image'}
                className={s.slideImage}
              />
              <Image
                src={'/img/services/differenceSection/image_2.png'}
                width={'380'}
                height={'376'}
                alt={'House image'}
                className={s.slideImage}
              />
            </div>
          </SwiperSlide>
        </Slider>
        <Button
          buttonType={'buttonLink'}
          href={'/#calculatorSection'}
          className={s.button}
        >
          Wirtschaftlichkeitsrechnung
        </Button>
      </AppContainer>
    </section>
  );
};
