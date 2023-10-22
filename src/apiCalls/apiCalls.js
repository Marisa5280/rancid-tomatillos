function getAllMovies() {
  return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies").then(
    (res) => {
      if (!res.ok && res.status >= 500) {
        throw new Error(
          "Something Went Wrong On The Server. Please try again."
        );
      }
      if (!res.ok && res.status >= 400 && res.status < 500) {
        throw new Error("Oops! Something went wrong. Please try again.");
      }
      return res.json();
    }
  );
}

function getIndividualMovie(id) {
  return fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`
  ).then((res) => {
    if (
      (!res.ok && res.status >= 400 && res.status < 500) ||
      (!res.ok && res.status >= 500)
    ) {
      throw new Error("Something Went Wrong On The Server. Please try again.");
    }
    return res.json();
  });
}

function getTrailer(id) {
  return fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`
  ).then((res) => {
    if (!res.ok && res.status >= 500) {
      throw new Error("Something Went Wrong On The Server. Please try again.");
    }
    if (!res.ok && res.status >= 400 && res.status < 500) {
      throw new Error("Oops! Something went wrong. Please try again.");
    }
    return res.json();
  });
}

export { getAllMovies, getIndividualMovie, getTrailer };
