import './App.css';
import { useState, useEffect } from 'react';
import movieData from '../../mockMovies';
import Header from '../Header/Header';
import MainContentWrapper from '../MainContentWrapper/MainContentWrapper';

function App() {
  const [fulldata, setFullData] = useState({});
  const [filteredData, setFilteredData] = useState([]);

useEffect(() => {
  setFullData(movieData.movies);

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
     <Header />
     <MainContentWrapper/>
      
    </div>
  );
}

export default App;
