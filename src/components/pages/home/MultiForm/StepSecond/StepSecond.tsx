'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Autocomplete, useLoadScript } from '@react-google-maps/api';

import { Error } from '@/components/common/formUI/Error/Error';
import { Select } from '@/components/common/Select/Select';
import { Typography } from '@/components/common/Typography/Typography';

import { getFieldClass } from '@/heplers/getFieldClass';

import s from './styles.module.scss';
import { MapWithAutocomplete } from '@/components/pages/home/MapWithAutocomplete';
import { Button } from '@/components/common/Button/Button';

type TData = {
  address: string;
  ownerType: string;
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
  ownerType: z.string().min(1, 'Wählen Sie den Besitzer')
});

export const StepSecond: FC<TStepSecondProps> = ({
  onNextAction,
  onBackAction,
  defaultValues
}) => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, dirtyFields, isSubmitted },
    watch
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      ownerType: '',
      address: '',
      ...defaultValues
    }
  });

  const [position, setPosition] = useState<TPosition | null>(null);
  const [solarData, setSolarData] = useState(null);
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
    console.log(
      'NEXT_PUBLIC_GOOGLE_MAPS_API_KEY',
      NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    );
    const res = await fetch(
      `https://solar.googleapis.com/v1/buildingInsights:findClosest?location.latitude=${lat}&location.longitude=${lng}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
    );

    if (!res.ok) {
      console.error('Error fetching solar data:', res.statusText);
      return;
    }

    const solarData = await res.json();
    setSolarData(solarData);
  };

  const onSubmit = (data: TData) => {
    console.log('data', data);
    onNextAction({
      ...data,
      solarData
    });
  };

  console.log('getValues', getValues());

  watch();

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

              <div className={s.selectWrapper}>
                <label className={s.label}>Eigentümer</label>
                <Controller
                  control={control}
                  name="ownerType"
                  render={({ field }) => (
                    <Select
                      placeholder="Wählen Sie den Eigentümer"
                      ariaLabel="Test select"
                      data={[
                        { value: 'agriculture', label: 'Landwirtschaft' },
                        {
                          value: 'arableLand',
                          label: 'in der Nähe einer Ackerfläche'
                        },
                        {
                          value: 'nearForest',
                          label: 'in der Nähe eines Waldes'
                        },
                        { value: 'residentialArea', label: 'Wohngebiet' },
                        { value: 'settlementFarm', label: 'Aussiedlerhof' }
                      ]}
                      onValueChange={field.onChange}
                      className={`${getFieldClass(
                        'ownerType',
                        '',
                        errors,
                        dirtyFields,
                        isSubmitted,
                        s.valid,
                        s.invalid
                      )}`}
                      {...field}
                    />
                  )}
                />
                <Error name={'ownerType'} errors={errors} />
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
            Sonnenenergie pro kWp in diesem Gebiet
          </Typography>

          <div className={s.totalBox}>
            <Typography variant={'body3'} className={s.total}>
              0
            </Typography>

            <Typography variant={'body3'} className={s.total}>
              kWp / Jahr
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
            Zusendung eines Angebots am Ende dieser
            Wirtschaftlichkeitsberechnung aus.
          </Typography>
        </div>
      </div>

      <div className={s.buttonsBox}>
        <Button
          type={'button'}
          buttonType={'buttonWithArrow'}
          className={`${s.button} ${s.buttonBackAction}`}
          onClick={onBackAction}
        >
          Zurück
        </Button>
        <Button
          type={'submit'}
          buttonType={'buttonWithArrow'}
          className={s.button}
        >
          Weiter
        </Button>
      </div>
    </form>
  );
};
