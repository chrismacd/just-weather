function Details({
  id,
  name,
  temperature,
  windSpeed,
  humidity,
  handleFavouriteClick,
}) {
  return (
    <div className='details relative z-10 border border-darkblue max-w-xs mx-auto mt-6 p-3 rounded'>
      <h1 className='font-bold text-lg'>{name}</h1>
      <ul>
        <li>Temperature: {temperature}&deg;C</li>
        <li>Wind speed: {windSpeed}m/s</li>
        <li>Humidity: {humidity}%</li>
      </ul>
      <button type='button' onClick={() => handleFavouriteClick(id, name)}>
        Fave
      </button>
    </div>
  );
}

export default Details;
