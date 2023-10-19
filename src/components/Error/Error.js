import "./Error.css"
import PropTypes from "prop-types";

export default function Error({ error }){
  return (
    <div className="error">{error}</div>
  )
}

Error.propTypes = {
  error: PropTypes.string.isRequired
};