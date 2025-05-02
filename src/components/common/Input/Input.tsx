import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path
} from 'react-hook-form';
import { useMask } from '@react-input/mask';

import { getFieldClass } from '@/heplers/getFieldClass';

import s from './styles.module.scss';

type InputProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  errors: FieldErrors<T>;
  dirtyFields: Partial<Record<keyof T, boolean>>;
  isSubmitted: boolean;
};

export const Input = <T extends FieldValues>({
  name,
  control,
  errors,
  dirtyFields,
  isSubmitted
}: InputProps<T>) => {
  const inputRef = useMask({
    mask: '+49 ___-___-__-__',
    replacement: { _: /\d/ }
  });

  return (
    <label className={s.label}>
      <span className={s.labelName}>Tel</span>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            defaultValue={''}
            type="tel"
            placeholder="+49"
            className={getFieldClass(
              name,
              s.input,
              errors,
              dirtyFields,
              isSubmitted,
              s.valid,
              s.invalid
            )}
            ref={inputRef}
            onChange={field.onChange}
            value={field.value ?? ''}
            name={field.name}
          />
        )}
      />

      {errors[name] && (
        <span className={s.error}>
          {(errors[name]?.message ?? '') as string}
        </span>
      )}
    </label>
  );
};
