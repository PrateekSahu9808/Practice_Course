import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from './../loc';
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlace, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);
  //  useEffect(()=>{
  //   fetch('http://localhost:3000/places').then((response)=>
  //     { return response.json()}
  //      ).then((resData)=>{
  //      setAvailablePlaces(resData.places)
  //      })
  //  },[])

  useEffect(() => {
    const fetchPlaces = async () => {
      setIsFetching(true);
      try {
      const places= await fetchAvailablePlaces()
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (error) {
        setError({
          message: error.message || "could not fetch places ⭕⭕⭕⭕",
        });
        setIsFetching(false);
      }
    };
    fetchPlaces();
  }, []);
  if (error) {
    return <Error title="An Error occurred!" message={error.message} />;
  }
  return (
    <Places
      title="Available Places"
      places={availablePlace}
      isLoading={isFetching}
      loadingText="fetching place data 🚀🚀🚀"
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
