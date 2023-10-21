import './BreadCrumb.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function BreadCrumb({ setSelectedMovie }) {
  const clickHandler = (event) => {
    setSelectedMovie(null);
  };

  return (
    <div className="bread-crumb">
      <Link to={'/'} onClick={(event) => clickHandler(event)}>
        Home
      </Link>
    </div>
  );
}

export default BreadCrumb;

BreadCrumb.propTypes = {
  setSingleMovieDetail: PropTypes.func.isRequired,
};
