import { FC, JSX, ReactNode } from 'react';
import classNames from 'classnames';

import s from './styles.module.scss';

type Variant = 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'p' | 'decorSpan';

interface TypographyProps {
  variant: Variant;
  children: ReactNode;
  className?: string;
}

const mergeClassNames = (
  moduleClass: string | string[] | undefined,
  className?: string,
  options?: {
    classNameFirst?: boolean; // если true — ставит className перед moduleClass
  }
): string => {
  const mod = Array.isArray(moduleClass) ? moduleClass : [moduleClass];

  return options?.classNameFirst
    ? classNames(className, ...mod)
    : classNames(...mod, className);
};

const tagMap: Record<Variant, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  p: 'p',
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

  return (
    <Tag
      className={mergeClassNames(s[variant], className, {
        classNameFirst: false
      })}
    >
      {children}
    </Tag>
  );
};
