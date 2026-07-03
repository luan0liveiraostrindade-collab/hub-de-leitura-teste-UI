/// <reference types="cypress"/> 
import livro from "../fixtures/livros.json" 

describe('Funcionalidade: Busca no catálogo', () => {

    beforeEach(() => {
        cy.visit('catalog.html')
    });

    it('Deve fazer a busca do livro 1984 com sucesso', () => {
        cy.get('#search-input').type('1984')
        cy.get('.card > .card-body').should('contain', '1984')
    });

     it('Deve fazer a busca do livro do arquivo de massa de dados', () => {
        cy.get('#search-input').type(livro[2].livro)
        cy.get('.card > .card-body').should('contain', livro[2].livro)
    });
    
});
