import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { RightArrow } from '@/components/icons/arrows/RightArrow/RightArrow';

import s from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  icon?: ReactNode;
  buttonType?: 'withArrow';
}

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  icon,
  children,
  className = '',
  buttonType,
  ...props
}) => {
  const classNames = [s.button, s[variant], s[size], className].join(' ');

  if (buttonType === 'withArrow') {
    return (
      <button className={`${s.buttonWithArrow} ${className}`} {...props}>
        <span className={s.buttonWithArrowText}>{children}</span>
        <RightArrow className={s.arrowIcon} />
      </button>
    );
  }

  return (
    <button className={classNames} {...props}>
      {icon && <span className={s.icon}>{icon}</span>}
      {children}
    </button>
  );
};
