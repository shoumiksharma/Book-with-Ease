import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const handleCloseButton = (setShowMap, setQuery) => {
    setShowMap(false);
    setQuery('');
}

export const handleSubmitButton = async (coordinates) => {
    console.log(coordinates);

    try{
        const response = await fetch("http://localhost:8000/nearest-service-centre" ,{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(
                {
                    latitude : coordinates.lat,
                    longitude : coordinates.lng
                })
        });
        
        const data = await response.json();
        console.log(data);
    }

    catch(err){
        console.log(err);
    }

}

function ClickableMap({setCoordinates}) {
  const [markerPosition, setMarkerPosition] = useState(null);

  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setMarkerPosition({ lat, lng });
      setCoordinates({lat, lng});
    },
  });

  return markerPosition ? (
    <Marker position={markerPosition}>
    </Marker>
  ) : null;
}



const Map = ({defLat, defLong, setCoordinates}) => {
  const initialPosition = [defLat, defLong];
  const initialZoom = 14;

  return (
    <MapContainer center={initialPosition} zoom={initialZoom} className='h-[75vh]'>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <ClickableMap setCoordinates={setCoordinates} />
    </MapContainer>
  );
};

export default Map;