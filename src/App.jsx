import { useState } from 'react';
import Search from './components/Search';
import Details from './components/Details';
import Favourites from './components/Favourites';
import './App.css';

function App() {
  const [city, setCity] = useState(0);

  const handleChangeCity = (id) => {
    setCity(id);
  };

  return (
    <div className='container mx-auto px-6'>
      <Search handleChangeCity={handleChangeCity} />
      {city > 0 && <Details />}
      <Favourites />
    </div>
  );
}

export default App;
