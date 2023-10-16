import "./App.css";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import MainContentWrapper from "../MainContentWrapper/MainContentWrapper";
import MovieCards from "../MovieCards/MovieCards";
import { getAllMovies, getIndividualMovie } from "../../apiCalls/apiCalls";
import SingleMovieDetails from "../SingleMovieDetails/SingleMovieDetails";

function App() {
  const [fullData, setFullData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [singleMovieDetail, setSingleMovieDetail] = useState();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState('');

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
    }).catch((error) => {
      console.log(error.message);
      setError(
        "Oops! Something went wrong! Please try again in a couple minutes."
      );
    });
  }, []);

  return (
    <main className="App">
      <Header />
      <BreadCrumb />
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
          setError={setError}
        />
      )}
      {error && <h2>{error}</h2>}
    </main>
  );
}

// export {setError};
export default App;