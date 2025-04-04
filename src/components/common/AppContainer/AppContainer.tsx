import { FC, ReactNode } from 'react';

import s from './styles.module.scss';

type TAppContainerProps = {
  children: ReactNode;
  classes?: string;
};

export const AppContainer: FC<TAppContainerProps> = ({
  children,
  classes = ''
}) => {
  return <div className={`${s.container} ${classes}`}>{children}</div>;
};
