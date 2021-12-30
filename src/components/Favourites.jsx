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
}) {
  return (
    <div className='favourites lg:col-start-1'>
      <h1 className='text-lg font-bold'>
        Your Favourites
        <button className='ml-2 mb-3' type='button' onClick={handleOrderChange}>
          {orderAsc && <FontAwesomeIcon icon={arrowUp} />}
          {!orderAsc && <FontAwesomeIcon icon={arrowDown} />}
        </button>
      </h1>

      <ul>
        {favourites.map((favItem) => {
          const city = cityList.find((item) => item.id === favItem.id);

          return (
            <City
              id={city.id}
              name={city.name}
              state={city.state}
              country={city.country}
              handleChange={handleChangeCity}
              key={city.id}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Favourites;
