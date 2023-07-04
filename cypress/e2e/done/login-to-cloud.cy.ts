describe('Login Test', () => {
  it('should log in successfully', () => {
    cy.visit('https://admin.dev.hope.cloud/login?org=hcorg:33O0ldvawCD');
    
    cy.wait(5000)
    cy.getByTestId('signin-email').should('exist');
    cy.getByTestId('signin-password').should('exist');
    
    cy.wait(5000)
    cy.getByTestId('signin-email').type('foulen1995@gmail.com');
    cy.getByTestId('signin-password').type('Qazwsx123!');
    
    cy.wait(5000)
    cy.getByTestId('signin-submit').click();
    
    cy.wait(5000)
    cy.get('.admin-menu');
    cy.get('.admin-menu').should('exist');
  });
});
