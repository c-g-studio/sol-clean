'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Error } from '@/components/common/formUI/Error/Error';
import { Select } from '@/components/common/Select/Select';
import { Typography } from '@/components/common/Typography/Typography';
import { getFieldClass } from '@/heplers/getFieldClass';

import s from './styles.module.scss';
import { Button } from '@/components/common/Button/Button';
import { generateYearOptions } from '@/utils/generateYearOptions';
import { Checkbox } from '@/components/common/formUI/Checkbox/Checkbox';

type TData = {
  address: string;
  ownerType: string;
  solarData?: unknown;
  year: string;
  nominalExit: string;
  nearBy: string[];
};

type TStepThirdProps = {
  onNextAction: (data: TData) => void;
  onBackAction: () => void;
  defaultValues?: Partial<TData>;
};

const schema = z.object({
  year: z.string().min(1, 'Geben Sie die Adresse ein'),
  nominalExit: z.string().min(1, 'Wählen Sie den Besitzer'),
  nearBy: z.array(z.string()).optional()
});

type TStepThirdData = z.infer<typeof schema>;

const NEARBY_OPTIONS = [
  'Wald',
  'Acker',
  'Landwirtschaft',
  'Wiesen',
  'Hauptstraße'
];

export const StepThird: FC<TStepThirdProps> = ({
  onNextAction,
  onBackAction,
  defaultValues
}) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, dirtyFields, isSubmitted }
  } = useForm<TStepThirdData>({
    resolver: zodResolver(schema),
    defaultValues: {
      year: '',
      nominalExit: '',
      nearBy: [],
      ...defaultValues
    }
  });

  const onSubmit = (data: TStepThirdData) => {
    // Собираем полные данные TData
    const fullData: TData = {
      address: defaultValues?.address ?? '',
      ownerType: defaultValues?.ownerType ?? '',
      solarData: defaultValues?.solarData,
      ...data,
      nearBy: data.nearBy ?? []
    };

    onNextAction(fullData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={s.box}>
        <div className={s.mobileWrapper}>
          <div className={s.checkboxGroup}>
            <Typography variant="body3" className={s.checkBoxTitle}>
              Befindet sich in der Nähe
            </Typography>
            <div className={s.checkboxes}>
              <Controller
                control={control}
                name="nearBy"
                render={({ field }) => (
                  <>
                    {NEARBY_OPTIONS.map(option => (
                      <Checkbox
                        key={option}
                        label={option}
                        id={option}
                        checked={!!field.value?.includes(option)}
                        onCheckedChange={checked => {
                          const newValue = checked
                            ? [...(field.value || []), option]
                            : field.value?.filter(v => v !== option) || [];
                          field.onChange(newValue);
                        }}
                      />
                    ))}
                  </>
                )}
              />
            </div>
          </div>

          <div className={s.boxDesktop}>
            <div className={s.selectWrapper}>
              <label className={s.label}>Baujahr der Anlage</label>
              <Controller
                control={control}
                name="year"
                render={({ field }) => (
                  <Select
                    placeholder={`${new Date().getFullYear()}`}
                    ariaLabel="Baujahr"
                    data={generateYearOptions()}
                    onValueChange={field.onChange}
                    className={getFieldClass(
                      'year',
                      '',
                      errors,
                      dirtyFields,
                      isSubmitted,
                      s.valid,
                      s.invalid
                    )}
                    {...field}
                  />
                )}
              />
              <Error name="year" errors={errors} />
            </div>

            <div className={s.inputWrapper}>
              <label className={s.label}>Nennleistung ( in kWp )</label>
              <input
                type="text"
                placeholder="Höchstleistungen erbringen kWp"
                className={`${s.input} ${getFieldClass(
                  'nominalExit',
                  s.input,
                  errors,
                  dirtyFields,
                  isSubmitted,
                  s.valid,
                  s.invalid
                )}`}
                {...register('nominalExit')}
              />
              {errors.nominalExit && (
                <Error errors={errors} name="nominalExit" />
              )}
            </div>

            <div className={s.totalBoxFirst}>
              <Typography variant="body4" className={s.title}>
                Berechnete Verschmutzung
              </Typography>
              <div className={s.totalBox}>
                <Typography variant="body3" className={s.total}>
                  00
                </Typography>
                <Typography variant="body3" className={s.total}>
                  %
                </Typography>
              </div>
            </div>

            <div>
              <Typography variant="body4" className={s.title}>
                Altersbedingter Effizienzverlust
              </Typography>
              <div className={s.totalBox}>
                <Typography variant="body3" className={s.total}>
                  00
                </Typography>
                <Typography variant="body3" className={s.total}>
                  %
                </Typography>
              </div>
            </div>
          </div>

          <div className={s.checkboxGroupDesktop}>
            <Typography variant="body3" className={s.checkBoxTitle}>
              Befindet sich in der Nähe
            </Typography>
            <div className={s.checkboxes}>
              <Controller
                control={control}
                name="nearBy"
                render={({ field }) => (
                  <>
                    {NEARBY_OPTIONS.map(option => (
                      <Checkbox
                        key={option}
                        label={option}
                        id={option}
                        checked={!!field.value?.includes(option)}
                        onCheckedChange={checked => {
                          const newValue = checked
                            ? [...(field.value || []), option]
                            : field.value?.filter(v => v !== option) || [];
                          field.onChange(newValue);
                        }}
                      />
                    ))}
                  </>
                )}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={s.buttonsBox}>
        <Button
          type="button"
          buttonType="buttonWithArrow"
          className={`${s.button} ${s.buttonBack}`}
          onClick={onBackAction}
        >
          Zurück
        </Button>
        <Button type="submit" buttonType="buttonWithArrow" className={s.button}>
          Weiter
        </Button>
      </div>
    </form>
  );
};
