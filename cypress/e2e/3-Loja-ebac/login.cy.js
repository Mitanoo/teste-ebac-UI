///<reference types="cypress"/>

describe=('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('teste.incrivel@uau.com.br')
        cy.get('#password').type('123456789')
        cy.get('.woocomerce-form > .button').click()
        cy.get('.woocomerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, teste.incrivel (não é teste.incrivel? Sair)')
    });

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('teste.não-incrível')
        cy.get('#password').type('123456789')
        cy.get('.woocomerce-form > .button').click()
        cy.get('.woocomerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválido', () => {
        cy.get('#username').type('teste.incrível@uau.com.br')
        cy.get('#password').type('1')
        cy.get('.woocomerce-form > .button').click()
        cy.get('.woocomerce-error').should('exist')
    });

})