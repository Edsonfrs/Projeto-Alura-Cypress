Cypress.Commands.add('cadastro', (name, email, password, confirmPassword) => {
    cy.get('[data-test="input-name"]').type(name);
    cy.get('[data-test="input-email"]').type(email);
    cy.get('[data-test="input-password"]').type(password);
    cy.get('[data-test="input-confirm-password"]').type(confirmPassword);
    cy.get('[data-test="submit-button"]').click();
 })

 Cypress.Commands.add('cadastroInsucesso', (name, email, password, confirmPassword) => {
    cy.get('[data-test="input-name"]').type(name);
    cy.get('[data-test="input-email"]').type(email);
    cy.get('[data-test="input-password"]').type(password);
    cy.get('[data-test="input-confirm-password"]').type(confirmPassword);
    cy.get('[data-test="submit-button"]').click();
 })


Cypress.Commands.add('login', (email, password) => {
    cy.get('[data-test="input-loginEmail"]').type(email);
    cy.get('[data-test="input-loginPassword"]').type(password);
    cy.get('[data-test="submit-button"]').click();
 })

 Cypress.Commands.add('loginInsucesso', (email, password) => {
    cy.get('[data-test="input-loginEmail"]').type(email);
    cy.get('[data-test="input-loginPassword"]').type(password);
    cy.get('[data-test="submit-button"]').click();
    cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
 })


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })