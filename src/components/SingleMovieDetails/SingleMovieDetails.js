import './SingleMovieDetails.css';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

function SingleMovieDetails({
  selectedMovie,
  singleMovieDetail,
  setSingleMovieDetail,
  getIndividualMovie,
  setError,
}) {
  let { id } = useParams();
  useEffect(() => {
    id &&
      getIndividualMovie(id)
        .then((data) => setSingleMovieDetail(data.movie))
        .catch((error) => {
          console.log(error.message);
          setError(
            'Oops! Something went wrong! Please try again in a couple of minutes.'
          );
        });
  }, []);

  return (
    singleMovieDetail &&
    singleMovieDetail.id === Number(id) && (
      <section id={{ selectedMovie }} className="outer-grid">
        <h2 className="movie-title">{`${singleMovieDetail.title}`}</h2>
        <div className='back-drop'>
          <img
          src={singleMovieDetail.backdrop_path}
          className="img-size"
          alt=""
          />
        </div>
        <div className="details">
          <div className="inner-details">
          <div className="details-rating">{`Rating: ${singleMovieDetail.average_rating}`}</div>
          <div className="details-genre">{`Genre: ${singleMovieDetail.genres}`}</div>
          <div className="details-runtime">{`Runtime: ${singleMovieDetail.runtime} minutes`}</div>
          <div className="details-release-date">{`Release Date: ${singleMovieDetail.release_date}`}</div>
          </div>
        </div>
        <div className="trailer">
          <p>This is where the trailer will go</p>
          {/* <p>{`${singleMovieDetail.id.videos.id}`}</p> */}
        </div>
        <div className="overview-container">
          <div>
          <h3>Overview:</h3>
          <p className="movie-description">{`${singleMovieDetail.overview}`}</p>
          </div>
        </div>
      </section>
    )
  );
}
export default SingleMovieDetails;

SingleMovieDetails.propTypes = {
  selectedMovie: PropTypes.number.isRequired,
  singleMovieDetail: PropTypes.object,
  setSelectedMovie: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  getIndividualMovie: PropTypes.func.isRequired,
};
