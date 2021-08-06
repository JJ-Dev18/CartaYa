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
 
 function Maps() {
  const [map, setMap] = React.useState(null)
 
  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   map.fitBounds(bounds);
  //   setMap(map)
  // }, [])
 
  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, [])
 
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDZAFFlmk0cUK2P107kVmzjANHMlfs6fUY"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      
        onClick={(...args) => {
          console.log("onClick args", args)
        }}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'}
    position={{lat: 4.43889, lng: -75.23222}}
    draggable={true} />
        <></>
      </GoogleMap>
    </LoadScript>
  )
}
 
export default (Maps)