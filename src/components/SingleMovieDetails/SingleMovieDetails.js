import './SingleMovieDetails.css';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

function SingleMovieDetails({
  selectedMovie,
  setSelectedMovie,
  singleMovieDetail,
  setSingleMovieDetail,
  getIndividualMovie,
  setError,
}) {

  let {id} = useParams(); 
  useEffect(() => {
    selectedMovie &&
      getIndividualMovie(id)
        .then((data) => setSingleMovieDetail(data.movie))
        .catch((error) => {
          console.log(error.message);
          setError(
            'Oops! Something went wrong! Please try again in a couple minutes.'
          );
        });
  }, []);

  const allMovieView = (event) => {
    setSelectedMovie(null);
  };

  return (
    <div>
      {singleMovieDetail && (
        <div id={{ selectedMovie }}>
          <button onClick={(event) => allMovieView(event)}>Home</button>
          {console.log("DETAILS", singleMovieDetail )}
          <h2>{`${singleMovieDetail.title}`}</h2>
          <img
            src={singleMovieDetail.backdrop_path}
            className="img-size"
            alt=""
          />
          <div className="details">
            <div className="details-rating">{`| Rating: ${singleMovieDetail.average_rating} | `}</div>
            <div className="details-genre">{`| Genre: ${singleMovieDetail.genres} | `}</div>
            <div className="details-runtime">{`| Runtime: ${singleMovieDetail.runtime} minutes | `}</div>
            <div className="details-release-date">{`| Release Date: ${singleMovieDetail.release_date} |`}</div>
          </div>
          <div className="overview-container">
            <h3>Overview:</h3>
            <p className="movie-description">{`${singleMovieDetail.overview}`}</p>
          </div>
        </div>
)}
        <p>Loading...</p>
      
    </div>)
}
export default SingleMovieDetails;

SingleMovieDetails.propTypes = {
  selectedMovie: PropTypes.number,
  setSingleMovieDetail: PropTypes.func.isRequired,
  singleMovieDetail: PropTypes.object,
  setSelectedMovie: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  getIndividualMovie: PropTypes.func.isRequired,
};
