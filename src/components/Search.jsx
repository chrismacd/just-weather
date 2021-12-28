import { useState } from 'react';

function Search() {
  const [input, setInput] = useState('');

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className='search'>
      <label htmlFor='s'>
        <p>City search</p>
        <input
          type='text'
          name='s'
          id='s'
          className='border w-full max-w-xs h-10 px-3'
          value={input}
          onChange={(e) => onChange(e)}
        />
      </label>
    </div>
  );
}

export default Search;
