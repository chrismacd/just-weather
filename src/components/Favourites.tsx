import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLongArrowAltUp as arrowUp,
  faLongArrowAltDown as arrowDown,
} from '@fortawesome/free-solid-svg-icons';
import City from './City';
import FavouriteInterface from '../interfaces/FavouriteInterface';
import CityInterface from '../interfaces/CityInterface';

const cityList = require('../data/city.list.min.json');

interface Props {
  favourites: FavouriteInterface[];
  orderAsc: boolean;
  handleChangeCity: (id: number) => void;
  handleOrderChange: () => void;
  handleFavouriteClick: (id: number) => void;
}

function Favourites({
  favourites,
  orderAsc,
  handleChangeCity,
  handleOrderChange,
  handleFavouriteClick,
}: Props) {
  return (
    <div className='favourites lg:col-start-1 py-4 lg:border-r lg:border-lightgrey'>
      <h1 className='text-lg font-bold mb-3'>
        Your Favourites
        {favourites.length > 0 && (
          <button className='ml-2' type='button' onClick={handleOrderChange}>
            {orderAsc && <FontAwesomeIcon icon={arrowUp} />}
            {!orderAsc && <FontAwesomeIcon icon={arrowDown} />}
          </button>
        )}
      </h1>

      {favourites.length === 0 && (
        <p className='text-sm'>You haven&apos;t saved any favourites yet.</p>
      )}

      {favourites.length > 0 && (
        <ul>
          {favourites.map((favItem) => {
            const city = cityList.find(
              (item: CityInterface) => item.id === favItem.id
            );

            return (
              <City
                city={city}
                hasDelete
                handleCitySelect={handleChangeCity}
                handleFavouriteClick={handleFavouriteClick}
                key={city.id}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Favourites;
