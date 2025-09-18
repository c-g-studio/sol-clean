'use client';

import { SectionTopBar } from '@/components/common/SectionTopBar/SectionTopBar';
import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Typography } from '@/components/common/Typography/Typography';
import { Button } from '@/components/common/Button/Button';
import { Slider } from '@/components/common/Slider/Slider';

import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import s from './styles.module.scss';
import './styles.styles.css';

type Slide = {
  text: string;
  images: string[];
};

type DifferenceSectionProps = {
  slidesData: Slide[];
  rounded?: boolean;
};

export const DifferenceSection = ({
  slidesData,
  rounded = false
}: DifferenceSectionProps) => {
  return (
    <section className={`${s.differenceSection} ${rounded ? s.rounded : ''}`}>
      <SectionTopBar />
      <AppContainer>
        <Typography variant="h2" className={s.sectionTitle}>
          Der Unterschied,
          <br className={s.titleBreakLine} /> den Sie{' '}
          <Typography variant="decorSpan">sehen können</Typography>
        </Typography>

        <Typography variant="body3" className={s.text}>
          Ihre Solarmodule verdienen das Beste – und wir sorgen dafür! Sehen Sie
          selbst, wie unsere professionelle Reinigung selbst hartnäckigste
          Verschmutzungen entfernt, die Leistung Ihrer Anlage steigert und sie
          wieder in Topform bringt.
        </Typography>

        <Slider
          breakpoints={{
            768: { slidesPerView: 1.2 },
            1199: { slidesPerView: 1 }
          }}
          className={`${s.slider} ${rounded ? s.sliderRounded : ''}`}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide
              key={index}
              className={`${s.slide} ${rounded ? s.rounded : ''}`}
            >
              <Typography variant="body1" className={s.slideText}>
                {slide.text}
              </Typography>
              <div className={s.imagesBox}>
                {slide.images.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    width={380}
                    height={376}
                    alt={`Slide ${index + 1} image ${i + 1}`}
                    className={`${s.slideImage} ${rounded ? s.rounded : ''}`}
                  />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Slider>

        <Button
          buttonType="buttonLink"
          href="/#calculatorSection"
          className={`${s.button} ${rounded ? s.rounded : ''}`}
        >
          Wirtschaftlichkeitsrechnung
        </Button>
      </AppContainer>
    </section>
  );
};
