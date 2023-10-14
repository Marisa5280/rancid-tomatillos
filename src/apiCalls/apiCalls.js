function getAllMovies() {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies').then(
    (response) => {
      if (!response.ok) {
        throw new Error('Something went wrong. Please try again.');
      }
      return response.json();
    }
  );
}
// console.log('fetchedData', data)

export { getAllMovies };
