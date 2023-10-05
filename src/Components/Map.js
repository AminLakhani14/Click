import React from 'react'
import GoogleMapReact from 'google-map-react';
import map from '../assets/map.png'

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
const Map = () => {
  return (
    <div className='mt-n1' >
    {/* <GoogleMapReact
      bootstrapURLKeys={{ key: "" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent
        lat={59.955413}
        lng={30.337844}
        text="My Marker"
      />
    </GoogleMapReact> */}
    <a style={{padding:0}} target='_blank' href="https://www.google.com/maps/dir//Sindh+Employees+Social+Security+Institution,+W39W%2BQMW,+Block+6+Gulshan-e-Iqbal,+Karachi,+Karachi+City,+Sindh/@24.9195659,67.0555084,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3eb338ccfc2b6aeb:0xa6ff509e9dcfbb8e!2m2!1d67.0967767!2d24.9194184?entry=ttu">
    <img style={{height:140,width:"100%",objectFit:"cover",borderRadius:5,marginTop:-4}} src={map} alt="" srcset="" />
    </a>
  </div>)
}

export default Map