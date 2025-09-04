import { FC, JSX } from 'react';

import { Typography } from '@/components/common/Typography/Typography';
import { SpriteIcon } from '@/components/icons/SpriteIcon/SpriteIcon';


import iconS from '@/components/pages/about/OurRecommendationsSection/styles.module.scss';
import s from './styles.module.scss';

type TOurMissionItemProps = {
  // icon: JSX.Element;
  icon: JSX.Element | string;
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
      {/* <div className={s.iconBox}>{icon}</div> */}
      <div className={s.iconBox}>
        {typeof icon === "string" ? (
          <SpriteIcon name={icon} className={iconS.icon} width={64} height={64} />
        ) : (
          icon
        )}

      </div>
      <Typography variant={'h3'} className={s.listItemTitle}>
        {title}
      </Typography>
      <Typography variant={'body2'} className={s.listItemText}>
        {text}
      </Typography>
    </li>
  );
};
