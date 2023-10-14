function getAllMovies() {
  fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies').then(
    (response) => {
      if (response.ok) {
        response.json();
      } else {
        throw new Error('Something went wrong. Please try again.');
      }
    }
  );
}
// .then(data => )
// .catch(error => console.log(error.message))

export { getAllMovies };
