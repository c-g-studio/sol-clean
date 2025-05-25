import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FC,
  ReactNode
} from 'react';
import Link from 'next/link';

import { RightArrow } from '@/components/icons/arrows/RightArrow/RightArrow';

import s from './styles.module.scss';

type BaseProps = {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  icon?: ReactNode;
  buttonType?: 'withArrow' | 'buttonLink' | 'buttonWithArrow' | 'buttonDiv';
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

type ButtonLinkProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'type' | 'onCopy'> & {
    buttonType: 'buttonLink' | 'withArrow';
    href: string;
  };

type RegularButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    buttonType?: undefined | 'buttonWithArrow';
    href?: never;
  };

type ButtonDivProps = BaseProps & {
  buttonType: 'buttonDiv';
  href?: never;
};

type ButtonProps = ButtonLinkProps | RegularButtonProps | ButtonDivProps;

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  icon,
  children,
  className = '',
  buttonType,
  href = '',
  onClick,
  ...props
}) => {
  const classNames = [s.button, s[variant], s[size], className].join(' ');

  if (buttonType === 'withArrow') {
    return (
      <Link className={`${s.buttonWithArrow} ${className}`} href={href}>
        <span className={s.buttonWithArrowText}>{children}</span>
        <RightArrow className={s.arrowIcon} />
      </Link>
    );
  }

  if (buttonType === 'buttonWithArrow') {
    return (
      <button className={`${s.buttonWithArrow} ${className}`} onClick={onClick}>
        <span className={s.buttonWithArrowText}>{children}</span>
        <RightArrow className={s.arrowIcon} />
      </button>
    );
  }

  if (buttonType === 'buttonLink') {
    return (
      <Link
        href={href}
        className={classNames}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {icon && <span className={s.icon}>{icon}</span>}
        {children}
      </Link>
    );
  }

  if (buttonType === 'buttonDiv') {
    return (
      <div className={`${s.buttonWithArrow} ${className}`}>
        <span className={s.buttonWithArrowText}>{children}</span>
        <RightArrow className={s.arrowIcon} />
      </div>
    );
  }

  return (
    <button
      className={classNames}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {icon && <span className={s.icon}>{icon}</span>}
      {children}
    </button>
  );
};
