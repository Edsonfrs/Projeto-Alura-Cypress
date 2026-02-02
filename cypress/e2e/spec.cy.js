describe('Página de Cadastro', () => {
  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="nome"]').type('Sempronios Densus');
    cy.get('input[name="email"]').type('sempronius_densus@romanet.com');
    cy.get('input[name="password"]').type('Senha123456');
    cy.get('input[name="confirm_password"]').type('Senha123456');
    cy.contains('button', 'Cadastrar').click();
  })
})