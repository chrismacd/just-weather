import { useState, useEffect } from 'react';
import CityInterface from '../interfaces/CityInterface';

const cityList: CityInterface[] = require('../data/city.list.min.json');

const useFilterCities = (value: string, minlength = 3) => {
  const [data, setData] = useState<CityInterface[] | null>(null);

  useEffect(() => {
    if (value.length >= minlength) {
      const regex = new RegExp(`^${value}`, 'gi');
      const filtered = cityList.filter((city: CityInterface) => {
        return city.name.search(regex) > -1;
      });

      const sorted = filtered.sort((a: CityInterface, b: CityInterface) =>
        a.name < b.name ? -1 : 1
      );

      setData(sorted);
    } else {
      setData(null);
    }
  }, [value, minlength]);

  return { data };
};

export default useFilterCities;
