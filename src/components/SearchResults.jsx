function SearchResults({ cities }) {
  console.log(cities);

  function onClick(id) {
    console.log(id);
  }

  return (
    <div className='results border'>
      {cities.map((city) => (
        <div className='px-2 py-1 hover:bg-lightblue' key={city.id}>
          <button
            className='text-sm'
            type='button'
            onClick={() => onClick(city.id)}
          >
            {city.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
