// Map.jsx

// import {useState, useEffect, useRef } from "react";
// import leaflet from "leaflet";
// import 'leaflet/dist/leaflet.css';
// import { redirect } from "react-router-dom";

// function Map({defLat, defLong, showMap, setCoordinates}){
//     const mapRef = useRef();
//     const markerRef = useRef(null);    
//     // console.log(mapRef);
//     useEffect(() => {
//         console.log("in hook",mapRef);
//         if(showMap){
//             console.log("showMap" ,showMap);
//             console.log("before",mapRef);
//             mapRef.current = leaflet.map('map').setView([defLat, defLong], 15);
//             leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//                 maxZoom: 19,
//                 attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//             }).addTo(mapRef.current);
//             console.log("after map",mapRef);
//             mapRef.current.on('click', handleMouseClick);
//         }

//         return () => {
//             if(showMap){
//                 mapRef.current.remove();
//                 console.log("map unset",mapRef);
//                 console.log(!!mapRef.current);
//                 mapRef.current.off('click', handleMouseClick);
//             }
//         };
//     }, [defLat,defLong]);

    
//     const handleMouseClick = (event) => {
//         const { lat, lng } = event.latlng;
//         setCoordinates({ lat, lng });
//         console.log(`Latitude: ${lat}, Longitude: ${lng}`);
        
//         if (markerRef.current) {
//             mapRef.current.removeLayer(markerRef.current); // Remove old marker
//         }
        
//         const newMarker = leaflet.marker([lat, lng]).addTo(mapRef.current); 
//         markerRef.current = newMarker;
        

//     };
    
//     return(
//         <>
//             {showMap && (<div id="map" style={{height: '80vh' , width:'auto', border: '2px solid black'}} ref={mapRef}>kdjhsk</div>)}
//         </>
//     )
// }
// export default Map












