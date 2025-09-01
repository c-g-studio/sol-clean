import { FieldErrors, FieldValues, FieldNamesMarkedBoolean } from 'react-hook-form';

export const getFieldClass = <T extends FieldValues>(
  fieldName: keyof T,
  baseClass: string,
  errors: FieldErrors<T>,
  dirtyFields: FieldNamesMarkedBoolean<T>, // разрешаем boolean или boolean[]
  isSubmitted: boolean,
  validClasses: string,
  invalidClasses: string
): string => {
  const hasError = !!errors[fieldName];

  const dirty = dirtyFields[fieldName as keyof typeof dirtyFields]
  const isDirty = Array.isArray(dirty) ? dirty.some(Boolean) : !!dirty;

  if (!isDirty && !isSubmitted) return baseClass;

  return hasError
    ? `${baseClass} ${invalidClasses}`
    : `${baseClass} ${validClasses}`;
};
