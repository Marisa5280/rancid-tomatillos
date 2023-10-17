describe('home page on load', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 200,
      fixture: "moviesData"
    })
    cy.visit('http://localhost:3000');
  })
  it('has a title on load', () => {
    cy.get('header');
    cy.get('h1').should('contain', 'Rancid Tomatillos');
  });
  it('has a collection of movies', () => {
    cy.get('.main-content-wrapper').find('.card-container').should('have.length', 40)
    .get(".card-container").first().should("contain", "Black Adam")
    .get(".card-container").last().should("contain", "X")
  });
  it('can click on a movie for additional detail', () => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270", {
      fixture: "singleMovieData.json"
    })
    cy.get('.main-content-wrapper');
    cy.get(".card-container").first().click();
    cy.get('.img-size').should('have.attr', 'src', "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg");
    cy.get('h2').should('contain', "Black Adam");
    cy.get('.details-rating').should('contain', "4");
    // cy.get('.details-genre').should('contain', "Action,Fantasy,Science Fiction"); fix later when array is destructured
    cy.get('.details-runtime').should('contain', "Runtime: 125 minutes");
    // cy.get('.details-release-date').should('contain', "Release Date: 2022-10-19"); fix late when date is correctly displayed
    cy.get('h3').should('contain', "Overview:");
    cy.get('.movie-description').should('contain', "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.");
  });
})