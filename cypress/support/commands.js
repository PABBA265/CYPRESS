///<reference types="cypress-xpath"/>
/// <reference types="cypress" />

// Custom command for logging in
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login');
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
});

// Custom command for searching a product
Cypress.Commands.add('searchProduct', (product) => {
  cy.get('input[name="search"]').type(product);
  cy.get('button[type="submit"]').click();
});

// Access the environment variable in your tests
cy.visit(Cypress.env('BASE_URL')); // This dynamically uses the URL from the environment
