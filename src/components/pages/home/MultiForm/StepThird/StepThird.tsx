'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Error } from '@/components/common/formUI/Error/Error';
import { Select } from '@/components/common/Select/Select';
import { Button } from '@/components/common/Button/Button';
import { Checkbox } from '@/components/common/formUI/Checkbox/Checkbox';
import { Typography } from '@/components/common/Typography/Typography';

import { getFieldClass } from '@/heplers/getFieldClass';
import { generateYearOptions } from '@/utils/generateYearOptions';

import s from './styles.module.scss';

type TData = {
  address: string;
  ownerType: string;
  solarData?: unknown;
  year: string;
  nominalExit: string;
  nearBy: string[];
  absolutePollution: number;
  efficiencyLoss: number;
};

type TStepThirdProps = {
  onNextAction: (data: TData) => void;
  onBackAction: () => void;
  defaultValues?: Partial<TData>;
};

type TPollutionTableType = 'Norm' | 'Wald' | 'Acker' | 'Bauernhof' | 'Wiese';

const pollutionTable: Record<TPollutionTableType, number[]> = {
  Norm: [
    4.0, 6.0, 7.8, 9.42, 10.88, 11.84, 12.8, 13.76, 14.72, 15.68, 16.32, 16.96,
    17.6, 18.24, 18.88, 19.52, 20.16, 20.8, 21.44, 22.08
  ],
  Wald: [
    6.4, 9.6, 12.5, 15.1, 17.4, 18.9, 20.4, 21.94, 23.48, 25.02, 26.04, 27.06,
    28.08, 29.1, 30.12, 31.14, 32.16, 33.18, 34.2, 35.22
  ],
  Acker: [
    6.8, 10.2, 13.26, 16.01, 18.5, 20.13, 21.77, 23.41, 25.05, 26.69, 27.77,
    28.85, 29.93, 31.01, 32.09, 33.17, 34.25, 35.33, 36.41, 37.49
  ],
  Bauernhof: [
    8.8, 13.2, 17.16, 20.72, 23.94, 23.68, 25.6, 27.52, 29.44, 31.36, 32.63,
    33.9, 35.17, 36.44, 37.71, 38.98, 40.25, 41.52, 42.79, 44.06
  ],
  Wiese: [
    4.8, 7.2, 9.36, 11.3, 13.06, 14.21, 15.36, 16.51, 17.66, 18.81, 19.57,
    20.33, 21.09, 21.85, 22.61, 23.37, 24.13, 24.89, 25.65, 26.41
  ]
};

const schema = z.object({
  year: z.string().min(1, 'Geben Sie die Adresse ein'),
  nominalExit: z.string().min(1, 'Wählen Sie den Besitzer'),
  nearBy: z.array(z.string()).optional()
});

type TStepThirdData = z.infer<typeof schema>;

const NEARBY_OPTIONS = ['Wald', 'Acker', 'Bauernhof', 'Wiese', 'Norm'];

export const StepThird: FC<TStepThirdProps> = ({
  onNextAction,
  onBackAction,
  defaultValues
}) => {
  const {
    register,
    control,
    handleSubmit,
    watch,
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

  const selectedNearBy = watch('nearBy');
  const year = watch('year');

  let absolutePollution = null;
  const age = new Date().getFullYear() - parseInt(year) + 1;
  const efficiencyLoss = ((1 - 0.995 ** age) * 100).toFixed(2);

  if (selectedNearBy?.length) {
    absolutePollution = Math.max(
      ...selectedNearBy.map(item => {
        return pollutionTable[item as TPollutionTableType][
          new Date().getFullYear() - Number(year)
        ];
      })
    );
  }

  const defaultAbsolutePollution =
    pollutionTable[defaultValues?.ownerType as TPollutionTableType][
      new Date().getFullYear() - Number(year)
    ];

  const onSubmit = (data: TStepThirdData) => {
    const fullData: TData = {
      address: defaultValues?.address ?? '',
      ownerType: defaultValues?.ownerType ?? '',
      solarData: defaultValues?.solarData,
      ...data,
      nearBy: data.nearBy ?? [],
      absolutePollution: absolutePollution || defaultAbsolutePollution,
      efficiencyLoss: Number(efficiencyLoss)
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
                type="number"
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
                  {absolutePollution || defaultAbsolutePollution || '00'}
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
                  {efficiencyLoss || '00'}
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
