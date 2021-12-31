import City from './City';
import CityInterface from '../interfaces/CityInterface';

interface Props {
  cities: CityInterface[];
  handleCitySelect: (id: number) => void;
}

function SearchResults({ cities, handleCitySelect }: Props) {
  return (
    <div className='results bg-white border border-lightgrey max-h-96 overflow-auto absolute left-0 top-14 w-full rounded'>
      {cities.length > 0 &&
        cities.map((city) => (
          <City
            city={city}
            hasDelete={false}
            handleCitySelect={handleCitySelect}
            handleFavouriteClick={null}
            key={city.id}
          />
        ))}
      {cities.length === 0 && (
        <div className='p-2 text-sm'>No cities found</div>
      )}
    </div>
  );
}

export default SearchResults;
