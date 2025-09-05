'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Autocomplete, useLoadScript } from '@react-google-maps/api';

import { Error } from '@/components/common/formUI/Error/Error';
// import { Select } from '@/components/common/Select/Select';
import { Typography } from '@/components/common/Typography/Typography';

import { getFieldClass } from '@/heplers/getFieldClass';

import s from './styles.module.scss';
import { MapWithAutocomplete } from '@/components/pages/home/MapWithAutocomplete';
import { Button } from '@/components/common/Button/Button';

type SolarPotentialData = {
    solarPotential: {
        panelHeightMeters: number;
        panelWidthMeters: number;
        roofSegmentStats?: {
            stats: {
                sunshineQuantiles: number[];
            };
        }[];
        wholeRoofStats?: {
            sunshineQuantiles: number[];
        };
    };
};

function calculateSinglePanelProductionKWh(
    data: SolarPotentialData,
    efficiency = 0.18
): number | null {
    const {
        panelHeightMeters,
        panelWidthMeters,
        roofSegmentStats,
        wholeRoofStats
    } = data.solarPotential;

    if (!panelHeightMeters || !panelWidthMeters) return null;

    const panelArea = panelHeightMeters * panelWidthMeters;

    // Используем максимум из sunshineQuantiles
    const sunshineQuantiles =
        roofSegmentStats?.[0]?.stats?.sunshineQuantiles ||
        wholeRoofStats?.sunshineQuantiles;

    if (!sunshineQuantiles || sunshineQuantiles.length === 0) return null;

    const maxSunshine = Math.max(...sunshineQuantiles); // kWh/m²/year

    // Годовая генерация одной панели в кВт⋅ч
    const panelEnergyKWhPerYear = maxSunshine * panelArea * efficiency;

    return Number(panelEnergyKWhPerYear.toFixed(2));
}

type TData = {
    address: string;
    solarData?: unknown;
};

type TPosition = { lat: number; lng: number };

type TStepSecondProps = {
    onNextAction: (data: TData) => void;
    onBackAction: () => void;
    defaultValues?: Partial<TData>;
};

const schema = z.object({
    address: z.string().min(1, 'Geben Sie die Adresse ein'),
});

export const StepSecond: FC<TStepSecondProps> = ({
    onNextAction,
    onBackAction,
    defaultValues
}) => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, dirtyFields, isSubmitted, isValid },
    } = useForm({
        resolver: zodResolver(schema),
        mode: "onChange",
        defaultValues: {
            address: '',
            ...defaultValues
        }
    });
    console.log(isValid);

    const [position, setPosition] = useState<TPosition | null>(null);
    const [solarPotential, setSolarPotential] = useState<number | null>(0);
    const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
        libraries: ['places']
    });

    const handlePlaceChanged = async () => {
        const place = autocompleteRef.current?.getPlace();
        if (!place?.geometry?.location) return;

        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        const address = place.formatted_address ?? '';

        setValue('address', address);
        setPosition({ lat, lng });

        const res = await fetch(
            `https://solar.googleapis.com/v1/buildingInsights:findClosest?location.latitude=${lat}&location.longitude=${lng}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
        );
        if (!res.ok) {
            console.error('Error fetching solar data:', res.statusText);
            return;
        }

        const solarData = await res.json();
        console.log('solarData', solarData);
        setSolarPotential(calculateSinglePanelProductionKWh(solarData));
        // setSolarData(solarData);
    };

    const onSubmit = (data: TData) => {
        onNextAction({
            ...data,
            solarData: solarPotential
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.box}>
                <div className={s.mobileWrapper}>
                    {isLoaded && (
                        <div>
                            <div className={s.inputWrapper}>
                                <label className={s.label}>Ihre Adresse</label>
                                <Autocomplete
                                    onLoad={autocomplete =>
                                        (autocompleteRef.current = autocomplete)
                                    }
                                    onPlaceChanged={handlePlaceChanged}
                                >
                                    <input
                                        type="text"
                                        placeholder="Adresse eingeben"
                                        className={`${s.input} ${getFieldClass(
                                            'address',
                                            s.input,
                                            errors,
                                            dirtyFields,
                                            isSubmitted,
                                            s.valid,
                                            s.invalid
                                        )}`}
                                        {...register('address')}
                                    />
                                </Autocomplete>
                                {errors.address && <Error errors={errors} name={'address'} />}
                            </div>
                        </div>
                    )}

                    <div className={s.mapBox}>
                        <MapWithAutocomplete position={position} />
                        <Typography variant={'body3'} className={s.text}>
                            Wir nutzen die Google Solar API, um die mögliche Solarenergie an
                            Ihrem Standort basierend auf der Sonneneinstrahlung zu ermitteln.
                            Für eine genauere Berechnung, die auch Dachgröße und -ausrichtung
                            berücksichtigt, wenden Sie sich direkt an uns oder wählen Sie die
                            Zusendung eines Angebots am Ende dieser
                            Wirtschaftlichkeitsberechnung aus.
                        </Typography>
                    </div>

                    <Typography variant={'body4'} className={s.title}>
                        Sonnenenergie pro kWh in diesem Gebiet
                    </Typography>
                    <Typography variant={'body4'} className={s.textGoogleAPI}>
                        Google Solar API
                    </Typography>

                    <div className={s.totalBox}>
                        <Typography variant={'body3'} className={`${s.total} ${isValid ? s.totalActive : ""}`}>
                            {solarPotential}
                        </Typography>

                        <Typography variant={'body3'} className={`${s.total} ${isValid ? s.totalActive : ""}`}>
                            kWh / Jahr
                        </Typography>
                    </div>
                </div>

                <div className={s.mapBoxDesktop}>
                    <MapWithAutocomplete position={position} />
                    <Typography variant={'body3'} className={s.text}>
                        Wir nutzen die Google Solar API, um die mögliche Solarenergie an
                        Ihrem Standort basierend auf der Sonneneinstrahlung zu ermitteln.
                        Für eine genauere Berechnung, die auch Dachgröße und -ausrichtung
                        berücksichtigt, wenden Sie sich direkt an uns oder wählen Sie die
                        Zusendung eines s am Ende dieser
                        Wirtschaftlichkeitsberechnung aus.
                    </Typography>
                </div>
            </div>

            <div className={s.buttonsBox}>
                <Button
                    type={'button'}
                    buttonType={'buttonWithArrow'}
                    className={`${s.button} ${s.buttonBack}`}
                    onClick={onBackAction}
                >
                    Zurück
                </Button>
                <Button
                    type={'submit'}
                    buttonType={'buttonWithArrow'}
                    className={`${s.button} ${isValid ? s.buttonActive : s.buttonInactive}`}
                >
                    Weiter
                </Button>
            </div>
        </form >
    );
};
