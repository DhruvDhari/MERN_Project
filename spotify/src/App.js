
import './App.css';
import { Songs } from './components/song';
import { SearchPage } from './pages/SearchPage';

function App() {
  return (
    <>
    <div className="container">
      <h1 className='alert alert-info text-center'>Spotify</h1>
    <SearchPage/>
    {/* <Songs/> */}
    </div>
    
    </>
   
  );
}

export default App;
