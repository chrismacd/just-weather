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
    <div className='details relative z-10 border border-darkblue p-3 rounded'>
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
      <table className='table-fixed w-full'>
        <tr>
          <td>Temperature:</td>
          <td>{temperature}&deg;C</td>
        </tr>
        <tr>
          <td>Wind speed:</td>
          <td>{windSpeed}m/s</td>
        </tr>
        <tr>
          <td>Humidity:</td>
          <td>{humidity}%</td>
        </tr>
      </table>
    </div>
  );
}

export default Details;
