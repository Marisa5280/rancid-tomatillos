describe("Error handling", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        statusCode: 500,
      }
    ).as("interceptAllMoviesFetch");
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos",
      {
        statusCode: 500,
      }
    );
  });

  it("should display an error message when the server returns a 500 response on page load", () => {
    cy.visit("http://localhost:3000");
    cy.wait("@interceptAllMoviesFetch");
    cy.get("header").should("exist");
    cy.get(".error").contains(
      "Oops! Something went wrong! Please try again in a couple of minutes."
    );
  });
  it("should display an error message when the server returns a 500 response for a single movie", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        statusCode: 500,
      }
    );
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270",
      {
        statusCode: 500,
      }
    );
    
    cy.visit("http://localhost:3000/436270");
    cy.url().should("include", "/436270");
    cy.get(".error").should("exist");
    cy.get(".error").should(
      "contain",
      "Oops! Something went wrong! Please try again in a couple of minutes."
    );
  });
  it("should display an error message when the user goes to a bad url", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/hjndtho",
      {
        statusCode: 500,
      }
    );
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/hjndtho/videos",
      {
        statusCode: 500,
      }
    );
    cy.visit("http://localhost:3000/hjndtho");
    cy.wait("@interceptAllMoviesFetch");
    cy.get("header").should("exist");
    cy.get(".error").contains(
      "Oops! Something went wrong! Please try again in a couple of minutes."
    );
  });
});
