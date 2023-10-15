import PropTypes from 'prop-types';

function MovieCards({ filteredData, setSelectedMovie }) {

  function getDetails(event) {
    event.preventDefault();
    setSelectedMovie(event.target.id)
    console.log('click:', event.target.id)
  }

  return filteredData.map((movie) => {
    return (
      <div 
        id={`${movie.id}`} 
        key={`${movie.id}`}
        onClick={ event => getDetails(event)}
      >
        <img src={movie.image} height="25%" width="25%" />
        <h2>{`${movie.title}`}</h2>
      </div>
    );
  });
}

export default MovieCards;

MovieCards.propTypes = {
  filteredData: PropTypes.array.isRequired,
  setSelectedMovie: PropTypes.func.isRequired
}