'use client';

import { SwiperSlide } from 'swiper/react';

import { Slider } from '@/components/common/Slider/Slider';
import { Typography } from '@/components/common/Typography/Typography';
import { AppContainer } from '@/components/common/AppContainer/AppContainer';

import s from './styles.module.scss';

export const ReviewsSection = () => {
  return (
    <section className={s.reviewsSection}>
      <AppContainer>
        <Typography variant={'h2'} className={s.title}>
          Kundenbewertungen
        </Typography>

        <Slider>
          <SwiperSlide>1kajsdnkand jkansdjk nasjknd kjas</SwiperSlide>
          <SwiperSlide>1kajsdnkand jkansdjk nasjknd kjas</SwiperSlide>
          <SwiperSlide>1kajsdnkand jkansdjk nasjknd kjas</SwiperSlide>
          <SwiperSlide>1kajsdnkand jkansdjk nasjknd kjas</SwiperSlide>{' '}
          <SwiperSlide>1kajsdnkand jkansdjk nasjknd kjas</SwiperSlide>
          <SwiperSlide>1kajsdnkand jkansdjk nasjknd kjas</SwiperSlide>
          <SwiperSlide>1kajsdnkand jkansdjk nasjknd kjas</SwiperSlide>
          <SwiperSlide>1kajsdnkand jkansdjk nasjknd kjas</SwiperSlide>{' '}
          <SwiperSlide>1kajsdnkand jkansdjk nasjknd kjas</SwiperSlide>
          <SwiperSlide>1kajsdnkand jkansdjk nasjknd kjas</SwiperSlide>
          <SwiperSlide>1kajsdnkand jkansdjk nasjknd kjas</SwiperSlide>
          <SwiperSlide>1kajsdnkand jkansdjk nasjknd kjas</SwiperSlide>{' '}
          <SwiperSlide>1kajsdnkand jkansdjk nasjknd kjas</SwiperSlide>
          <SwiperSlide>1kajsdnkand jkansdjk nasjknd kjas</SwiperSlide>
          <SwiperSlide>1kajsdnkand jkansdjk nasjknd kjas</SwiperSlide>
          <SwiperSlide>1kajsdnkand jkansdjk nasjknd kjas</SwiperSlide>
        </Slider>
      </AppContainer>
    </section>
  );
};
