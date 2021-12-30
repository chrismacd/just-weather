import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes as times } from '@fortawesome/free-solid-svg-icons';
import Flag from './Flag';

function City({
  id,
  name,
  state,
  country,
  hasDelete = false,
  handleChange,
  handleFavouriteClick = null,
}) {
  return (
    <div className='px-2 py-1 hover:bg-lightblue relative group'>
      <button
        className='text-sm flex w-full items-center'
        type='button'
        onClick={() => handleChange(id)}
      >
        <Flag countryCode={country} />
        <span>
          {name}
          {state && `, ${state}`}
        </span>
      </button>
      {hasDelete && (
        <button
          className='absolute right-2 top-1/2 -mt-2 hidden group-hover:block'
          type='button'
          onClick={() => handleFavouriteClick(id, name)}
        >
          <FontAwesomeIcon className='h-4 block' icon={times} />
        </button>
      )}
    </div>
  );
}

export default City;
