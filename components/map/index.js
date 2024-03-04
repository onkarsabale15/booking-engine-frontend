import React from 'react';
import MapComponent from './map-component/MapComponent';

const Map = ({url}) => {
    return (
        <div>
            <MapComponent mapUrl={url} />
        </div>
    );
};

export default Map;