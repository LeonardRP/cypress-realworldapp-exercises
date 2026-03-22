describe('Enviar dinheiro com saldo suficiente', () => {
  it('Deve enviar dinheiro com sucesso', () => {

    cy.visit('http://localhost:3000/signin')

    cy.get('[data-test="signin-username"]')
      .type('Heath93')

    cy.get('[data-test="signin-password"]')
      .type('s3cret')

    cy.get('[data-test="signin-submit"]')
      .click()

    cy.contains('a', 'New')
      .should('be.visible')
      .click()

    cy.url().should('include', '/transaction/new')

    cy.get('[data-test="user-list-search-input"]')
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true })
      .type('Teste Lume')

    cy.contains('[data-test^="user-list-item"]', 'Teste Lume')
      .should('be.visible')
      .scrollIntoView()
      .click({ force: true })

    cy.get('[data-test="transaction-create-amount-input"] input')
      .should('be.visible')
      .type('10')

    cy.get('[data-test="transaction-create-description-input"] input')
      .should('be.visible')
      .type('Pagamento teste')

    cy.get('[data-test="transaction-create-submit-payment"]')
      .should('be.visible')
      .click()

    cy.contains('Paid').should('be.visible')

  })

})

describe('Enviar dinheiro com saldo insuficiente', () => {
  it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {

    cy.visit('http://localhost:3000/signin')

    cy.get('[data-test="signin-username"]').type('Heath93')
    cy.get('[data-test="signin-password"]').type('s3cret')
    cy.get('[data-test="signin-submit"]').click()

    cy.get('[data-test="nav-top-new-transaction"]').click()

    cy.get('[data-test="user-list-search-input"]').type('Teste Lume')

    cy.contains('[data-test^="user-list-item"]', 'Teste Lume').click()

    cy.get('[data-test="transaction-create-amount-input"]')
      .find('input')
      .type('999999')

    cy.get('[data-test="transaction-create-description-input"]')
      .find('input')
      .type('Pagamento inválido')

    cy.get('[data-test="transaction-create-submit-payment"]').click()

    cy.contains('Insufficient funds').should('be.visible')
  })

})