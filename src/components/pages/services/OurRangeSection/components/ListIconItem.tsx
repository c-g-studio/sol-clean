import { FC } from 'react';
import classNames from 'classnames';

import { SpriteIcon } from '@/components/icons/SpriteIcon/SpriteIcon';
import { Typography } from '@/components/common/Typography/Typography';

import s from './styles.module.scss';

export interface IListItemIconProps {
  iconName: string;
  text: string;
  className?: string;
}

export const ListItemIcon: FC<IListItemIconProps> = ({
  iconName,
  text,
  className
}) => {
  return (
    <li className={classNames(s.item, className)}>
      <SpriteIcon name={iconName} className={s.icon} width={16} height={16} />
      <Typography variant="body3" className={s.text}>
        {text}
      </Typography>
    </li>
  );
};
