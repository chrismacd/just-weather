import { useState } from 'react';
import useFetchWeather from './hooks/useFetchWeather';
import Search from './components/Search';
import Details from './components/Details';
import Favourites from './components/Favourites';
import Spinner from './components/Spinner';
import './App.css';

function App() {
  const storedFavourites = JSON.parse(
    localStorage.getItem('favourites') || '[]'
  );

  const [cityId, setCityId] = useState(0);
  const [favourites, setFavourites] = useState(storedFavourites);
  const [orderAsc, setOrderAsc] = useState(true);

  const { data: cityWeather, isLoading, error } = useFetchWeather(cityId);

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
    localStorage.setItem('favourites', JSON.stringify(sorted));

    if (!orderAsc) {
      sorted.reverse();
    }

    setFavourites(sorted);

    console.log(sorted);
  };

  const handleOrderChange = () => {
    setFavourites(favourites.reverse());
    setOrderAsc(!orderAsc);
  };

  const isFavourite = () => {
    return favourites.findIndex((city) => city.id === cityId) > -1;
  };

  return (
    <div className='container mx-auto px-6 py-4'>
      <div className='grid lg:grid-cols-3'>
        <Search handleChangeCity={handleChangeCity} />
        <div className='lg:col-span-3 lg:border-lightgrey lg:border-b lg:p-2' />
        {favourites.length > 0 && (
          <Favourites
            favourites={favourites}
            orderAsc={orderAsc}
            handleChangeCity={handleChangeCity}
            handleOrderChange={handleOrderChange}
            handleFavouriteClick={handleFavouriteClick}
          />
        )}
        {cityWeather && (
          <Details
            id={cityId}
            name={cityWeather.name}
            country={cityWeather.country}
            temperature={cityWeather.temperature}
            humidity={cityWeather.humidity}
            windSpeed={cityWeather.windSpeed}
            isFavourite={isFavourite()}
            handleFavouriteClick={handleFavouriteClick}
          />
        )}
        {isLoading && <Spinner />}
        {error && <div>{error}</div>}
      </div>
    </div>
  );
}

export default App;
