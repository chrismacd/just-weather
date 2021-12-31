import { useState, useEffect } from 'react';

interface City {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: {
    long: string;
    lat: string;
  };
}

type Data = City[] | null;

const cityList: City[] = require('../data/city.list.min.json');

const useFilterCities = (value: string, minlength: number = 3) => {
  const [data, setData] = useState<Data>(null);

  useEffect(() => {
    if (value.length >= minlength) {
      const regex = new RegExp(`^${value}`, 'gi');
      const filtered = cityList.filter((city: City) => {
        return city.name.search(regex) > -1;
      });

      const sorted = filtered.sort((a: City, b: City) =>
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
