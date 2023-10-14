import "./App.css";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import MainContentWrapper from "../MainContentWrapper/MainContentWrapper";
import MovieCards from "../MovieCards/MovieCards";
// import SingleMovieDetails from "../SingleMovieDetails/SingleMovieDetails";
import { getAllMovies, getIndividualMovie } from "../../apiCalls/apiCalls";
import SingleMovieDetails from "../SingleMovieDetails/SingleMovieDetails";

function App() {
  const [fullData, setFullData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [singleMovieDetail, setSingleMovieDetail] = useState();
  const [selectedMovie, setSelectedMovie] = useState(null);

  // setSelectedMovieData(fullData.movies.find(movie => movie.id === selectedMovie.id));

  useEffect(() => {
    getAllMovies().then((data) => {
      setFullData(data);
      setFilteredData(
        data.movies.map((movie) => {
          return {
            id: movie.id,
            title: movie.title,
            image: movie.backdrop_path,
            key: movie.id,
          };
        })
      );
    });
    // .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="App">
      <Header />
      <MainContentWrapper />
      {!selectedMovie && (
        <MovieCards
          filteredData={filteredData}
          setSelectedMovie={setSelectedMovie}
        />
      )}
      {selectedMovie && (
        <SingleMovieDetails
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
          singleMovieDetail={singleMovieDetail}
          setSingleMovieDetail={setSingleMovieDetail}
          getIndividualMovie={getIndividualMovie}
        />
      )}
    </div>
  );
}

export default App;
