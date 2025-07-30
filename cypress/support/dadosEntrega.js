/// <reference types="cypress" />

Cypress.Commands.add('preencherDados', (name, surname, zipcode) =>{
    cy.insertValue('[data-test="firstName"]', name) 
    cy.insertValue('[data-test="lastName"]', surname) 
    cy.insertValue('[data-test="postalCode"]', zipcode) 
    
    cy.clickVisibleElement('[data-test="continue"]')
    
})