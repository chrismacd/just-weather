import { hasFlag } from 'country-flag-icons';
import Flags from 'country-flag-icons/react/3x2';

function Flag({ countryCode }) {
  if (!hasFlag(countryCode)) return <div />;

  const CountryFlag = Flags[countryCode];

  return <CountryFlag className='w-4 mr-2' title={countryCode} />;
}

export default Flag;
