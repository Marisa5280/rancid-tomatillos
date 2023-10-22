import "./MovieCards.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieCards({ filteredData, setSelectedMovie }) {
  function handleClick(movieId) {
    setSelectedMovie(movieId);
  }
  return filteredData.map((movie) => {
    return (
      <Link
        to={`/${movie.id}`}
        key={`${movie.id}`}
        className="card-container"
        onClick={() => handleClick(movie.id)}
      >
        <div className="thumbnail">
          <img src={movie.image} className="movie-img" alt="" />
          <h2 className="sr-only">{`${movie.title}`}</h2>
        </div>
      </Link>
    );
  });
}

export default MovieCards;

MovieCards.propTypes = {
  filteredData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    key: PropTypes.number.isRequired,
  }),
  setSelectedMovie: PropTypes.func.isRequired,
};
