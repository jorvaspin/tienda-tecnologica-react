import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import "./Maps.scss";


const Maps = () => {

    const containerStyle = {
        width: '100%',
        height: '100vh'
    };

    const center = {
        lat: -33.4569400,
        lng: -70.6482700
    };

    return (
        <div className="maps">
            <div className="content">
                <LoadScript
                    googleMapsApiKey="AIzaSyB1wdC8_13kHHkz0uNiu93865bZbpdiWcA"
                >
                    <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                    >
                    { /* Child components, such as markers, info windows, etc. */ }
                    <></>
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
};

export default Maps;
