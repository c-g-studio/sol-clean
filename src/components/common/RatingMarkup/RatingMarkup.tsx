import { FC } from 'react';

import { StarIcon } from '@/components/icons/StarIcon';

import s from './styles.module.scss';

type TRatingMarkup = {
  rating: number;
  iconClass?: string;
  idPrefix?: string;
};

export const RatingMarkup: FC<TRatingMarkup> = ({
  rating = 0,
  iconClass = '',
  idPrefix = 'rating'
}) => {
  const markup = [];

  for (let i = 1; i <= 5; i++) {
    const normalizedRating = Math.min(Math.max(rating, 0), 1);
    const gradientId = `${idPrefix}-grad-${i}-${normalizedRating.toFixed(2)}`;

    markup.push(
      <StarIcon
        key={i}
        rating={normalizedRating}
        className={`${s.starIcon} ${iconClass}`}
        gradientId={gradientId}
      />
    );

    rating -= 1;
  }

  return <>{markup}</>;
};
