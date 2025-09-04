import { Ref } from 'react';
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
  FieldNamesMarkedBoolean
} from 'react-hook-form';

import cn from 'classnames';

import { Error } from '@/components/common/formUI/Error/Error';

import { getFieldClass } from '@/heplers/getFieldClass';

import s from './styles.module.scss';

type InputProps<T extends FieldValues> = {
  name: Path<T>;
  labelClassName?: string;
  control: Control<T>;
  errors: FieldErrors<T>;
  dirtyFields: FieldNamesMarkedBoolean<T>;
  isSubmitted: boolean;
  maskRef?: Ref<HTMLInputElement>;
  labelName: string;
  placeholder: string;
  type: string;
  autoComplete?: string
};

export const Input = <T extends FieldValues>({
  name,
  labelClassName,
  control,
  errors,
  dirtyFields,
  isSubmitted,
  maskRef,
  labelName,
  placeholder,
  type,
  autoComplete
}: InputProps<T>) => {
  return (
    <label className={s.label}>
      <span className={cn(s.labelName, labelClassName)}>{labelName}</span>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            type={type}
            placeholder={placeholder}
            autoComplete={autoComplete}
            className={getFieldClass(
              name,
              s.input,
              errors,
              dirtyFields,
              isSubmitted,
              s.valid,
              s.invalid
            )}
            ref={maskRef ? maskRef : undefined}
            onChange={field.onChange}
            value={field.value ?? ''}
            name={field.name}
          />
        )}
      />

      <Error name={name} errors={errors} />
    </label>
  );
};
