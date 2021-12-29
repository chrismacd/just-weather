import { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import SearchResults from './SearchResults';

const data = require('../data/city.list.min.json');

const minlength = 3;

function filterCities(text) {
  if (text.length >= minlength) {
    const regex = new RegExp(`^${text}`, 'gi');
    const filtered = data.filter((city) => {
      return city.name.search(regex) > -1;
    });

    return filtered.sort((a, b) => (a.name < b.name ? -1 : 1));
  }

  return [];
}

function Search({ handleChangeCity }) {
  const [value, setValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');
  const [results, setResults] = useState([]);

  const debounced = useDebouncedCallback((val) => {
    setDebouncedValue(val);
  }, 300);

  const handleChange = (id) => {
    handleChangeCity(id);

    setValue('');
    setDebouncedValue('');
    setResults([]);
  };

  const handleInputChange = (val) => {
    debounced(val);
    setValue(val);
  };

  useEffect(() => {
    const cities = filterCities(value);

    setResults(cities);
  }, [debouncedValue]);

  /*
  useEffect(() => {
    console.log(results);
  }, [results]);
  */

  return (
    <div className='search relative max-w-xs z-20'>
      <input
        type='text'
        name='s'
        id='s'
        value={value}
        placeholder='Search for a city'
        autoComplete='off'
        className='border border-darkblue rounded w-full h-12 px-3 text-lg'
        onChange={(e) => handleInputChange(e.target.value)}
      />
      {debouncedValue.length >= minlength && (
        <SearchResults cities={results} handleChange={handleChange} />
      )}
    </div>
  );
}

export default Search;
