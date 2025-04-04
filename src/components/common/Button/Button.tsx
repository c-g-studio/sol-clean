import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import s from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  icon?: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  icon,
  children,
  className = '',
  ...props
}) => {
  const classNames = [s.button, s[variant], s[size], className].join(' ');

  return (
    <button className={classNames} {...props}>
      {icon && <span className={s.icon}>{icon}</span>}
      {children}
    </button>
  );
};
