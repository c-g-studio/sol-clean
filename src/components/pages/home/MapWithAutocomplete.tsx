'use client';

import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

import s from './styles.module.scss';

type Props = {
  position: google.maps.LatLngLiteral | null;
  className?: string;
};

const libraries: 'places'[] = ['places'];

const containerStyle = {
  width: '100%',
  maxWidth: '768px',
  height: '376px'
};

export const MapWithAutocomplete = ({ position, className }: Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries
  });

  if (!isLoaded) return <div>Lädt...</div>;

  return (
    <div className={`${s.map} ${className}`}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position || { lat: 50.110924, lng: 8.682127 }} // Default: Frankfurt
        zoom={position ? 17 : 10}
      >
        {position && <Marker position={position} />}
      </GoogleMap>
    </div>
  );
};
