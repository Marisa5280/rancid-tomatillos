import './MovieCards.css';
import PropTypes from 'prop-types';

function MovieCards({ filteredData, setSelectedMovie }) {
  function getDetails(movieId) {
    setSelectedMovie(movieId);
  }

  return filteredData.map((movie) => {
    return (
      <div
        tabIndex={0}
        className="card-container"
        key={`${movie.id}`}
        onClick={() => getDetails(movie.id)}
      >
        <div className="thumbnail">
          <img src={movie.image} className="movie-img" />
          <h2 className='sr-only'>{`${movie.title}`}</h2>
        </div>
      </div>
    )
  })
}

export default MovieCards;

MovieCards.propTypes = {
  filteredData: PropTypes.array.isRequired,
  setSelectedMovie: PropTypes.func.isRequired,
};
