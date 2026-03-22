describe('Registro de novo usuário com sucesso', () => {

  it('Deve registrar um novo usuário com informações válidas', () => {

    cy.visit('http://localhost:3000/signup')

    cy.get('[data-test="signup-first-name"]').type('Teste')
    cy.get('[data-test="signup-last-name"]').type('Lume')
    cy.get('[data-test="signup-username"]').type('teste_lume')
    cy.get('[data-test="signup-password"]').type('testelume123')
    cy.get('[data-test="signup-confirmPassword"]').type('testelume123')

    cy.get('[data-test="signup-submit"]').click()

    cy.url().should('include', '/')

  })

})


describe('Tentar registrar um novo usuário com informações incompletas', () => {

  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {

    cy.visit('http://localhost:3000/signup')

    cy.get('[data-test="signup-submit"]').click()

    cy.contains('required').should('be.visible')

  })

})


describe('Login com sucesso', () => {

  it('Deve fazer login com um usuário válido', () => {

    cy.visit('http://localhost:3000/signin')

    cy.get('[data-test="signin-username"]').type('teste_lume')
    cy.get('[data-test="signin-password"]').type('testelume123')

    cy.get('[data-test="signin-submit"]').click()

    cy.url().should('include', '/')

  })

})


describe('Tentar fazer login com credenciais inválidas', () => {

  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {

    cy.visit('http://localhost:3000/signin')

    cy.get('[data-test="signin-username"]').type('errado')
    cy.get('[data-test="signin-password"]').type('errado')

    cy.get('[data-test="signin-submit"]').click()

    cy.contains('invalid').should('be.visible')

  })

})