import './MainContentWrapper.css';

function MainContentWrapper({ children }) {
  return (
    <div>
      <p className="instructions">Select a movie to view details</p>
      <section className="all-movies">{children}</section>
    </div>
  );
}

export default MainContentWrapper;
