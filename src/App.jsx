import { useState, useEffect } from 'react';
import Search from './components/Search';
import Details from './components/Details';
import Favourites from './components/Favourites';
import './App.css';

function App() {
  const [cityId, setCityId] = useState(0);
  const [cityWeather, setCityWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeCity = (id) => {
    setCityId(id);
  };

  useEffect(() => {
    console.log('city change', cityId);

    if (cityId > 0) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=a61518b113182a0a4b4cc2468498c201`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error('Could not fetch the data for that resource');
          }
          return response.json();
        })
        .then((data) => {
          const weather = {
            name: data.name,
            temperature: Math.round(Number(data.main.temp) - 273.15),
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
          };

          setCityWeather(weather);

          console.log(data, isLoading, error);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.message);
        });
    }
  }, [cityId]);

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
