import Flag from './Flag';

function SearchResults({ cities }) {
  function onClick(id) {
    console.log(id);
  }

  return (
    <div className='results border'>
      {cities.map((city) => {
        return (
          <div className='px-2 py-1 hover:bg-lightblue' key={city.id}>
            <button
              className='text-sm flex w-full items-center'
              type='button'
              onClick={() => onClick(city.id)}
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
    </div>
  );
}

export default SearchResults;
