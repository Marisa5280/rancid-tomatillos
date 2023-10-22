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
      )
      .url()
      .should("include", "/436270")
      .go("back")
      .url()
      .should("include", "/");
  });

  /* the code below is an example of some of the methods we tried to write tests for keyboard operability
  - Marisa did extensive research on ways we could try to test with a keyboard. what we found from that research is that there have been bugs posted with cypress since at least 2020 about them not being able to trigger actions with tab or the enter key. we suspect this is a part of the problem we are having with our tests. It is also important to note that automated accessibility testing tools such as axe have not implemented automated keyboard testing, probably for some of the same reasons we have run into here. 
  Things we learned about Cypress are:
  - how to make a custon command `Cypress.Commands.add("tab", () => {
  cy.focused().trigger("keydown", { keyCode: 9, which: 9 });
});`
- instituted .go, to immitate using the browser navigation
- tried using .eq('#') to identify specific positions ion an array, this seemed to work but we could not get the entire test to work 
- $el , a variable you can use with the .should() callback function. It represents the element(s) selected by the preceding command 
- we tried making a keypress using type('{key}'), we looked at the {enter} sequence defined by Cypress (https://docs.cypress.io/api/commands/type)
- we investigated focus to set a focus element, and focused to check if the current DOM element is focused */ 

  // it('Can navigate using keyboard key events', () => {
  //   // const containers = cy.get(".card-container");
  //   // const first = cy.get(".card-container:nth-child(0)");
  //   // // console.log('containers', containers)
  //   // const second = cy.get(".card-container:nth-child(1)");
  //   // expect(first.focus().tab().focused()).to.equal(second);
  //   // // cy.get('a[href*="questions"]').click()
  //   // console.log(
  //     cy.get('.card-container').eq(0).focus().tab().focused().then($el => expect($el[0]).to.equal(cy.get('.card-container').eq(1)))
  //   // ('eq', cy.get('.card-container').eq(1))
  //   // );
  // })
});
