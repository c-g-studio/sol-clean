import { FC } from 'react';
import { FieldErrors } from 'react-hook-form';

import s from './styles.module.scss';

type TErrorProps = {
  errors: FieldErrors;
  name: string;
};

export const Error: FC<TErrorProps> = ({ errors, name }) => {
  return (
    errors[name] && (
      <span className={s.error}>{(errors[name]?.message ?? '') as string}</span>
    )
  );
};
