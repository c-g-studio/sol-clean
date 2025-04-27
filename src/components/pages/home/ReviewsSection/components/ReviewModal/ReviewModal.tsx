import { RatingMarkup } from '@/components/common/RatingMarkup/RatingMarkup';
import { Typography } from '@/components/common/Typography/Typography';

import s from './styles.module.scss';
import { FC } from 'react';

type TImage = {
  id: number;
  url: string;
  alt: string;
};

type TReview = {
  id: number;
  title: string;
  text: string;
  rating: number;
  author: string;
  date: string;
  images: TImage[];
};

type TReviewModalProps = {
  review: TReview;
};

export const ReviewModal: FC<TReviewModalProps> = ({ review }) => {
  console.log('review', review);
  return (
    <div className={s.modalBox}>
      <div className={s.rating}>
        <RatingMarkup rating={review.rating} />
      </div>
      <Typography variant={'h4'} className={s.title}>
        {review.title}
      </Typography>
      <Typography variant={'body4'} className={s.text}>
        {review.text}
      </Typography>
      <div className={s.dateBox}>
        <Typography variant={'body4'} className={s.author}>
          {review.author}
        </Typography>
        <Typography variant={'body4'} className={s.date}>
          {review.date}
        </Typography>
      </div>
    </div>
  );
};
