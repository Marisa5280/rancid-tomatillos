import "./App.css";
import { useState, useEffect } from "react";
import movieData from "../../mockMovies";
import Header from "../Header/Header";
import MainContentWrapper from "../MainContentWrapper/MainContentWrapper";
import MovieCards from "../MovieCards/MovieCards";
import SingleMovieDetails from "../SingleMovieDetails/SingleMovieDetails";
import { getAllMovies } from "../../apiCalls/apiCalls";

function App() {
  const [fulldata, setFullData] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  // const [singleMovieDetail, setSingleMovieDetail] = useState();
  const [selectedMovie, setSelectedMovieData] = useState( {} );

  setSelectedMovieData(movieData.movies.find(movie => movie.id === selectedMovie.id));

  useEffect(() => {
    getAllMovies.then(data => setFullData(data));

    const homepageData = movieData.movies.map((movie) => {
      return {
        id: movie.id,
        title: movie.title,
        image: movie.backdrop_path,
      };
    });

    /*
    In MainContentWrapper we need to add functionality to grab an ID from a clicked movie - use onClick, which would be a part of each card
    */

    setFilteredData(homepageData);
  }, []);

  return (
    <div className="App">
      <Header />
      <MainContentWrapper />
      <MovieCards filteredData={filteredData} />

    </div>
  );
}

export default App;
