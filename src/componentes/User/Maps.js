import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 4.43889,
  lng: -75.23222
};

export function Maps() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDZAFFlmk0cUK2P107kVmzjANHMlfs6fUY"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
      <Marker
      position={center}
      visible="true"
      />
    </LoadScript>
  )
}

export default React.memo(Maps)