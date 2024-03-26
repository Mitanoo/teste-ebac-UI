///<reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('teste.incrivel@uau.com.br')
        cy.get('#password').type('123456789')
        cy.get('.woocommerce-form > .button')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, teste.incrivel (não é teste.incrivel? Sair)')
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

    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocomerce-form > .button').click()
        cy.get('.woocomerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, teste.incrivel (não é teste.incrivel? Sair)')
    });

    it('Deve fazer login com sucesso - Usando Fixture', () => {
        cy.fixture('perfil').then( dados => {
            cy.get('#username').type(dados.usuario, { log: false })
            cy.get('#password').type(dados.senha, { log: false })
            cy.get('.woocomerce-form > .button').click()
            cy.get('.woocomerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, teste.incrivel (não é teste.incrivel? Sair)')
        })
    });

});