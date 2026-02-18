describe('Exercicios-01', () => {
    beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
 })

  it('Deve verificar se o texto “Quem ama adota!” está presente no html', () => {
    cy.get('.footer > p');

  })

  it('Deve verificar o texto “Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!” está presente no html', () => {
    cy.get('.initial > p')
  })


  it('Deve verificar o texto “Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!” está presente no html', () => {
    cy.get('.initial > p')
  })

  it('Deve preencher os campos do login corretamente e autenticar o usuário na página usando o ícone na página inicial', () => {    
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.get('.header__message').click();
    cy.get('[data-test="input-loginEmail"]').type('dracul@borgopassnet.com');
    cy.get('[data-test="input-loginPassword"]').type('Senha123456');
    cy.get('[data-test="submit-button"]').click();
  })

})
