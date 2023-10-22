import './SingleMovieDetails.css';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

function SingleMovieDetails({
  selectedMovie,
  singleMovieDetail,
  setSingleMovieDetail,
  getIndividualMovie,
  getTrailer,
  setError,
}) {
  const [trailerVideos, setTrailerVideos] = useState([]);

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
    getTrailer(id)
      .then((data) => setTrailerVideos(data.videos))
      .catch((error) => {
        console.log(error.message);
        setError(
          'Oops! Something went wrong! Please try again in a couple of minutes.'
        );
      });
  }, []);

  const selectVideo = (trailerVideos) => {
    let selectedVideo = `https://www.youtube.com/embed/${trailerVideos[0].key}`;
    console.log('SELECTED VIDEO', selectedVideo);
    return selectedVideo;
  };

  const formatDate = (inputDate) => {
    const dateParts = inputDate.split("-");
    return `${dateParts[1]}-${dateParts[2]}-${dateParts[0]}`;
  }

  return (
    singleMovieDetail &&
    singleMovieDetail.id === Number(id) && (
      <section id={{ selectedMovie }} className="outer-grid">
        <h2 className="movie-title">{`${singleMovieDetail.title}`}</h2>
        <div className="back-drop">
          <img
            src={singleMovieDetail.backdrop_path}
            className="img-size"
            alt=""
          />
        </div>
        <div className="details">
          <div className="inner-details">
            <div className="details-rating">{`Rating: ${singleMovieDetail.average_rating.toFixed(1)}`}</div>
            <div className="details-genre">{`Genre: ${singleMovieDetail.genres.join(" / ")}`}</div>
            <div className="details-runtime">{`Runtime: ${singleMovieDetail.runtime} minutes`}</div>
            <div className="details-release-date">{`Release Date: ${formatDate(singleMovieDetail.release_date)}`}</div>
          </div>
        </div>
        <div className="trailer">
          {!trailerVideos.length ? (
            <p className="sel-movie-trailer">
              Sorry! There are no trailer videos available for this movie.
            </p>
          ) : (
            <iframe src={selectVideo(trailerVideos)}></iframe>
          )}
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
  getTrailer: PropTypes.func.isRequired,
};
