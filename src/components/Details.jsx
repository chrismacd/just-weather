import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as starSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as starOutline } from '@fortawesome/free-regular-svg-icons';
import Flag from './Flag';

function Details({
  id,
  name,
  country,
  temperature,
  windSpeed,
  humidity,
  isFavourite,
  handleFavouriteClick,
}) {
  return (
    <div className='details relative py-4 z-10 lg:p-4'>
      <h1 className='font-bold text-lg flex w-full items-center mb-3'>
        <Flag countryCode={country} />
        {name}
        <button
          className='ml-2 text-gold'
          type='button'
          onClick={() => handleFavouriteClick(id, name)}
        >
          {isFavourite && <FontAwesomeIcon icon={starSolid} />}
          {!isFavourite && <FontAwesomeIcon icon={starOutline} />}
        </button>
      </h1>
      <table className='table-fixed w-full text-sm'>
        <tbody>
          <tr>
            <td className='py-2'>Temperature:</td>
            <td className='py-2'>{temperature}&deg;C</td>
          </tr>
          <tr>
            <td className='py-2'>Wind speed:</td>
            <td className='py-2'>{windSpeed}m/s</td>
          </tr>
          <tr>
            <td className='py-2'>Humidity:</td>
            <td className='py-2'>{humidity}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Details;
