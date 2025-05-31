'use client';

import { z } from 'zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Error } from '@/components/common/formUI/Error/Error';
import { Button } from '@/components/common/Button/Button';
import { Typography } from '@/components/common/Typography/Typography';

import { getFieldClass } from '@/heplers/getFieldClass';

import s from './styles.module.scss';

type TData = {
  address: string;
  ownerType: string;
  solarData?: unknown;
  year: string;
  nominalExit: string;
  nearBy: string[];
  energyGeneration: string;
  selfConsumptionEnergy: string;
};

type TStepThirdProps = {
  onNextAction: (data: TData) => void;
  onBackAction: () => void;
  defaultValues?: Partial<TData>;
};

const schema = z.object({
  energyGeneration: z
    .string()
    .min(1, 'Geben Sie an, wie viel Leergia erzeugt wird'),
  selfConsumptionEnergy: z
    .string()
    .min(1, 'Geben Sie an, wie viel Leergia Sie verwenden')
});

type TStepThirdData = z.infer<typeof schema>;

export const StepFourth: FC<TStepThirdProps> = ({
  onNextAction,
  onBackAction,
  defaultValues
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isSubmitted }
  } = useForm<TStepThirdData>({
    resolver: zodResolver(schema),
    defaultValues: {
      energyGeneration: '',
      selfConsumptionEnergy: '',
      ...defaultValues
    }
  });

  const onSubmit = (data: TStepThirdData) => {
    const fullData: TData = {
      address: defaultValues?.address ?? '',
      ownerType: defaultValues?.ownerType ?? '',
      solarData: defaultValues?.solarData,
      year: defaultValues?.year ?? '',
      nominalExit: defaultValues?.nominalExit ?? '',
      nearBy: defaultValues?.nearBy ?? [],
      energyGeneration: data.energyGeneration,
      selfConsumptionEnergy: data.selfConsumptionEnergy
    };

    onNextAction(fullData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={s.inputsContainer}>
        <div className={s.inputWrapper}>
          <label className={s.label}>
            Berechnung wie viel Energie erzeugt wird (kWh)
          </label>
          <Typography variant={'body2'} className={s.text}>
            Sie können die Nummer verändern, wenn Sie eine detaillierteren Wert
            haben.
          </Typography>
          <input
            type="number"
            placeholder="135 kWp"
            className={`${s.input} ${getFieldClass(
              'energyGeneration',
              s.input,
              errors,
              dirtyFields,
              isSubmitted,
              s.valid,
              s.invalid
            )}`}
            {...register('energyGeneration')}
          />
          {errors.energyGeneration && (
            <Error errors={errors} name="energyGeneration" />
          )}
        </div>

        <div className={s.inputWrapper}>
          <label className={s.label}>
            Wie viel Prozent des Stroms verbrauchen Sie selbst
          </label>
          <input
            type="number"
            placeholder="Wie viel Prozent verbrauchen Sie selbst"
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
          />
          {errors.selfConsumptionEnergy && (
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
        <Button type="submit" buttonType="buttonWithArrow" className={s.button}>
          Weiter
        </Button>
      </div>
    </form>
  );
};
