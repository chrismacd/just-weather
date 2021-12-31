import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as starSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as starOutline } from '@fortawesome/free-regular-svg-icons';
import Flag from './Flag';
import CityWeatherInterface from '../interfaces/CityWeatherInterface';

interface Props {
  cityWeather: CityWeatherInterface;
  isFavourite: boolean;
  handleFavouriteClick: (id: number, name: string) => void;
}

function Details({ cityWeather, isFavourite, handleFavouriteClick }: Props) {
  return (
    <div className='details relative py-4 z-10 lg:p-4'>
      <h1 className='font-bold text-lg flex w-full items-center mb-3'>
        <Flag countryCode={cityWeather.country} />
        {cityWeather.name}
        <button
          className='ml-2 text-gold'
          type='button'
          onClick={() => handleFavouriteClick(cityWeather.id, cityWeather.name)}
        >
          {isFavourite && <FontAwesomeIcon icon={starSolid} />}
          {!isFavourite && <FontAwesomeIcon icon={starOutline} />}
        </button>
      </h1>
      <table className='table-fixed w-full text-sm'>
        <tbody>
          <tr>
            <td className='py-2'>Temperature:</td>
            <td className='py-2'>{cityWeather.temperature}&deg;C</td>
          </tr>
          <tr>
            <td className='py-2'>Wind speed:</td>
            <td className='py-2'>{cityWeather.windSpeed}m/s</td>
          </tr>
          <tr>
            <td className='py-2'>Humidity:</td>
            <td className='py-2'>{cityWeather.humidity}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Details;
