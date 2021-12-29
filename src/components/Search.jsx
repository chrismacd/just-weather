import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import SearchResults from './SearchResults';

const data = require('../data/city.list.min.json');

function filterCities(text) {
  if (text.length >= 3) {
    const regex = new RegExp(`^${text}`, 'gi');
    const filtered = data.filter((city) => {
      return city.name.search(regex) > -1;
    });

    return filtered.sort((a, b) => (a.name < b.name ? -1 : 1));
  }

  return [];
}

function Search() {
  const [text, setText] = useState('');
  const [results, setResults] = useState([]);
  const [debounceText] = useDebounce(text, 500);

  useEffect(() => {
    const cities = filterCities(debounceText);

    setResults(cities);
  }, [debounceText]);

  useEffect(() => {
    console.log(results);
  }, [results]);

  return (
    <div className='search'>
      <label htmlFor='s'>
        <p>City search</p>
        <input
          type='text'
          name='s'
          id='s'
          className='border w-full max-w-xs h-10 px-3'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      {debounceText && <SearchResults cities={results} />}
    </div>
  );
}

export default Search;
