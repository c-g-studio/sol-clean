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
  ownerType: string;
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
  price: z.string().min(1, 'Indicate the price cent/kWh')
});

type TStepThirdData = z.infer<typeof schema>;

export const StepFifth: FC<TStepThirdProps> = ({
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
      price: '',
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
      energyGeneration: defaultValues?.energyGeneration ?? '',
      selfConsumptionEnergy: defaultValues?.selfConsumptionEnergy ?? '',
      price: data.price
    };

    onNextAction(fullData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={s.inputsContainer}>
        <div className={s.inputWrapper}>
          <div className={s.totalContainer}>
            <Typography variant="body4" className={s.title}>
              Wie viel Prozent des Stroms wird eingespeist
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

          <label className={s.label}>Einspeise - Konditionen</label>
          <input
            type="number"
            placeholder="Konditionen Sie einspeisen Cent/kWh"
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
        <Button type="submit" buttonType="buttonWithArrow" className={s.button}>
          Weiter
        </Button>
      </div>
    </form>
  );
};
