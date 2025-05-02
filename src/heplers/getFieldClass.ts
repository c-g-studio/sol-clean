import { FieldErrors, FieldValues } from 'react-hook-form';

export const getFieldClass = <T extends FieldValues>(
  fieldName: keyof T,
  baseClass: string,
  errors: FieldErrors<T>,
  dirtyFields: Partial<Record<keyof T, boolean>>,
  isSubmitted: boolean,
  validClasses: string,
  invalidClasses: string
): string => {
  const hasError = !!errors[fieldName];
  const isDirty = dirtyFields[fieldName];

  if (!isDirty && !isSubmitted) return baseClass;

  return hasError
    ? `${baseClass} ${invalidClasses}`
    : `${baseClass} ${validClasses}`;
};
