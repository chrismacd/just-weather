import { useState, useEffect } from 'react';
import Search from './components/Search';
import Details from './components/Details';
import Favourites from './components/Favourites';
import './App.css';

function App() {
  const [cityId, setCityId] = useState(0);
  const [cityDetails, setCityDetails] = useState(null);

  const handleChangeCity = (id) => {
    setCityId(id);
  };

  useEffect(() => {
    console.log('city change', cityId);

    setCityDetails({});
  }, [cityId]);

  return (
    <div className='container mx-auto px-6'>
      <Search handleChangeCity={handleChangeCity} />
      {cityDetails && <Details />}
      <Favourites />
    </div>
  );
}

export default App;
