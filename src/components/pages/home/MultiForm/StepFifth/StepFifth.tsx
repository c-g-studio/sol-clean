'use client';

import { z } from 'zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Error } from '@/components/common/formUI/Error/Error';
import { Button } from '@/components/common/Button/Button';

import { getFieldClass } from '@/heplers/getFieldClass';

import s from './styles.module.scss';
import { Typography } from '@/components/common/Typography/Typography';

type TData = {
  address: string;
  solarData?: unknown;
  year: string;
  nominalExit: string;
  nearBy: string[];
  energyGeneration: string;
  selfConsumptionEnergy: string;
  price: string;
};

type TStepThirdProps = {
  onNextAction: (data: TData) => void;
  onBackAction: () => void;
  defaultValues?: Partial<TData>;
};

const schema = z.object({
  selfConsumptionEnergy: z
    .string()
    .min(1, 'Geben Sie den Eigenverbrauch in % ein'),
  price: z.string().min(1, 'Indicate the price cent/kWh')
});

type TStepThirdData = z.infer<typeof schema>;

export const StepFifth: FC<TStepThirdProps> = ({
  onNextAction,
  onBackAction,
  defaultValues
}) => {
  console.log('defaultValues', defaultValues);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, dirtyFields, isSubmitted, isValid }
  } = useForm<TStepThirdData>({
    resolver: zodResolver(schema),
    defaultValues: {
      selfConsumptionEnergy: defaultValues?.selfConsumptionEnergy ?? '',
      price: defaultValues?.price ?? '',
      ...defaultValues
    }
  });

  const selfConsumption = Number(watch('selfConsumptionEnergy')) || 0;
  console.log('selfConsumption: ', selfConsumption);
  const energySold = (100 - selfConsumption).toFixed(2);

  console.log('energySold', energySold);

  const onSubmit = (data: TStepThirdData) => {
    const fullData: TData = {
      address: defaultValues?.address ?? '',
      solarData: defaultValues?.solarData,
      year: defaultValues?.year ?? '',
      nominalExit: defaultValues?.nominalExit ?? '',
      nearBy: defaultValues?.nearBy ?? [],
      energyGeneration: defaultValues?.energyGeneration ?? '',
      selfConsumptionEnergy: data.selfConsumptionEnergy ?? '',
      price: data.price
      // energySold
    };

    onNextAction(fullData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={s.inputsContainer}>
        <div className={s.inputWrapper}>
          <label className={s.label}>
            Wie viel Prozent des Stroms verbrauchen Sie selbst
          </label>
          <input
            type="number"
            placeholder="Geben Sie ein, Wie viel Prozent verbrauchen Sie selbst %"
            className={`${s.input} ${getFieldClass(
              'selfConsumptionEnergy',
              s.input,
              errors,
              dirtyFields,
              isSubmitted,
              s.valid,
              s.invalid
            )}`}
            {...register('selfConsumptionEnergy')}
          />{' '}
        </div>
        {errors.price && <Error errors={errors} name="selfConsumptionEnergy" />}
        <div className={s.totalContainer}>
          <Typography variant="body4" className={s.title}>
            Wie viel Prozent des Stroms wird eingespeist
          </Typography>
          <div className={s.totalBox}>
            <Typography variant="body3" className={s.total}>
              {energySold || '00'}
            </Typography>
            <Typography variant="body3" className={s.total}>
              %
            </Typography>
          </div>
        </div>
        <div className={s.inputWrapper}>
          <label className={s.label}>Einspeise - Konditionen</label>
          <input
            type="number"
            placeholder="Geben Sie ein zu welchen Konditionen Sie einspeisen Cent/kWh"
            className={`${s.input} ${getFieldClass(
              'price',
              s.input,
              errors,
              dirtyFields,
              isSubmitted,
              s.valid,
              s.invalid
            )}`}
            {...register('price')}
          />
          {errors.price && (
            <Error errors={errors} name="selfConsumptionEnergy" />
          )}
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
        <Button
          type="submit"
          buttonType="buttonWithArrow"
          className={`${s.button} ${isValid ? s.buttonActive : s.buttonInactive}`}
        >
          Weiter
        </Button>
      </div>
    </form>
  );
};
