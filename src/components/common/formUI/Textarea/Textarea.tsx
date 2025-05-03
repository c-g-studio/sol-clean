import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister
} from 'react-hook-form';

import { Error } from '@/components/common/formUI/Error/Error';

import { getFieldClass } from '@/heplers/getFieldClass';

import s from './styles.module.scss';

type TextareaProps<T extends FieldValues> = {
  name: Path<T>;
  errors: FieldErrors<T>;
  dirtyFields: Partial<Record<keyof T, boolean>>;
  isSubmitted: boolean;
  register: UseFormRegister<T>;
};

export const Textarea = <T extends FieldValues>({
  name,
  errors,
  dirtyFields,
  isSubmitted,
  register
}: TextareaProps<T>) => {
  return (
    <label className={s.label}>
      <span className={s.labelName}>Nachricht</span>
      <textarea
        placeholder="Hi..."
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
