import Flag from './Flag';

function SearchResults({ cities, handleChangeCity }) {
  return (
    <div className='results border'>
      {cities.length > 0 &&
        cities.map((city) => {
          return (
            <div className='px-2 py-1 hover:bg-lightblue' key={city.id}>
              <button
                className='text-sm flex w-full items-center'
                type='button'
                onClick={() => handleChangeCity(city.id)}
              >
                <Flag countryCode={city.country} />
                <span>
                  {city.name}
                  {city.state && `, ${city.state}`}
                </span>
              </button>
            </div>
          );
        })}
      {cities.length === 0 && <div className='p-2 text-sm'>No results</div>}
    </div>
  );
}

export default SearchResults;
