function getAllMovies() {
  return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies").then(
    (response) => {
      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }
      return response.json();
    }
  );
}

function getIndividualMovie(id) {
  return fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`
  ).then((res) => {
    console.log("single res", res);
    if (!res.ok) {
      throw new Error("Something Went Wrong On The Server. Please try again.");
    }
    return res.json();
  });
}

export { getAllMovies, getIndividualMovie };
