import { Given, When } from "cypress-cucumber-preprocessor/steps";

Given("I am on {string}", (url: string) => {
    cy.visit(url);
});

When("I search for {string}", (searchTerms: string) => {
    cy.get('input[title="Search"]').type(`${searchTerms}{enter}`);
});

When("the results load", () => {
    cy.location("pathname").should("include", "/search");
});
