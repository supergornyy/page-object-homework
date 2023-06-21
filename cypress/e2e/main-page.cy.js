describe('home page', () => {
  
  beforeEach(() => {cy.visit('/Page-Object-Model/index.html')})

  it('shows all elements on the home page', () => {
    cy.get('.navbar-fixed-top > .container').should('be.visible')
    cy.get('#nav-title').should('be.visible').contains('WebdriverUniversity.com (Page Object Model)')
    cy.get('.thumbnail').should('have.length', 4)
    cy.get('.carousel-holder').should('be.visible')
    cy.get('.container-fluid').should('be.visible')
    cy.get(':nth-child(1) > .thumbnail').should('be.visible')
    cy.get(':nth-child(2) > .thumbnail').should('be.visible')
    cy.get(':nth-child(3) > .thumbnail').should('be.visible')
    cy.get(':nth-child(4) > .thumbnail').should('be.visible')
    cy.get('footer > .row').contains('Copyright © www.GianniBruno.com')
  })

  it('navigates on carousel slides', () => {
    cy.get('.carousel-inner .item').first().should('have.class', 'active')
    cy.get('.right').click()
    cy.get('.carousel-inner .item').eq(1).should('have.class', 'active')
    cy.get('.left').click()
    cy.get('.carousel-inner .item').first().should('have.class', 'active')
  })

  it('acts with pop-up window which apears on click find-out-more button', () => {
    cy.get('#button-find-out-more').click()
    cy.get('.modal-content')
    cy.get('.modal-title').should('be.visible')
    cy.get('.modal-body').should('be.visible')
    cy.get('.modal-footer').should('be.visible')
    cy.get('.close').click()
    cy.get('.modal-content').should('not.be.visible')

    cy.get('#button-find-out-more').click()
    cy.get('.modal-body').should('be.visible')
    cy.get('.modal-footer > :nth-child(1)').click()
    cy.get('.modal-content').should('not.be.visible')

    cy.get('#button-find-out-more').click()
    cy.get('.modal-body').should('be.visible')
    cy.get('.modal-footer > :nth-child(2)').click()
    cy.get('.modal-content').should('not.be.visible')
  })

  it('navigates on navigation block', () => {
    // not done yet
    cy.visit('/Page-Object-Model/index.html')
    cy.url().then(currentUrl => {
      cy.get('.container-fluid a').contains('Contact Us').click()
      cy.url().should('not.equal', currentUrl)
    })
  })
  
})
   