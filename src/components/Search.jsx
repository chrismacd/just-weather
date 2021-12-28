import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';

const data = require('../data/city.list.min.json');

function Search() {
  const [text, setText] = useState('');
  const [results, setResults] = useState([]);
  const [debounceText] = useDebounce(text, 500);

  useEffect(() => {
    if (debounceText.length >= 3) {
      const regex = new RegExp(`^${debounceText}`, 'gi');
      const filtered = data.filter((city) => {
        return city.name.search(regex) > -1;
      });

      setResults(filtered.sort((a, b) => (a.name < b.name ? -1 : 1)));
    } else {
      setResults([]);
    }
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
    </div>
  );
}

export default Search;
