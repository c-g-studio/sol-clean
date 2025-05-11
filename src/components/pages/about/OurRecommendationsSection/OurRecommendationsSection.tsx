'use client';

import { FC, JSX } from 'react';

import { AppContainer } from '@/components/common/AppContainer/AppContainer';
import { Typography } from '@/components/common/Typography/Typography';

import { OurMissionItem } from '@/components/common/OurMissionItem/OurMissionItem';

import s from './styles.module.scss';

type TDataItem = {
  icon: JSX.Element;
  title: string;
  text: string;
};

type TOurRecommendationsSectionProps = {
  classes?: string;
  data: TDataItem[];
};

export const OurRecommendationsSection: FC<TOurRecommendationsSectionProps> = ({
  classes = '',
  data
}) => {
  return (
    <section className={`${s.ourRecommendationsSection} ${classes}`}>
      <AppContainer>
        <Typography variant={'h2'} className={s.sectionTitle}>
          Unsere <Typography variant={'decorSpan'}>Mission</Typography>
        </Typography>
        <ul className={s.list}>
          {data.map(({ icon, title, text }, index) => {
            return (
              <OurMissionItem
                key={index}
                icon={icon}
                title={title}
                text={text}
              />
            );
          })}
        </ul>
      </AppContainer>
    </section>
  );
};
