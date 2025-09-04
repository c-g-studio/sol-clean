'use client';

import {
  Controller,
  Control,
  FieldValues,
  Path,
  FieldErrors,
  FieldNamesMarkedBoolean
} from 'react-hook-form';
import { Checkbox } from '@/components/common/formUI/Checkbox/Checkbox';
import { Typography } from '@/components/common/Typography/Typography';
import { Error } from '@/components/common/formUI/Error/Error';
import s from './styles.module.scss';

type JobCheckboxGroupProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  errors?: FieldErrors<T>;
  dirtyFields?: FieldNamesMarkedBoolean<T>;
  isSubmitted?: boolean;
};

const JOB_OPTIONS = ['Reiniger', 'Elektriker', 'Aussendienstler'] as const;

export const JobCheckboxGroup = <T extends FieldValues>({
  control,
  name,
  errors
}: JobCheckboxGroupProps<T>) => {
  return (
    <div className={s.checkboxGroup}>
      <Typography variant="h3" className={s.checkBoxTitle}>
        Wir suchen
      </Typography>
      <div className={s.checkboxes}>
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <>
              {JOB_OPTIONS.map(option => (
                <Checkbox
                  key={option}
                  label={option}
                  id={option}
                  checked={!!field.value?.includes(option)}
                  onCheckedChange={checked => {
                    const currentValue: string[] = field.value || [];
                    const newValue = checked
                      ? [...currentValue, option]
                      : currentValue.filter(v => v !== option);
                    field.onChange(newValue);
                  }}
                />
              ))}
            </>
          )}
        />
      </div>
      <Error name={name} errors={errors || {}} />
    </div>
  );
};
