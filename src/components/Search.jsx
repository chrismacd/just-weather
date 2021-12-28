function Search() {
  return (
    <div className='search'>
      <label htmlFor='s'>
        <p>City search</p>
        <input
          type='text'
          name='s'
          id='s'
          className='border w-full max-w-xs h-10'
        />
      </label>
    </div>
  );
}

export default Search;
