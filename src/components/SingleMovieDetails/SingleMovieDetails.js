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
    let selectedVideo = `https://www.youtube-nocookie.com/embed/${trailerVideos[0].key}`;
    return selectedVideo;
  };

  const formatDate = (dateData) => {
    const formatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    };
    const formattedDate = new Date(dateData).toLocaleDateString(
      undefined,
      formatOptions
    );

    return formattedDate;
  };

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
            <p className="details-rating">{`Rating: ${singleMovieDetail.average_rating}`}</p>
            <p className="details-runtime">{`Runtime: ${singleMovieDetail.runtime} minutes`}</p>
            <p className="details-release-date">{`Release Date: ${formatDate(
              singleMovieDetail.release_date
            )}`}</p>
             <p className="details-genre">{`Genre: ${singleMovieDetail.genres.join(
              ', '
            )}`}</p>
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
  selectedMovie: PropTypes.number,
  singleMovieDetail: PropTypes.object,
  setSelectedMovie: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  getIndividualMovie: PropTypes.func.isRequired,
  getTrailer: PropTypes.func.isRequired,
};
