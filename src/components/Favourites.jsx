import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLongArrowAltUp as arrowUp,
  faLongArrowAltDown as arrowDown,
} from '@fortawesome/free-solid-svg-icons';
import City from './City';

const cityList = require('../data/city.list.min.json');

function Favourites({
  favourites,
  orderAsc,
  handleChangeCity,
  handleOrderChange,
  handleFavouriteClick,
}) {
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
            const city = cityList.find((item) => item.id === favItem.id);

            return (
              <City
                id={city.id}
                name={city.name}
                state={city.state}
                country={city.country}
                hasDelete
                handleChange={handleChangeCity}
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
