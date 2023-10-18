import './MovieCards.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MovieCards({ filteredData, setSelectedMovie }) {
  // function getDetails(movieId) {
  //   setSelectedMovie(movieId);
  // }

  return filteredData.map((movie) => {
    return (
      
      <Link to={`/${movie.id}`} key={`${movie.id}`} tabIndex={0} className="card-container" >
        <div className="thumbnail">
          <img src={movie.image} className="movie-img" />
          <h2 className='sr-only'>{`${movie.title}`}</h2>
        </div>
      </Link>
        
      
     
        
        // onClick={() => getDetails(movie.id)}
        
    )
  })
}

export default MovieCards;

MovieCards.propTypes = {
  filteredData: PropTypes.array.isRequired,
  setSelectedMovie: PropTypes.func.isRequired,
};
