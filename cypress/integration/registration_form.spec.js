/// <reference types="cypress" />


describe('registration form', () => {
    beforeEach(() => {
        cy.visit('http://template3.booost.bg/')
    })

    it('should have a visible login form', () => {
        cy.get('[data-cy="login-form"]').should('be.visible');
    })

    it('should have a login form title equal to "Account Login"', () => {
        cy.get('.form-box-title').eq(0).should('have.text', "Account Login");
    })

    it('should have a login form that contains two input elements', () => {
        cy.get('[data-cy="login-form"] input[type!=\"checkbox\"]')
            .and('have.length', 2);
    })

    it('should have a register button', () => {
        cy.get('.tab-switch-button.register-switch').should('be.visible');
    })

    it('should have a visible register form when the register button is clicked', () => {
        cy.get('.tab-switch-button.register-switch').click();
        cy.get('[data-cy="login-form"]').should('not.be.visible');
        cy.get('[data-cy="register-form"]').should('be.visible');
    })
});