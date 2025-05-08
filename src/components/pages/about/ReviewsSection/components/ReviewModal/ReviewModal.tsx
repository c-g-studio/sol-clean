import { RatingMarkup } from '@/components/common/RatingMarkup/RatingMarkup';
import { Typography } from '@/components/common/Typography/Typography';

import s from './styles.module.scss';
import { FC } from 'react';
import { ModalLayout } from '@/components/common/ModalLayout/ModalLayout';

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
  isOpen: boolean;
  onClose: () => void;
};

export const ReviewModal: FC<TReviewModalProps> = ({
  onClose,
  isOpen,
  review
}) => {
  return (
    <ModalLayout onClose={onClose} isOpen={isOpen}>
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
    </ModalLayout>
  );
};
