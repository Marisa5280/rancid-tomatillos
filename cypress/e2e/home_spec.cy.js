describe("home page on load", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      {
        statusCode: 200,
        fixture: "moviesData",
      }
    );
    cy.visit("http://localhost:3000");
  });
  it("has a title on load", () => {
    cy.get("header");
    cy.get("h1").should("contain", "Rancid Tomatillos");
  });
  it("has a collection of movies", () => {
    cy.get(".main-content-wrapper")
      .find(".card-container")
      .should("have.length", 40)
      .get(".card-container")
      .first()
      .should("contain", "Black Adam")
      .get(".card-container")
      .last()
      .should("contain", "X");
  });
  it("can click on a movie for additional detail and change the URL based on what is rendered", () => {
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270",
      {
        fixture: "singleMovieData.json",
      }
    );
    cy.intercept(
      "GET",
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270/videos",
      {
        fixture: "videosData.json",
      }
    );
    cy.url("http://localhost:3000/")
      .should("include", "/")
      .get(".main-content-wrapper")
      .get(".card-container")
      .first()
      .click()
      .get(".img-size")
      .should(
        "have.attr",
        "src",
        "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg"
      )
      .get("h2")
      .should("contain", "Black Adam")
      .get(".details-rating")
      .should("contain", "4");
    cy.get(".details-genre")
      .should("contain", "Action / Fantasy / Science Fiction")
      .get(".details-runtime")
      .should("contain", "Runtime: 125 minutes");
    cy.get(".details-release-date")
      .should("contain", "Release Date: 10-19-2022")
      .get("h3")
      .should("contain", "Overview:")
      .get(".movie-description")
      .should(
        "contain",
        "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world."
      );
    cy.get("iframe")
      .should("exist")
      .url()
      .should("include", "/436270")
      .go("back")
      .url()
      .should("include", "/");
  });
});
