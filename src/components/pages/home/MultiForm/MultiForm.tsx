'use client';

import { useState } from 'react';
import { StepFirst } from '@/components/pages/home/MultiForm/StepFirst/StepFirst';
import { StepSecond } from '@/components/pages/home/MultiForm/StepSecond/StepSecond';
import { StepThird } from '@/components/pages/home/MultiForm/StepThird/StepThird';
import { StepCounterMobile } from '@/components/pages/home/MultiForm/StepCounterMobile/StepCounterMobile';

import s from './styles.module.scss';

type TMultiFormData = {
  firstName: string;
  email: string;
  age: number;
  typeOfUse: 'business' | 'personal';
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
        <StepSecond onNext={next} onBack={back} defaultValues={formData} />
      )}
      {step === 3 && <StepThird onBack={back} data={formData} />}
    </div>
  );
};
