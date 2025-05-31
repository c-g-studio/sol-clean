import { FieldErrors, FieldValues } from 'react-hook-form';

export const getFieldClass = <T extends FieldValues>(
  fieldName: keyof T,
  baseClass: string,
  errors: FieldErrors<T>,
  dirtyFields: Partial<Record<keyof T, boolean | boolean[]>>, // разрешаем boolean или boolean[]
  isSubmitted: boolean,
  validClasses: string,
  invalidClasses: string
): string => {
  const hasError = !!errors[fieldName];

  const dirty = dirtyFields[fieldName];
  const isDirty = Array.isArray(dirty) ? dirty.some(Boolean) : !!dirty;

  if (!isDirty && !isSubmitted) return baseClass;

  return hasError
    ? `${baseClass} ${invalidClasses}`
    : `${baseClass} ${validClasses}`;
};
