describe('Página de Cadastro', () => {
  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Carmila The Vamp');
    cy.get('[data-test="input-email"]').type('princessvamp@borgopassnet.com');
    cy.get('[data-test="input-password"]').type('Lefanu123456');
    cy.get('[data-test="input-confirm-password"]').type('Lefanu123456');
    cy.get('[data-test="submit-button"]').click();
  })
})