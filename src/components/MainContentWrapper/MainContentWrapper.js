import "./MainContentWrapper.css";
import MovieCards from "../MovieCards/MovieCards";

function MainContentWrapper({ selectedMovie, filteredData, setSelectedMovie }) {
  return (
    <div className="main-content-wrapper">
      {!selectedMovie ? (
        <p className="instructions">Select a movie to view details</p>
      ) : (
        <p className="instructions"></p>
      )}
      <section className="all-movies">
        {
          <MovieCards
            filteredData={filteredData}
            setSelectedMovie={setSelectedMovie}
          />
        }
      </section>
    </div>
  );
}

export default MainContentWrapper;
