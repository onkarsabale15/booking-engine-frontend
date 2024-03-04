import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { map } from '@/data/activity';

const MapComponent = ({ mapUrl }) => {
    // const urlParams = new URLSearchParams(mapUrl.split('?')[1]);
    // const lat = parseFloat(urlParams.get('pb')?.split(',')[0]);
    // const lng = parseFloat(urlParams.get('pb')?.split(',')[1]);
    // const zoom = parseFloat(urlParams.get('z'));

    // const mapStyles = {
    //     height: '400px',
    //     width: '100%',
    // };

    // const defaultCenter = {
    //     lat,
    //     lng,
    // };

    return (
        <>
            <iframe
                src="https://www.google.com/maps/place/Intactu/@18.5956051,73.7187417,17.71z/data=!4m6!3m5!1s0x3bc2bbb9773e754d:0xb7c63d04f87e04dc!8m2!3d18.5964835!4d73.7186947!16s%2Fg%2F11tjpq8fk6?entry=ttu"
                width="800"
                height="600"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-64"
            ></iframe>
        </>
    );
};

export default MapComponent;
