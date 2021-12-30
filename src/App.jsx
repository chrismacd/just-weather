import { useState } from 'react';
import useFetchWeather from './hooks/useFetchWeather';
import Search from './components/Search';
import Details from './components/Details';
import Favourites from './components/Favourites';
import './App.css';

function App() {
  const [cityId, setCityId] = useState(0);
  const [favourites, setFavourites] = useState([]);

  const handleChangeCity = (id) => {
    setCityId(id);
  };

  const handleFavouriteClick = (id) => {
    if (favourites.includes(id)) {
      const index = favourites.indexOf(id);
      const newFavourites = [...favourites];
      newFavourites.splice(index, 1);
      setFavourites(newFavourites);
    } else {
      const newFavourites = [...favourites];
      newFavourites.push(id);
      setFavourites(newFavourites);
    }

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
      <Favourites favourites={favourites} />
    </div>
  );
}

export default App;
