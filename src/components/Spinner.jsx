import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner as spinner } from '@fortawesome/free-solid-svg-icons';

function Spinner() {
  return (
    <div>
      <div className='text-center mt-4'>
        <FontAwesomeIcon icon={spinner} className='animate-spin h-6' />
      </div>
    </div>
  );
}

export default Spinner;
