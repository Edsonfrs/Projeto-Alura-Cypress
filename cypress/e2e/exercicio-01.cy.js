describe('Exercicios-01', () => {
  it('Deve carregar a página corretamente e clicar no botão "Ver pets disponiveis"', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.contains('.button', 'Ver pets disponíveis para adoção').click();

  })

  it('Deve vistar a página principal do Adopet e testar os botões do Header', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.get('.header__message').click();
    //cy.wait(5000);
    cy.get('input[name="email"]').should('be.visible');
    cy.get('.header__home').click();
  })

  it('Deve visitar a página de login do AdoPet', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.contains('a', 'Fazer login').click();

  })
})