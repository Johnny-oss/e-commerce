/// <reference types="cypress" />

describe('template spec', () => {
  it('Login', () => {

    //Login
    cy.login('standard_user','secret_sauce')    

    //Produtos
    cy.clickVisibleElement('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')    
    cy.contains('#remove-sauce-labs-bolt-t-shirt', 'Remove').should('be.visible')

    cy.clickVisibleElement('[data-test="shopping-cart-link"]')
    
    //Carrinho
    cy.clickVisibleElement('[data-test="checkout"]')    

    //Preencher dados de entrega
    cy.preencherDados('John', 'Wick', '55555-07')   

    //Confirmação de Compra
    cy.clickVisibleElement('[data-test="finish"]')    
    cy.checkElementContainsText('[data-test="complete-header"]','Thank you for your order!')
    
  })
})