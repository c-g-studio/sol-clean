import Image from 'next/image';
import { FC } from 'react';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';

import { Button } from '@/components/common/Button/Button';
import { Error } from '@/components/common/formUI/Error/Error';

import s from './styles.module.scss';

type TCardOptionProps = {
  value: 'personal' | 'business';
  selected: boolean;
  onSelect: (value: 'personal' | 'business') => void;
  imageSrc: string;
  label: string;
};

type TStepFirstProps = {
  onNext: (data: z.infer<typeof schema>) => void;
  defaultValues?: Partial<z.infer<typeof schema>>;
};

const schema = z.object({
  typeOfUse: z.enum(['business', 'personal'], {
    message: 'Wählen Sie Art der Verwendung',
    required_error: 'Wählen Sie Art der Verwendung'
  })
});

export const StepFirst: FC<TStepFirstProps> = ({ onNext, defaultValues }) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      typeOfUse: undefined,
      ...defaultValues
    }
  });

  const onSubmit = (data: z.infer<typeof schema>) => onNext(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="typeOfUse"
        control={control}
        render={({ field }) => (
          <div className={s.cardGroup}>
            <CardOption
              value="personal"
              selected={field.value === 'personal'}
              onSelect={field.onChange}
              imageSrc="/img/home/calculatorSection/stepFirst/personal.png"
              label="Zuhause"
            />
            <CardOption
              value="business"
              selected={field.value === 'business'}
              onSelect={field.onChange}
              imageSrc="/img/home/calculatorSection/stepFirst/business.png"
              label="Business"
            />
          </div>
        )}
      />

      {errors.typeOfUse && (
        <Error errors={errors} name={'typeOfUse'} className={s.error} />
      )}

      <Button
        type={'submit'}
        buttonType={'buttonWithArrow'}
        className={s.button}
      >
        Weiter
      </Button>
    </form>
  );
};

const CardOption: FC<TCardOptionProps> = ({
  value,
  selected,
  onSelect,
  imageSrc,
  label
}) => (
  <div
    className={clsx(s.card, { [s.selected]: selected })}
    onClick={() => onSelect(value)}
  >
    <Image src={imageSrc} alt={label} width={502} height={351} />
  </div>
);
