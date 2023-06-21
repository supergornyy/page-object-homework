describe('Contact Us page check', () => {
  
  beforeEach(() => {cy.visit('/Contact-Us/contactus.html')})

  it('all elements on the Contact Us page are shown', () => {
    cy.get('.navbar-fixed-top > .container, #nav-title')
    cy.get('[name="first_name"]').should('exist')
    cy.get('input[placeholder="First Name"], input[placeholder="Last Name"], input[placeholder="Email Address"]')
    cy.get('textarea.feedback-input, textarea[placeholder="Comments"]')
    cy.get('input[value="RESET"], input[value="SUBMIT"]')
    cy.get('footer > .row').contains('Copyright © www.GianniBruno.com')
  })

  it('form filled and submited', () => {
    let firstName = 'Igor'
    let lastName = 'Gornyi'
    let email = 'igorewka@yopmail.com'
    let message = 'Test message'
    cy.get('[name="first_name"]').type(firstName)
    cy.get('[name="last_name"]').type(lastName)
    cy.get('[name="email"]').type(email)
    cy.get('textarea.feedback-input').type(message)
    cy.get('[type="submit"]').click()
    cy.url().should('include', 'contact-form-thank-you')
    cy.contains('Thank You for your Message!').should('be.visible')
  })

})