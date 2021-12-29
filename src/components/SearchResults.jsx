import Flag from './Flag';

function SearchResults({ cities, handleChange }) {
  return (
    <div className='results bg-white border border-lightblue max-h-96 overflow-auto absolute left-0 top-14 w-full rounded'>
      {cities.length > 0 &&
        cities.map((city) => {
          return (
            <div className='px-2 py-1 hover:bg-lightblue' key={city.id}>
              <button
                className='text-sm flex w-full items-center'
                type='button'
                onClick={() => handleChange(city.id)}
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
