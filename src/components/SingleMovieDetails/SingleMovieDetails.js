import { useEffect } from 'react';
import PropTypes from 'prop-types';

function SingleMovieDetails({
  selectedMovie,
  setSelectedMovie,
  singleMovieDetail,
  setSingleMovieDetail,
  getIndividualMovie,
}) {
  useEffect(() => {
    // console.log('selectedMovie:', selectedMovie)
    selectedMovie &&
      getIndividualMovie(selectedMovie)
        .then((data) => setSingleMovieDetail(data.movie))
        .catch((error) =>
          console.error('Error fetching individual movie:', error)
        );
    console.log('selectedMovieDetail:', singleMovieDetail);
  }, [selectedMovie]);

  const allMovieView = (event) => {
    setSelectedMovie(null)
  }

  return (
    <div>
      {singleMovieDetail ? (
        <div id={{ selectedMovie }}>
          <button onClick={(event) => allMovieView(event)}>
          Home</button>
          <img src={singleMovieDetail.backdrop_path} height="50%" width="50%" />
          <h2>{`${singleMovieDetail.title}`}</h2>
          <div>
            <div>{`Rating: ${singleMovieDetail.average_rating}`}</div>
            <div>{`Genre: ${singleMovieDetail.genres}`}</div>
            <div>{`Runtime: ${singleMovieDetail.runtime} minutes`}</div>
            <div>{`Release Date: ${singleMovieDetail.release_date}`}</div>
          </div>
          <div>{`Overview: ${singleMovieDetail.overview}`}</div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SingleMovieDetails;

SingleMovieDetails.propTypes = {
  selectedMovie: PropTypes.string.isRequired
}
