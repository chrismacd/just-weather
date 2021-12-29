import { useState } from 'react';
import useFetchWeather from './hooks/useFetchWeather';
import Search from './components/Search';
import Details from './components/Details';
import Favourites from './components/Favourites';
import './App.css';

function App() {
  const [cityId, setCityId] = useState(0);

  const handleChangeCity = (id) => {
    setCityId(id);
  };

  const { data: cityWeather } = useFetchWeather(cityId);

  return (
    <div className='container mx-auto px-6'>
      <Search handleChangeCity={handleChangeCity} />
      {cityWeather && (
        <Details
          name={cityWeather.name}
          temperature={cityWeather.temperature}
          humidity={cityWeather.humidity}
          windSpeed={cityWeather.windSpeed}
        />
      )}
      <Favourites />
    </div>
  );
}

export default App;
