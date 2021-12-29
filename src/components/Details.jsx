function Details({ name, temperature, windSpeed, humidity }) {
  return (
    <div className='details relative z-10 border border-darkblue max-w-xs mx-auto mt-6 p-3 rounded'>
      <h1 className='font-bold text-lg'>{name}</h1>
      <ul>
        <li>Temperature: {temperature}&deg;C</li>
        <li>Wind speed: {windSpeed}m/s</li>
        <li>Humidity: {humidity}%</li>
      </ul>
    </div>
  );
}

export default Details;
