Cypress.Commands.add("tab", () => {
  cy.focused().trigger("keydown", { keyCode: 9, which: 9 });
});
