'use client';

import { useState } from 'react';
import { StepFirst } from '@/components/pages/home/MultiForm/StepFirst/StepFirst';
import { StepSecond } from '@/components/pages/home/MultiForm/StepSecond/StepSecond';
import { StepThird } from '@/components/pages/home/MultiForm/StepThird/StepThird';
import { StepCounterMobile } from '@/components/pages/home/MultiForm/StepCounterMobile/StepCounterMobile';

import s from './styles.module.scss';
import { StepFourth } from '@/components/pages/home/MultiForm/StepFourth/StepFourth';

type TMultiFormData = {
  address: string;
  ownerType: string;
  solarData?: unknown;
  typeOfUse: 'business' | 'personal';
  nominalExit: string;
  year: string;
};

export const MultiForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<TMultiFormData>>({});

  const next = (data: Partial<TMultiFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
    setStep(prev => prev + 1);
  };

  const back = () => setStep(prev => prev - 1);

  return (
    <div className={s.multiFormContainer}>
      <StepCounterMobile step={step} />
      {step === 1 && <StepFirst onNext={next} defaultValues={formData} />}
      {step === 2 && (
        <StepSecond
          onNextAction={next}
          onBackAction={back}
          defaultValues={formData}
        />
      )}
      {step === 3 && (
        <StepThird
          onNextAction={next}
          onBackAction={back}
          defaultValues={formData}
        />
      )}
      {step === 4 && <StepFourth onBack={back} data={formData} />}
    </div>
  );
};
