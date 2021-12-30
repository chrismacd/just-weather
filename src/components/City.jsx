import Flag from './Flag';

function City({ id, name, state, country, handleChange }) {
  return (
    <div className='px-2 py-1 hover:bg-lightblue'>
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
    </div>
  );
}

export default City;
