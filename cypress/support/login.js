/// <reference types="cypress" />

Cypress.Commands.add('login', (user, pass) =>{
    cy.insertValue('[data-test="username"]', user)    
    cy.insertValue('[data-test="password"]', pass)    

    cy.clickVisibleElement('[data-test="login-button"]')
    
})