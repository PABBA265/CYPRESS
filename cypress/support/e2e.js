// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import custom commands for reuse in your tests
import './commands'

// Import the Allure plugin for reporting
import '@shelex/cypress-allure-plugin'

// Import the Cucumber preprocessor
import '@badeball/cypress-cucumber-preprocessor'

// Handling uncaught exceptions to prevent Cypress from failing the tests due to them
Cypress.on('uncaught:exception', (err, runnable) => {
  // Prevent Cypress from failing the test if an uncaught exception occurs
  return false
})
