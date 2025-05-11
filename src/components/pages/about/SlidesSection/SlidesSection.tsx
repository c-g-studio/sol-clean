'use client';

import { FC } from 'react';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Slider } from '@/components/common/Slider/Slider';

import 'swiper/css/autoplay';
import './styles.styles.css';
import s from './styles.module.scss';

type TDataItem = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

type TSlidesSectionProps = {
  classes?: string;
  data: TDataItem[];
};

export const SlidesSection: FC<TSlidesSectionProps> = ({ classes, data }) => {
  return (
    <section className={`${s.slidesSection} ${classes}`}>
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
          {data.map(({ url, width, height, alt }, index) => (
            <SwiperSlide key={index}>
              <Image
                src={url}
                width={width}
                height={height}
                quality={100}
                alt={alt}
                className={s.img}
              />
            </SwiperSlide>
          ))}
        </Slider>
      </AppContainer>
    </section>
  );
};
