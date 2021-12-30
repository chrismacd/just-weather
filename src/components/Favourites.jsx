import City from './City';

const cityList = require('../data/city.list.min.json');

function Favourites({ favourites, handleChangeCity, handleOrderChange }) {
  return (
    <div className='favourites'>
      <h1>Favourites list</h1>

      <button type='button' onClick={handleOrderChange}>
        order
      </button>

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
