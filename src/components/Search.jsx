import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import useFilterCities from '../hooks/useFilterCities';
import SearchResults from './SearchResults';

function Search({ handleChangeCity }) {
  const minlength = 3;
  const [value, setValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');
  const { data: searchResults, isLoading } = useFilterCities(
    debouncedValue,
    minlength
  );

  const debounced = useDebouncedCallback((val) => {
    setDebouncedValue(val);
  }, 300);

  const handleChange = (id) => {
    handleChangeCity(id);

    setValue('');
    setDebouncedValue('');
  };

  const handleInputChange = (val) => {
    debounced(val);
    setValue(val);
  };

  return (
    <div className='search relative max-w-xs mx-auto z-20'>
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
      {debouncedValue.length >= minlength && !isLoading && (
        <SearchResults cities={searchResults} handleChange={handleChange} />
      )}
    </div>
  );
}

export default Search;
