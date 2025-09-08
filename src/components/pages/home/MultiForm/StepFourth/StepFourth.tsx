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
    // ownerType: string;
    solarData?: unknown;
    year: string;
    nominalExit: string;
    nearBy: string[];
    absolutePollution: number;
    energyGeneration: string;
    // selfConsumptionEnergy: string;
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
    energyGeneration: z
        .string()
        .min(1, 'Geben Sie an, wie viel Leergia erzeugt wird'),
    // selfConsumptionEnergy: z
    //     .string()
    //     .min(1, 'Geben Sie an, wie viel Leergia Sie verwenden')
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
        formState: { errors, dirtyFields, isSubmitted, isValid }
    } = useForm<TStepThirdData>({
        resolver: zodResolver(schema),
        defaultValues: {
            energyGeneration: '',
            // selfConsumptionEnergy: '',
            ...defaultValues
        }
    });

    const year = defaultValues?.year ?? '';
    const selectedNearBy = defaultValues?.nearBy ?? [];

    let absolutePollution = 0;

    if (selectedNearBy.length) {
        absolutePollution = Math.max(
            ...selectedNearBy.map(item => {
                return pollutionTable[item as TPollutionTableType][
                    new Date().getFullYear() - Number(year)
                ];
            })
        );
    }

    const onSubmit = (data: TStepThirdData) => {
        const fullData: TData = {
            address: defaultValues?.address ?? '',
            // ownerType: defaultValues?.ownerType ?? '',
            solarData: defaultValues?.solarData,
            year: defaultValues?.year ?? '',
            nominalExit: defaultValues?.nominalExit ?? '',
            nearBy: defaultValues?.nearBy ?? [],
            absolutePollution,
            energyGeneration: data.energyGeneration,
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
                        placeholder="135 kWh"
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

                <div className={s.totalBoxFirst}>
                    <Typography variant="body4" className={s.title}>
                        Berechnete Verschmutzung
                    </Typography>
                    <div className={s.totalBox}>
                        <Typography variant="body3" className={`${s.total} ${isValid ? s.totalActive : ""}`}>
                            {absolutePollution || '00'}
                        </Typography>
                        <Typography variant="body3" className={`${s.total} ${isValid ? s.totalActive : ""}`}>
                            %
                        </Typography>
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
                <Button
                    type="submit"
                    buttonType="buttonWithArrow"
                    className={`${s.button} ${isValid ? s.buttonActive : s.buttonInactive}`}>
                    Weiter
                </Button>
            </div>
        </form>
    );
};
