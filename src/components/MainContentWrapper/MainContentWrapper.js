import './MainContentWrapper.css';

function MainContentWrapper({ children, selectedMovie }) {
  return (
    <div>
      {selectedMovie === null ? (
        <p className="instructions">Select a movie to view details</p>
      ) : (
        <p className="instructions"></p>
      )}
      <section className="all-movies">{children}</section>
    </div>
  );
}

export default MainContentWrapper;
