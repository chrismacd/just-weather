import City from './City';

const cityList = require('../data/city.list.min.json');

function Favourites({ favourites, handleChangeCity }) {
  return (
    favourites && (
      <div className='favourites'>
        <h1>Favourites list</h1>

        <ul>
          {favourites.map((id) => {
            const city = cityList.find((item) => item.id === id);

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
    )
  );
}

export default Favourites;
