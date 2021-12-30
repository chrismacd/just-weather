import { useState, useEffect } from 'react';

const cityList = require('../data/city.list.min.json');

const useFilterCities = (value, minlength = 3) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (value.length >= minlength) {
      const regex = new RegExp(`^${value}`, 'gi');
      const filtered = cityList.filter((city) => {
        return city.name.search(regex) > -1;
      });

      const sorted = filtered.sort((a, b) => (a.name < b.name ? -1 : 1));

      setData(sorted);
    } else {
      setData(null);
    }
  }, [value]);

  return { data };
};

export default useFilterCities;
