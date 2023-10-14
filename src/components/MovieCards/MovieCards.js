function MovieCards({ filteredData }) {
  return filteredData.map((movie) => {
    return (
      <div id={`${movie.id}`} key={`${movie.id}`}>
        <img src={movie.image} height="25%" width="25%" />
        <h2>{`${movie.title}`}</h2>
      </div>
    );
  });
}

export default MovieCards;
