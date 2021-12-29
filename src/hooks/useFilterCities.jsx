import { useState, useEffect } from 'react';

const cityList = require('../data/city.list.min.json');

const useFilterCities = (value, minlength = 3) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (value.length >= minlength) {
      setIsLoading(true);
      const regex = new RegExp(`^${value}`, 'gi');
      const filtered = cityList.filter((city) => {
        return city.name.search(regex) > -1;
      });

      const sorted = filtered.sort((a, b) => (a.name < b.name ? -1 : 1));

      setIsLoading(false);
      setData(sorted);
    }
  }, [value]);

  return { data, isLoading };
};

export default useFilterCities;
