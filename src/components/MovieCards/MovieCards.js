import './MovieCards.css';
import PropTypes from 'prop-types';

// function MovieCards({ filteredData, setSelectedMovie }) {
//   function getDetails(event) {
//     event.preventDefault();
//     setSelectedMovie(event.target.id);
//     console.log('click:', event.target.id);
//   }

function MovieCards({ filteredData, setSelectedMovie }) {
  function getDetails(movieId) {
    setSelectedMovie(movieId);
    // console.log('click:', movieId);
  }

  return filteredData.map((movie) => {
    return (
      <div className="card-container"
      key={`${movie.id}`}
      onClick={() => getDetails(movie.id)}
      >
        <div className="thumbnail">
          <img src={movie.image} className="movie-img" alt=""/>
          <h2 className='sr-only'>{`${movie.title}`}</h2>
        </div>
      </div>
    )
  })

  // return filteredData.map((movie) => {
  //   return (
  //     <div
  //       className="thumbnail"
  //       id={`${movie.id}`}
  //       key={`${movie.id}`}
  //       onClick={(event) => getDetails(event)}
  //     >
  //       <img src={movie.image} className="movie-img" />
  //       <h2>{`${movie.title}`}</h2>
  //     </div>
  //   );
  // });
}

export default MovieCards;

MovieCards.propTypes = {
  filteredData: PropTypes.array.isRequired,
  setSelectedMovie: PropTypes.func.isRequired,
};
