import { useState } from 'react';
import useFetchWeather from './hooks/useFetchWeather';
import Search from './components/Search';
import Details from './components/Details';
import Favourites from './components/Favourites';
import './App.css';

function App() {
  const storedFavourites = JSON.parse(
    localStorage.getItem('favourites') || '[]'
  );

  const [cityId, setCityId] = useState(0);
  const [favourites, setFavourites] = useState(storedFavourites);

  const handleChangeCity = (id) => {
    setCityId(id);
  };

  const handleFavouriteClick = (id) => {
    const newFavourites = [...favourites];
    const index = favourites.indexOf(id);

    if (index > -1) {
      newFavourites.splice(index, 1);
    } else {
      newFavourites.push(id);
    }

    setFavourites(newFavourites);

    console.log(favourites);
  };

  const { data: cityWeather } = useFetchWeather(cityId);

  return (
    <div className='container mx-auto px-6 py-4'>
      <Search handleChangeCity={handleChangeCity} />
      {cityWeather && (
        <Details
          id={cityId}
          name={cityWeather.name}
          temperature={cityWeather.temperature}
          humidity={cityWeather.humidity}
          windSpeed={cityWeather.windSpeed}
          handleFavouriteClick={handleFavouriteClick}
        />
      )}
      {favourites.length > 0 && (
        <Favourites
          favourites={favourites}
          handleChangeCity={handleChangeCity}
        />
      )}
    </div>
  );
}

export default App;
