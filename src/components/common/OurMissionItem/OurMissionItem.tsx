import { FC, JSX } from 'react';

import { Typography } from '@/components/common/Typography/Typography';

import s from './styles.module.scss';

type TOurMissionItemProps = {
  icon: JSX.Element;
  title: string;
  text: string;
};

export const OurMissionItem: FC<TOurMissionItemProps> = ({
  icon,
  title,
  text
}) => {
  return (
    <li className={s.listItem}>
      <div className={s.iconBox}>{icon}</div>
      <Typography variant={'h3'} className={s.listItemTitle}>
        {title}
      </Typography>
      <Typography variant={'body2'} className={s.listItemText}>
        {text}
      </Typography>
    </li>
  );
};
