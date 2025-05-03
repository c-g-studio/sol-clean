'use client';

import { FC, ReactNode, useRef } from 'react';
import { Swiper, SwiperProps } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';

import { LeftArrow } from '@/components/icons/arrows/LeftArrow/LeftArrow';
import { RightArrow } from '@/components/icons/arrows/RightArrow/RightArrow';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './slider.styles.css';

type TSliderProps = {
  children: ReactNode;
} & SwiperProps;

export const Slider: FC<TSliderProps> = ({ children, ...props }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const nextSlide = () => swiperRef.current?.slideNext();
  const prevSlide = () => swiperRef.current?.slidePrev();

  return (
    <div className="slider-wrapper">
      <Swiper
        modules={[Pagination, Navigation]}
        loop={true}
        slidesPerView="auto"
        spaceBetween={20}
        centeredSlides={false}
        pagination={{ type: 'progressbar' }}
        onSwiper={swiper => (swiperRef.current = swiper)}
        breakpoints={{
          768: {
            slidesPerView: 1.1
          },
          1199: {
            slidesPerView: 2
          }
        }}
        {...props}
      >
        {children}
      </Swiper>

      <div onClick={prevSlide}>
        <LeftArrow className="leftArrow" />
      </div>
      <div onClick={nextSlide}>
        <RightArrow className="rightArrow" />
      </div>
    </div>
  );
};
