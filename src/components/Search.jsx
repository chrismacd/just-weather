import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import useFilterCities from '../hooks/useFilterCities';
import SearchResults from './SearchResults';

function Search({ handleChangeCity }) {
  const minlength = 3;
  const [value, setValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');
  const { data: searchResults } = useFilterCities(debouncedValue, minlength);

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
    <div className='search relative z-20 lg:col-start-2'>
      <input
        type='text'
        name='s'
        id='s'
        value={value}
        placeholder='Search for a city'
        autoComplete='off'
        className='border border-lightgrey rounded w-full h-12 px-3 text-lg'
        onChange={(e) => handleInputChange(e.target.value)}
      />
      {searchResults && (
        <SearchResults cities={searchResults} handleChange={handleChange} />
      )}
    </div>
  );
}

export default Search;
