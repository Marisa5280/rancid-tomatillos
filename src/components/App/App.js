import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getAllMovies, getIndividualMovie, getTrailer } from '../../apiCalls/apiCalls';
import Header from '../Header/Header';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import MainContentWrapper from '../MainContentWrapper/MainContentWrapper';
import SingleMovieDetails from '../SingleMovieDetails/SingleMovieDetails';
import Error from '../Error/Error';

function App() {
  const [filteredData, setFilteredData] = useState([]);
  const [singleMovieDetail, setSingleMovieDetail] = useState();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getAllMovies()
      .then((data) => {
        setSelectedMovie(null);
        setFilteredData(
          data.movies.map((movie) => {
            return {
              id: movie.id,
              title: movie.title,
              image: movie.poster_path,
              key: movie.id,
            };
          })
        );
      })
      .catch((error) => {
        console.log(error.message);
        navigate('/error');
        setError(
          'Oops! Something went wrong! Please try again in a couple of minutes.'
        );
      });
  }, []);

  return (
    <main className="App">
      <Header />
      <BreadCrumb
        selectedMovie={selectedMovie}
        setSelectedMovie={setSelectedMovie}
      />
      <Routes>
        <Route
          path="/"
          element={
            <MainContentWrapper
              selectedMovie={selectedMovie}
              filteredData={filteredData}
              setSelectedMovie={setSelectedMovie}
            />
          }
        />
        <Route
          path="/:id"
          element={
            <SingleMovieDetails
              selectedMovie={selectedMovie}
              setSelectedMovie={setSelectedMovie}
              singleMovieDetail={singleMovieDetail}
              setSingleMovieDetail={setSingleMovieDetail}
              getIndividualMovie={getIndividualMovie}
              getTrailer={getTrailer}
              setError={setError}
              error={error}
            />
          }
        />
        <Route path="/error" element={<Error error={error} />} />
      </Routes>
      {error && <h2>{error}</h2>}
    </main>
  );
}

export default App;
