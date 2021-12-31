import { useState, useEffect, useRef } from 'react';

const useFetchWeather = (id) => {
  const cache = useRef({});
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    if (cache.current[id]) {
      const weather = cache.current[id];
      setData(weather);
    } else {
      setData(null);
      setIsLoading(true);

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error('Could not fetch the data for that resource');
          }
          return response.json();
        })
        .then((apiData) => {
          const weather = {
            name: apiData.name,
            country: apiData.sys.country,
            temperature: Math.round(Number(apiData.main.temp) - 273.15),
            humidity: apiData.main.humidity,
            windSpeed: apiData.wind.speed,
          };

          cache.current[id] = weather;
          setData(weather);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.message);
        });
    }
  }, [id]);

  return { data, isLoading, error };
};

export default useFetchWeather;
