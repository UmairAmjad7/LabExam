describe('Navigation Tests', () => {

  const login = () => {

    cy.visit('https://www.saucedemo.com')

    cy.get('#user-name', { timeout: 10000 })
      .should('be.visible')
      .type('standard_user')

    cy.get('#password', { timeout: 10000 })
      .should('be.visible')
      .type('secret_sauce')

    cy.get('#login-button', { timeout: 10000 })
      .should('be.visible')
      .click()

    // THIS is the MOST IMPORTANT CHECK
    cy.url({ timeout: 10000 }).should('include', 'inventory')
  }

  beforeEach(() => {
    login()
  })

  it('Open Menu Link', () => {

    cy.get('#react-burger-menu-btn', { timeout: 10000 })
      .should('be.visible')
      .click()

    cy.get('#about_sidebar_link')
      .should('be.visible')
      .click()

    cy.url().should('include', 'saucelabs')
  })

  it('Visit Two Pages', () => {

    cy.get('.inventory_list', { timeout: 10000 })
      .should('be.visible')

    cy.get('#react-burger-menu-btn')
      .should('be.visible')
      .click()

    cy.get('#logout_sidebar_link')
      .should('be.visible')
      .click()

    cy.url().should('eq', 'https://www.saucedemo.com/')

    cy.get('.login_logo')
      .should('be.visible')
  })

})