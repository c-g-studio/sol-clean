'use client';

import { useRef, useState } from 'react';
import { Select } from '@/components/common/Select/Select';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Autocomplete, useLoadScript } from '@react-google-maps/api';

import { MapWithAutocomplete } from '@/components/pages/home/MapWithAutocomplete';
import { Typography } from '@/components/common/Typography/Typography';

import s from './styles.module.scss';

const schema = z.object({
  address: z.string().min(1, 'Введите адрес')
});

export const StepSecond = ({ onNext, onBack, defaultValues }: any) => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
    watch
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues
  });

  const [position, setPosition] = useState(null);
  const [solarData, setSolarData] = useState(null);
  const [selectValue, setSelectValue] = useState('');
  const autocompleteRef = useRef(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: ['places']
  });

  const handleChange = event => {
    console.log('e', event);
    setSelectValue(event.target.value as string);
  };

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
    setSolarData(solarData);
  };

  const onSubmit = data => {
    onNext({
      ...data,
      solarData
    });
  };

  console.log('getValues', getValues());

  watch();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={s.mobileWrapper}>
        {isLoaded && (
          <div>
            <label className={s.label}>Ihre Adresse</label>
            <Autocomplete
              onLoad={autocomplete => (autocompleteRef.current = autocomplete)}
              onPlaceChanged={handlePlaceChanged}
            >
              <input
                type="text"
                placeholder="Adresse eingeben"
                className={s.input}
              />
            </Autocomplete>
            {errors.address && <p>{errors.address.message}</p>}

            <div>
              <Controller
                control={control}
                name="type"
                render={({ field }) => (
                  <Select
                    placeholder="Выберите тип"
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
                    {...field}
                  />
                )}
              />
            </div>
          </div>
        )}

        <MapWithAutocomplete position={position} />
        <Typography variant={'body3'} className={s.text}>
          Wir nutzen die Google Solar API, um die mögliche Solarenergie an Ihrem
          Standort basierend auf der Sonneneinstrahlung zu ermitteln. Für eine
          genauere Berechnung, die auch Dachgröße und -ausrichtung
          berücksichtigt, wenden Sie sich direkt an uns oder wählen Sie die
          Zusendung eines Angebots am Ende dieser Wirtschaftlichkeitsberechnung
          aus.
        </Typography>

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

      <button type="button" onClick={onBack}>
        Назад
      </button>
      <button type="submit">Далее</button>
    </form>
  );
};
