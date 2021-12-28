import { useState, useEffect } from 'react';

const data = require('../data/city.list.min.json');

function Search() {
  const [text, setText] = useState('');

  useEffect(() => {
    console.log(text);

    if (text.length >= 3) {
      const regex = new RegExp(`^${text.toLowerCase()}`, 'g');
      const results = data.filter((city) => {
        return city.name.toLowerCase().search(regex) > -1;
      });

      console.log(results.sort((a, b) => (a.name < b.name ? -1 : 1)));
    }
  }, [text]);

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
