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
  const [orderAsc] = useState(true);

  const handleChangeCity = (id) => {
    setCityId(id);
  };

  const handleFavouriteClick = (id, name) => {
    const newFavourites = [...favourites];
    const index = favourites.findIndex((city) => city.id === id);

    if (index > -1) {
      newFavourites.splice(index, 1);
    } else {
      newFavourites.push({ id, name });
    }

    const sorted = newFavourites.sort((a, b) => (a.name > b.name ? 1 : -1));
    if (!orderAsc) {
      sorted.reverse();
    }

    setFavourites(sorted);
    localStorage.setItem('favourites', JSON.stringify(sorted));

    console.log(sorted);
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
