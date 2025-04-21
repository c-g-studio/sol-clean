'use client';

import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';

import { Slider } from '@/components/common/Slider/Slider';
import { Typography } from '@/components/common/Typography/Typography';
import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { RatingMarkup } from '@/components/common/RatingMarkup/RatingMarkup';

import reviewsData from '@/mockData/reviewsData.json';

import s from './styles.module.scss';

export const ReviewsSection = () => {
  console.log('reviewsData', reviewsData);
  return (
    <section className={s.reviewsSection}>
      <AppContainer>
        <Typography variant={'h2'} className={s.title}>
          Kundenbewertungen
        </Typography>

        <Slider>
          {reviewsData.map(review => {
            return (
              <SwiperSlide className={s.slide} key={review.id}>
                <div>
                  <div className={s.ratingBox}>
                    <RatingMarkup rating={review.rating} />
                  </div>
                  <Typography variant={'h3'} className={s.slideTitle}>
                    {review.title}
                  </Typography>
                  <Typography variant={'body4'} className={s.slideText}>
                    {review.text}
                  </Typography>
                  <button type={'button'} className={s.slideButton}>
                    Weiterlesen
                  </button>
                  <div className={s.slideDateBox}>
                    <Typography variant={'body4'} className={s.slideAuthor}>
                      {review.author}
                    </Typography>
                    <Typography variant={'body4'} className={s.slideDate}>
                      {review.date}
                    </Typography>
                  </div>
                </div>
                <div className={s.imagesBox}>
                  {review.images.map(image => {
                    return (
                      <Image
                        key={image.id}
                        src={image.url}
                        alt={image.alt}
                        width={183}
                        height={183}
                        className={s.slideImage}
                      />
                    );
                  })}
                </div>
              </SwiperSlide>
            );
          })}
        </Slider>
      </AppContainer>
    </section>
  );
};
