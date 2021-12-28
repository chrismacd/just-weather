import Search from './components/Search';
import Details from './components/Details';
import Favourites from './components/Favourites';
import './App.css';

function App() {
  return (
    <div className='container mx-auto px-6'>
      <Search />
      <Details />
      <Favourites />
    </div>
  );
}

export default App;
