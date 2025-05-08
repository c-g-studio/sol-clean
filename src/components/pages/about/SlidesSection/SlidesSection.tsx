'use client';

import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';

import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Slider } from '@/components/common/Slider/Slider';
import 'swiper/css/autoplay';
import s from './styles.module.scss';
import './styles.styles.css';
import { Autoplay } from 'swiper/modules';

export const SlidesSection = () => {
  return (
    <section className={s.slidesSection}>
      <AppContainer>
        <Slider
          modules={[Autoplay]}
          pagination={false}
          isCustomArrows={false}
          autoplay={true}
          speed={500}
          breakpoints={{
            768: {
              slidesPerView: 2
            },
            1199: {
              slidesPerView: 2.2
            }
          }}
          className={'slider'}
        >
          <SwiperSlide>
            <Image
              src={'/img/about/slidesSection/image_1.png'}
              width={'549'}
              height={'410'}
              quality={100}
              alt={'House image'}
              className={s.img}
            />
          </SwiperSlide>{' '}
          <SwiperSlide>
            <Image
              src={'/img/about/slidesSection/image_1.png'}
              width={'549'}
              height={'410'}
              quality={100}
              alt={'House image'}
              className={s.img}
            />
          </SwiperSlide>{' '}
          <SwiperSlide>
            <Image
              src={'/img/about/slidesSection/image_1.png'}
              width={'549'}
              height={'410'}
              quality={100}
              alt={'House image'}
              className={s.img}
            />
          </SwiperSlide>{' '}
          <SwiperSlide>
            <Image
              src={'/img/about/slidesSection/image_1.png'}
              width={'549'}
              height={'410'}
              quality={100}
              alt={'House image'}
              className={s.img}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={'/img/about/slidesSection/image_2.png'}
              width={'549'}
              height={'410'}
              quality={100}
              alt={'House image'}
              className={s.img}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={'/img/about/slidesSection/image_3.png'}
              width={'549'}
              height={'410'}
              quality={100}
              alt={'House image'}
              className={s.img}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={'/img/about/slidesSection/image_4.png'}
              width={'549'}
              height={'410'}
              quality={100}
              alt={'House image'}
              className={s.img}
            />
          </SwiperSlide>
        </Slider>
      </AppContainer>
    </section>
  );
};
