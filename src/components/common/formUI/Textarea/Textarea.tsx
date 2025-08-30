import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister
} from 'react-hook-form';

import cn from 'classnames';

import { Error } from '@/components/common/formUI/Error/Error';

import { getFieldClass } from '@/heplers/getFieldClass';

import s from './styles.module.scss';

type TextareaProps<T extends FieldValues> = {
  name: Path<T>;
  labelName: string;
  labelClassName?: string
  placeholder?: string;
  errors: FieldErrors<T>;
  dirtyFields: Partial<Record<keyof T, boolean>>;
  isSubmitted: boolean;
  register: UseFormRegister<T>;
};

export const Textarea = <T extends FieldValues>({
  name,
  labelName,
  labelClassName,
  placeholder,
  errors,
  dirtyFields,
  isSubmitted,
  register
}: TextareaProps<T>) => {
  return (
    <label className={s.label}>
      <span className={cn(s.labelName, labelClassName)}>{labelName}</span>
      <textarea
        placeholder={placeholder ? placeholder : "Hi..."}
        className={getFieldClass(
          name,
          s.textarea,
          errors,
          dirtyFields,
          isSubmitted,
          s.valid,
          s.invalid
        )}
        {...register(name)}
      />
      <Error name={name} errors={errors} />
    </label>
  );
};
