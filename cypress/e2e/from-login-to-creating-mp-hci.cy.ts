describe('From login to creating mission passport', () => {
  it('should log in successfully', () => {
    cy.visit('https://admin.dev.hope.cloud/login?org=hcorg:33O0ldvawCD');
    
    cy.wait(3000)
    cy.get('input[type="email"]').should('exist');
    cy.get('input[type="password"]').should('exist');
    
    cy.wait(3000)
    cy.get('input[type="email"]').type('foulen1995@gmail.com');
    cy.get('input[type="password"]').type('Qazwsx123!');
    
    cy.wait(3000)
    cy.get('button[type="submit"]').click();
    
    cy.wait(3000)
    cy.get('.hc-icon').first().click();
    cy.wait(3000)
    
    cy.get('img[src="https://assets.dev.hope.cloud/products/mp-wide-logo.svg"]').should('exist');
    cy.get('img[src="https://assets.dev.hope.cloud/products/mp-wide-logo.svg"]').click();
    cy.wait(10000)
    
    cy.origin('https://app-dev.missionpassport.org', () => {
     cy.get('.hc-icon-button').first().should('exist');
     cy.get('.hc-icon-button').first().click();
      cy.wait(5000);
      cy.contains('Start').click();
      cy.wait(10000);
      
      cy.get('.hc-radio-group input[value="ileo1"]').click({ force: true });
      cy.wait(3000);
      cy.get('button.hc-button-primary span').contains('Next').click();
      cy.wait(5000);
      cy.get('input.hc-input').eq(0).should('exist', { force: true });
      cy.wait(5000);
      cy.get('input.hc-input[type="text"]').eq(0).type('AutoTest', { force: true });

    });
  });
});
