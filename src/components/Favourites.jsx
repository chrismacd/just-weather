const cityList = require('../data/city.list.min.json');

function Favourites({ favourites }) {
  return (
    favourites && (
      <div className='favourites'>
        <h1>Favourites list</h1>

        <ul>
          {favourites.map((id) => {
            const city = cityList.find((item) => item.id === id);

            return <li key={id}>{city.name}</li>;
          })}
        </ul>
      </div>
    )
  );
}

export default Favourites;
