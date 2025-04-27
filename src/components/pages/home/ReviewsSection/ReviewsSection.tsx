'use client';

import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';

import { Modal } from '@/components/common/Modal/Modal';
import { Slider } from '@/components/common/Slider/Slider';
import { Typography } from '@/components/common/Typography/Typography';
import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { RatingMarkup } from '@/components/common/RatingMarkup/RatingMarkup';
import { ReviewModal } from '@/components/pages/home/ReviewsSection/components/ReviewModal/ReviewModal';

import { useMultiModal } from '@/hooks/useMultiModal';
import { addDotsAsNeeded } from '@/utils/addDotsAsNeeded';

import reviewsData from '@/mockData/reviewsData.json';

import s from './styles.module.scss';

export const ReviewsSection = () => {
  const { openModal, closeModal, isOpen } = useMultiModal<string | number>();

  return (
    <section className={s.reviewsSection}>
      <AppContainer>
        <Typography variant={'h2'} className={s.title}>
          Kundenbewertungen
        </Typography>

        <Slider>
          {reviewsData.map(review => {
            const { text, isTextSliced } = addDotsAsNeeded(review.text, 450);

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
                    {text}
                  </Typography>
                  {isTextSliced && (
                    <button
                      type={'button'}
                      className={s.slideButton}
                      onClick={() => openModal(review.id)}
                    >
                      Weiterlesen
                    </button>
                  )}
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
                <Modal onClose={closeModal} open={isOpen(review.id)}>
                  <ReviewModal review={review} />
                </Modal>
              </SwiperSlide>
            );
          })}
        </Slider>
      </AppContainer>
    </section>
  );
};
