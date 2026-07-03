/// <reference types="cypress"/> 
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cy.visit('register.html')
    });

    it('Deve fazer cadastro com sucesso, usando função JS', () => {
        let email = `teste${Date.now()}@teste.com`
        cy.get('#name').type('Luan Oliveira')
        cy.get('#email').type(email)
        cy.get('#phone').type('11998251349')
        cy.get('#password').type('Teste@Teste2')
        cy.get('#confirm-password').type('Teste@Teste2')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
    });

    it('Deve fazer cadastro com sucesso, usando Faker', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('11998251349')
        cy.get('#password').type('Teste@Teste2')
        cy.get('#confirm-password').type('Teste@Teste2')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
        cy.get('#user-name').should('contain', nome)
    });

    it('Deve preencher cadastro com sucesso - Usando comando customizado', () => {
        let email = `teste${Date.now()}@teste.com`
        let nome = faker.person.fullName({ sex: 'male' })
        cy.preencherCadastro(
            nome,
            email,
            '11998251365',
            'Teste@123',
            'Teste@123',
        )
        cy.url().should('include', 'dashboard')
    });

});