import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes as times } from '@fortawesome/free-solid-svg-icons';
import Flag from './Flag';
import CityInterface from '../interfaces/CityInterface';

interface Props {
  city: CityInterface;
  hasDelete: boolean;
  handleCitySelect: (id: number) => void;
  handleFavouriteClick: (id: number) => void;
}

function City({
  city,
  hasDelete = false,
  handleCitySelect,
  handleFavouriteClick,
}: Props) {
  return (
    <div className='px-2 py-1 hover:bg-lightblue relative group'>
      <button
        className='text-sm flex w-full items-center'
        type='button'
        onClick={() => handleCitySelect(city.id)}
      >
        <Flag countryCode={city.country} />
        <span>
          {city.name}
          {city.state && `, ${city.state}`}
        </span>
      </button>
      {hasDelete && (
        <button
          className='absolute right-2 top-1/2 -mt-2 hidden group-hover:block'
          type='button'
          onClick={() => handleFavouriteClick(city.id)}
        >
          <FontAwesomeIcon className='h-4 block' icon={times} />
        </button>
      )}
    </div>
  );
}

export default City;
