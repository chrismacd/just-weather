import { useState, useEffect, useRef } from 'react';

interface CityWeather {
  name: string;
  country: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
}

const useFetchWeather = (id: number) => {
  const cache = useRef<CityWeather[]>([]);
  const [data, setData] = useState<CityWeather | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
          const weather: CityWeather = {
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
