// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:

beforeEach(() => {
    cy.intercept('POST', '**/unique-events/submit**', {
        statusCode: 200,
        body: { success: true },
    }).as('mockBacktrace');
    
    cy.intercept('POST', '**/summed-events/submit**', {
        statusCode: 200,
        body: { success: true },
    }).as('mockBacktrace');

    cy.visitUrl()    
})


import './commands'