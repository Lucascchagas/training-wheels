

describe('Suite de testes', function () {

    before(function () {
        cy.log('Aqui temos algo que roda antes de TODOS os testes')
    })

    beforeEach(function(){
        cy.log('Aqui temos algo que roda antes de CADA os testes')
    })

    it('teste 1', function () {
        cy.log('testando o teste 1')
    })


    it('teste 2', function () {
        cy.log('testando o teste 2')
    })


    it('teste 3', function () {
        cy.log('testando o teste 3')
    })

    afterEach(function(){
        cy.log('Aqui temos algo que roda depois de CADA os testes')
    })
    after(function(){
        cy.log('Aqui temos algo que roda depois de TODOS os testes')
    })

})