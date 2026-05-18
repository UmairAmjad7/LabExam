describe('Login Tests', () => {

  it('Valid Login', () => {

    cy.visit('https://www.saucedemo.com')

    cy.get('[data-test="username"]')
      .type('standard_user')

    cy.get('[data-test="password"]')
      .type('secret_sauce')

    cy.get('[data-test="login-button"]')
      .click()

    cy.url().should('include', '/inventory.html')

    cy.get('.title')
      .should('have.text', 'Products')
  })


  it('Invalid Password Login', () => {

    cy.visit('https://www.saucedemo.com')

    cy.get('[data-test="username"]')
      .type('standard_user')

    cy.get('[data-test="password"]')
      .type('wrongpassword')

    cy.get('[data-test="login-button"]')
      .click()

    cy.get('[data-test="error"]')
      .should('be.visible')
  })


  it('Empty Fields Login', () => {

    cy.visit('https://www.saucedemo.com')

    cy.get('[data-test="login-button"]')
      .click()

    cy.get('[data-test="error"]')
      .should('contain', 'Username is required')
  })

})