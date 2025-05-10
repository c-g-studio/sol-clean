import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path
} from 'react-hook-form';

import { Error } from '@/components/common/formUI/Error/Error';

import { getFieldClass } from '@/heplers/getFieldClass';

import s from './styles.module.scss';

type InputProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  errors: FieldErrors<T>;
  dirtyFields: Partial<Record<keyof T, boolean>>;
  isSubmitted: boolean;
  maskRef?: any;
  labelName: string;
  placeholder: string;
  type: string;
};

export const Input = <T extends FieldValues>({
  name,
  control,
  errors,
  dirtyFields,
  isSubmitted,
  maskRef,
  labelName,
  placeholder,
  type
}: InputProps<T>) => {
  return (
    <label className={s.label}>
      <span className={s.labelName}>{labelName}</span>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            type={type}
            placeholder={placeholder}
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
