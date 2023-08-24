
const niceIframe = function(){
    return cy
        .get('#weareqaninja')
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap)

}

const badIframe = function(){
    return cy
    .get('iframe[src*=instagram]')
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap)
   
}

it ('deve validar o total de seguidores com nice iframe', function(){
    cy.visit('/nice_iframe')

    niceIframe().find('.FollowerCountText', '7.255 seguidores')
        .should('be.visible')

})


it ('deve validar o total de seguidores com bad iframe', function(){
    cy.visit('/bad_iframe')

    badIframe()
        .contains('.FollowerCountText', '7.255 seguidores')
        .should('be.visible')

})





