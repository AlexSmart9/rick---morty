import { useEffect, useReducer, useRef, useState } from 'react'

import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './helpers/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentsCard from './components/ResidentsCard'
import Loader from './components/Loader'
import getNumbers from './helpers/getNumbers'

function App() {
  const [locationID, setLocationID] = useState(getRandomNumber(126));
  const [errorMessage, setErrorMessage] = useState('');
  const url = `https://rickandmortyapi.com/api/location/${locationID}`;
  const [location, getLocation, hasError, isLoading] = useFetch(url);
  const [locations, getLocations, hasErrorLocations, isLoadingLocations] =
    useFetch(`https://rickandmortyapi.com/api/location/${getNumbers()}`);
  useEffect(() => {
    getLocation();
  }, [locationID]);
  useEffect(() => {
    getLocations();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputName.current.value.trim();
    const selectedLocation = locations.find(
      (location) => location.name.toLowerCase() === inputValue.toLowerCase(),
    );
    
    if (inputValue) {
      setLocationID(selectedLocation ? selectedLocation.id : null);
      setErrorMessage(
        selectedLocation ? '' :<p className='text__error'>❎No location found with that name!</p>,
      );
    } else {
      setErrorMessage(inputValue ? '' :<p className='text__error'>❎You must put a location name</p>);
    }
  };
  // const inputId = useRef();
  const inputName = useRef();
  return (
    <div className="app flex-container">
      <header className="app__hero">
        <img className="hero__image" src="/img/hero.png" alt="Hero Image" />
      </header>
      <section className="app__body">
        <form className="form flex-container" onSubmit={handleSubmit}>
          <input
            className="form__input"
            type="text number"
            
            placeholder="Search location name"
            ref={inputName}
            list="locations"
          />
          <datalist id="locations">
            {isLoadingLocations ? (
              <option>Loading...</option>
            ) : (
              locations?.map((location) => (
                <option value={location.name} key={location.id}></option>
              ))
            )}
          </datalist>
          <button className="form__btn">Search</button>
        </form>
        {isLoading ? (
          <Loader/>
        ) : errorMessage ? (
          <h1>{errorMessage}</h1>
        ) : (
          <div>
            <LocationInfo location={location} />
            <section className="cards__container flex-container">
              {location?.residents?.map((url) => (
                <ResidentsCard key={url} url={url} />
              ))}
            </section>
          </div>
        )}
      </section>
    </div>
  );
}


export default App
