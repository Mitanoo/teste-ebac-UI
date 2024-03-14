/// <reference types="cypress"/>

describe=('Funcionalidade: Login', () => {

    it.only('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type ('teste.incrivel@uau.com.br')
        cy.get('#password').type ('123456789')
        cy.get('.woocomerce-form > .button').click()

        cy.get('.woocomerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, teste.incrivel (não é teste.incrivel? Sair)')
    })  
})