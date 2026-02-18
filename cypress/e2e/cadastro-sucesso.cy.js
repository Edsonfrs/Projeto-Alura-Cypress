describe('Página de Cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.get('[data-test="register-button"]').click();
  })

  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.get('[data-test="input-name"]').type('Dracula The Count');
    cy.get('[data-test="input-email"]').type('dracul@borgopassnet.com');
    cy.get('[data-test="input-password"]').type('Senha123456');
    cy.get('[data-test="input-confirm-password"]').type('Senha123456');
    cy.get('[data-test="submit-button"]').click();
  })
})