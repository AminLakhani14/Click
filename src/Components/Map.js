import React, { useCallback, useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '140px'
};

const center = {
  lat: 24.8454431,
  lng: 67.0282079
};
const Map = () => {
  const [map, setMap] =useState()
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCqTizImtoY21thD5oH47ycL0umWWHvUu0"
  })
  const onLoad =useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  return (
    <div className='mt-n1' >
   {
     isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
       <Marker position={center} />
      </GoogleMap>
  ) : <></>
   }
  </div>)
}

export default Map