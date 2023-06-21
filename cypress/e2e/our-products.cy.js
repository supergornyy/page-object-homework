describe('Our Products page', () => {
  
    beforeEach(() => {cy.visit('/Page-Object-Model/products.html')})
    
    it('displays all elements on the page', () => {
        cy.get('.navbar-fixed-top').should('be.visible')
        cy.get('.row').should('exist').should('have.length', 3)
        cy.get('footer > .row').contains('Copyright © www.GianniBruno.com')
      })
    
      it('should check the pop-up windows for the presence of elements, buttons, and functionality', () => {
        cy.get('#container-special-offers').click()
        cy.get('.modal-content').should('be.visible')
        cy.get('.modal-title').should('be.visible')
        cy.get('.modal-body').should('be.visible')
        cy.get('.modal-footer').find('.btn').contains('Proceed').click()
        cy.get('.modal-content').should('not.be.visible')
      })

})
  
 