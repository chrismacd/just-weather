import City from './City';

function SearchResults({ cities, handleCitySelect }) {
  console.log(`SearchResults: ${cities}`);

  return (
    <div className='results bg-white border border-lightgrey max-h-96 overflow-auto absolute left-0 top-14 w-full rounded'>
      {cities.length > 0 &&
        cities.map((city) => (
          <City
            id={city.id}
            name={city.name}
            state={city.state}
            country={city.country}
            handleCitySelect={handleCitySelect}
            key={city.id}
          />
        ))}
      {cities.length === 0 && <div className='p-2 text-sm'>No results</div>}
    </div>
  );
}

export default SearchResults;
