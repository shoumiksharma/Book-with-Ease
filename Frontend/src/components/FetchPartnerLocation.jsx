import Navbar from "./Navbar_LoggedIn";
import Map, { handleCloseButton, handleSubmitButton } from './Map'
import { useEffect, useState } from "react";
import { fetchSuggestions, handleInputChange, handleSelect } from "./AutocompleteFeature";

function FetchPartnerLocation() {
    
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState(true);
    const [defLat, setDefLat] = useState(29.947537);
    const [defLong, setDefLong] = useState(76.8227);
    const [showMap, setShowMap] = useState(false);
    const [coordinates, setCoordinates] = useState({ lat: null, lng: null });


    useEffect(() => {
        const timeOut = setTimeout(() => {
            fetchSuggestions(query,search,setIsLoading,setResults);
        }, 700);
    
        return () => {
            clearTimeout(timeOut);
        }
    }, [query]);


    const [locationStatus, setLocationStatus] = useState("Enable Location")
    const [isDisabled, setIsDisabled] = useState(false);

    async function fetchNearestService(latitude, longitude){

        const response = await fetch('http://localhost:8000/nearest-service-centre', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            credentials: "include",
            body: JSON.stringify({latitude, longitude})
        });
        const data = await response.json();
        console.log(data);

    }

    function fetchUserLocation(e){
        e.preventDefault();
        if ("geolocation" in navigator) {
            // The browser supports geolocation
            navigator.geolocation.getCurrentPosition(
              async (position) => {
                // Success callback
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                console.log("Latitude: " + latitude);
                console.log("Longitude: " + longitude);

                setIsDisabled(true);
                setLocationStatus("Location Fetched !")

                setCoordinates({lat:latitude, lng:longitude});

                // fetchNearestService(latitude,longitude);
                handleSubmitButton(coordinates);
              },
              (error) => {
                // Error callback
                setLocationStatus("Try Again !");
                console.error("Error getting location: ", error);
              }
            );
          } else {
            console.log("Geolocation is not supported by this browser.");
          }
    }


    return(
        <>
        <div className="bg-[url('background.svg')] bg-center border-2 border-black font-Grandstander h-auto min-h-screen">

            <Navbar />

            {showMap && (
                <div className="my-[4vh] flex justify-center gap-0 h-auto relative w-screen">

                    <div className="w-[85vw]">
                        <Map defLat={defLat} defLong={defLong} setCoordinates={setCoordinates}/>
                    </div>

                    <div className="flex justify-start flex-col w-[4vw]"> 
                            <img src="/cross-mark-button-svgrepo-com.svg" alt="Close" onClick={() => handleCloseButton(setShowMap, setQuery)}/>
                            <img src="/success-tick-svgrepo-com.svg" alt="Submit" onClick={() => handleSubmitButton(coordinates)}/>
                    </div>


                </div>)
            }

            {!showMap && (
                <>
                    <div className="flex justify-center text-[4vw] mt-[4vh] mb-[4vh]">Register your Location</div>
                    <div>
                        <form className="flex flex-col items-center justify-center text-[2vw] gap-[2vh]" action="">
                            <div className="flex gap-[1vw]">
                                <label htmlFor="userLocation">Your Location :</label>
                                <button className="border-none rounded-2xl text-center pl-[1vw] pr-[1vw] bg-purple-400" id="userLocation" onClick={(e) => fetchUserLocation(e)} disabled={isDisabled}>{locationStatus}</button>
                            </div>
                    
                            <div>OR</div>

                            <div className="flex gap-[2vw]">

                                <div>

                                    <label htmlFor="destination">Enter Location Manually :</label>
                                    <input className="border-2 rounded-2xl text-center" value={query} onChange={(e) => { handleInputChange(e,setQuery,setSearch) }} type="text" id="destination" autoComplete="on" placeholder="Search"/> 
                                    {/* controlled by query state */}

                                    {isLoading && <div>Loading ...</div>}
                                    {/*when isLoading is true div is displayed*/}

                                    {(results.length > 0 && !isLoading) && (
                                        <ul>
                                            {results.map( (result) => {
                                                return <li key={result.properties.osm_id} onClick={ () => handleSelect(result,setQuery,setResults,setSearch,setDefLat,setDefLong,setShowMap)}>{result.properties.name}</li>
                                            })}
                                        </ul>
                                    )}

                                    {(results.length == 0 && !isLoading && !!query && search) && (
                                        <ul>
                                            <li>No Suggestions</li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>
                </>
            )}

            {/* <div className="border-2 border-black h-screen flex justify-center">
                <div>Available Service Centres</div>

            </div> */}
        </div>
        </>
    )
}

export default FetchPartnerLocation;