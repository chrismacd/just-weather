function Details({ name, temperature, windSpeed, humidity }) {
  return (
    <div className='details'>
      <h1>{name}</h1>
      <ul>
        <li>Temperature: {temperature}</li>
        <li>Wind speed: {windSpeed}</li>
        <li>Humidity: {humidity}</li>
      </ul>
    </div>
  );
}

export default Details;
