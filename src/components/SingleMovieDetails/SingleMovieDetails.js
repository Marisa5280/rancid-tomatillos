import { useEffect } from "react";
import PropTypes from 'prop-types';

function SingleMovieDetails({
 selectedMovie ,
  setSelectedMovie,
  singleMovieDetail,
  setSingleMovieDetail,
  getIndividualMovie,
}) {
  useEffect(() => {
    // console.log('selectedMovie:', selectedMovie)
      selectedMovie && getIndividualMovie(selectedMovie)
      .then((data) => setSingleMovieDetail(data.movie))
      .catch((error) =>
        console.error("Error fetching individual movie:", error)
      );
      console.log("selectedMovieDetail:", singleMovieDetail);
  }, [selectedMovie]);

  return (
    <div>
      {singleMovieDetail ? (
        <div id={{ selectedMovie }}>
          {/* <button>Home</button> onClick setSelectedMovie(null)*/}
          <img src={singleMovieDetail.image} height="50%" width="50%" />
          <h2>{`${singleMovieDetail.title}`}</h2>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SingleMovieDetails;

// SingleMovieDetails.propTypes = {
//   selectedMovie: PropTypes.string.isRequired
// }


