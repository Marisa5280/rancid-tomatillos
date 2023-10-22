import './BreadCrumb.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function BreadCrumb({ selectedMovie, setSelectedMovie }) {

  const clickHandler = (event) => {
    setSelectedMovie(null);
  };

  return (
    <div className="bread-crumb">
      {selectedMovie && (
        <Link to={'/'} onClick={(event) => clickHandler(event)}>
          Return to Home Page
        </Link>
      )}      
    </div>
  );
}

export default BreadCrumb;

BreadCrumb.propTypes = {
  selectedMovie: PropTypes.number,
  setSingleMovieDetail: PropTypes.func,
};
