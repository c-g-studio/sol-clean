import { FC, JSX, ReactNode } from 'react';

import s from './styles.module.scss';

type Variant = 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'decorSpan';

interface TypographyProps {
  variant: Variant;
  children: ReactNode;
  className?: string;
}

const tagMap: Record<Variant, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  body1: 'p',
  body2: 'p',
  decorSpan: 'span'
};

export const Typography: FC<TypographyProps> = ({
  variant,
  children,
  className
}) => {
  const Tag = tagMap[variant];

  return <Tag className={`${s[variant]} ${className || ''}`}>{children}</Tag>;
};
