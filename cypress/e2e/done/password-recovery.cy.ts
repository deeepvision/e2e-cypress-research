describe('Password recovery', () => {
  it('Should send email to recover the password', () => {
    cy.visit('https://admin.dev.hope.cloud/password-recovery-request?org=');
    cy.wait(3000);
    cy.get('[data-testid="password-recovery-email"]').should('exist');
    cy.get('[data-testid="password-recovery-email"]').type('foulen1995@gmail.com');
    cy.wait(3000);
    cy.get('[data-testid="password-recovery-submit"]').should('exist');
    cy.get('[data-testid="password-recovery-submit"]').click();
  });
});
