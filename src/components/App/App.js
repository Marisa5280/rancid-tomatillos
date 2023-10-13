import './App.css';
import { useState, useEffect } from 'react';
import movieData from '../../mockMovies';

function App() {
  const homepageData = movieData.movies.map((movie) => {
    return {
     id: movie.id,
     title: movie.title,
     image: movie.backdrop_path
    }
  });
  return (
    <div className="App">

    </div>
  );
}

export default App;
