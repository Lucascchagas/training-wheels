

it('exemplo de time out', function(){
    cy.visit('/timeout')

    cy.contains('button', 'Habilita').click()

    cy.get('#firstname')
        .should('be.visible')
        .type('Fernando', {timeout: 7000})



})




