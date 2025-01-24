export const fetchSuggestions = async(query, search, setIsLoading, setResults) => {
    
    if(!query){
        setResults([]); //clear suggestions
        return; // prevents making unecessary calls to the api
    }

    setIsLoading(true); // start loading the results
    //for network issue try is used
    try{ 

        if(search){
            const response = await fetch(`https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&limit=5`);
            
            if(response.ok){
                const data = await response.json();

                const uniqueResults = data.features.filter((value, index, self) => 
                    index === self.findIndex((t) => (
                    t.properties.osm_id === value.properties.osm_id
                    ))
                );
                setResults(uniqueResults);

                console.log(uniqueResults);
            }

            else{
                console.log("Error fetching the results");
            }
        }
    }

    catch(err){
        console.log(err);
    }

    finally{
        setIsLoading(false);
    }
}

export const handleInputChange = (e,setQuery, setSearch) => {
    setSearch(true);
    setQuery(e.target.value);
    console.log(e.target.value);
}

export const handleSelect = (result, setQuery, setResults, setSearch, setDefLat, setDefLong, setShowMap) =>{
    setSearch(false); // to avoid searching suggestions again
    setQuery(result.properties.name);
    setDefLong(result.geometry.coordinates[0]);
    setDefLat(result.geometry.coordinates[1]);
    setShowMap(true);
    console.log("updated",result.geometry.coordinates[0]);
    setResults([]);
};

