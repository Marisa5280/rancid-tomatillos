import './BreadCrumb.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function BreadCrumb({ singleMovieDetail, setSingleMovieDetail }) {

  const clickHandler = (event) => {
    setSingleMovieDetail(null)
  };

  return (
    <div className="bread-crumb">
      {singleMovieDetail && (
        <Link to={'/'} onClick={(event) => clickHandler(event)}>
          Return to Home Page
        </Link>
      )}      
    </div>
  );
}

export default BreadCrumb;

BreadCrumb.propTypes = {
  singleMovieDetail: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    budget: PropTypes.number.isRequired,
    revenue: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    tagline: PropTypes.string.isRequired,
    average_rating: PropTypes.number.isRequired,
  }),
  setSingleMovieDetail: PropTypes.func.isRequired,
};
