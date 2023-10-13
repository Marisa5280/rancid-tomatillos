import './App.css';
import { useState, useEffect } from 'react';
import movieData from '../../mockMovies';

function App() {
  const [fulldata, setFullData] = useState({});
  const [filteredData, setFilteredData] = useState([]);

useEffect(() => {
  setFullData(movieData);

  const homepageData = movieData.movies.map((movie) => {
    return {
     id: movie.id,
     title: movie.title,
     image: movie.backdrop_path
    }
  });

  setFilteredData(homepageData);
}, []);

  return (
    <div className="App">
      <header>
        <h1>Rancid Tomatillos</h1>
        </header>
      
    </div>
  );
}

export default App;
