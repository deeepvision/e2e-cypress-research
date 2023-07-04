describe('Visting services', () => {
  it('Should visit all services', () => {
    cy.visit('https://admin.dev.hope.cloud/login?org=hcorg:33O0ldvawCD');
    
    cy.wait(3000)
    cy.get('[data-testid="signin-email"]').should('exist');
    cy.get('[data-testid="signin-password"]').should('exist');
    
    cy.wait(3000)
    cy.get('[data-testid="signin-email"]').type('foulen1995@gmail.com');
    cy.get('[data-testid="signin-password"]').type('Qazwsx123!');
    
    cy.wait(3000)
    cy.get('[data-testid="signin-submit"]').click();
    
    cy.wait(3000)
    cy.get('[data-testid="products-switcher"]').click();
    cy.wait(3000)

    cy.get('[data-testid="products-switcher-js"]').should('exist');
    cy.get('[data-testid="products-switcher-js"]').click();
    cy.wait(10000)

    cy.origin('https://app-dev.jetstream.studio', () => {
      cy.get('[data-testid="products-switcher"]').should('exist');
      cy.get('[data-testid="products-switcher"]').click();
      cy.wait(3000)
    
      cy.get('[data-testid="products-switcher-mp"]').should('exist');
      cy.get('[data-testid="products-switcher-mp"]').click();
    })
      cy.wait(10000)

    cy.wait(3000)
    cy.get('[data-testid="products-switcher"]').click();
    cy.wait(3000)

    cy.get('[data-testid="products-switcher-an"]').should('exist');
    cy.get('[data-testid="products-switcher-an"]').click();
    cy.wait(10000)

    cy.wait(3000)
    cy.get('[data-testid="products-switcher"]').click();
    cy.wait(3000)

    cy.get('[data-testid="products-switcher-stk"]').should('exist');
    cy.get('[data-testid="products-switcher-stk"]').click();
    cy.wait(10000)

    cy.wait(3000)
    cy.get('[data-testid="products-switcher"]').click();
    cy.wait(3000)

    cy.get('[data-testid="products-switcher-exp"]').should('exist');
    cy.get('[data-testid="products-switcher-exp"]').click();
    cy.wait(10000)
  });
});
