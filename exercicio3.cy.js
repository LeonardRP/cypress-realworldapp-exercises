describe('Visualizar histórico de transações com sucesso', () => {

  it('Deve exibir o histórico de transações de um usuário corretamente', () => {

    cy.visit('http://localhost:3000/signin')

    cy.get('[data-test="signin-username"]').type('Heath93')
    cy.get('[data-test="signin-password"]').type('s3cret')
    cy.get('[data-test="signin-submit"]').click()

    cy.get('[data-test^="transaction-item"]')
      .should('have.length.greaterThan', 0)

  })

})


describe('Visualizar histórico sem transações', () => {

  it('Deve exibir mensagem quando não houver transações', () => {

    cy.visit('http://localhost:3000/signin')

    cy.get('[data-test="signin-username"]').type('abc123')
    cy.get('[data-test="signin-password"]').type('abc123')
    cy.get('[data-test="signin-submit"]').click()

    // acessar aba "Mine"
    cy.get('[data-test="nav-personal-tab"]').click()

    // valida estado vazio
    cy.contains('No Transactions')
      .should('be.visible')

  })

})