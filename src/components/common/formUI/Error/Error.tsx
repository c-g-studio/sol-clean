import { FC } from 'react';
import { FieldErrors } from 'react-hook-form';

import s from './styles.module.scss';

type TErrorProps = {
  errors: FieldErrors;
  name: string;
  className?: string;
};

export const Error: FC<TErrorProps> = ({ errors, name, className = '' }) => {
  return (
    errors[name] && (
      <span className={`${s.error} ${className}`}>
        {(errors[name]?.message ?? '') as string}
      </span>
    )
  );
};
