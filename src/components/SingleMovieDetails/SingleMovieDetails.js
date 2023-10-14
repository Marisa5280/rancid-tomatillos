function SingleMovieDetails( {singleMovieDetail} ) {
    return(
        <div id={`${movie.id}`}>
            <img src={movie.image} height="50%" width="50%" />
            <h2>{`${movie.title}`}</h2>
        </div>
    )
}

export default SingleMovieDetails