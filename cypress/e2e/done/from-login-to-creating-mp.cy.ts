describe('From Login to creating Mission Passport', () => {
  it('should log in successfully', () => {
    cy.visit('https://admin.dev.hope.cloud/login');
    
    cy.wait(5000)
    
    cy.getByTestId('signin-email').should('exist');
    cy.getByTestId('signin-password').should('exist');
    
    cy.wait(5000)
    cy.getByTestId('signin-email').type('foulen1995@gmail.com');
    cy.getByTestId('signin-password').type('Qazwsx123!');
    
    cy.wait(1000)
    cy.get('[data-testid="signin-submit"]').click();
    
    cy.wait(5000)
    cy.get('.admin-menu');
    cy.get('.admin-menu').should('exist');

    //Перехід в мішн паспорт
    cy.wait(3000)
    cy.getByTestId('products-switcher').click();
    cy.wait(3000)
    
    cy.getByTestId('products-switcher-mp').should('exist');
    cy.getByTestId('products-switcher-mp').click();
    cy.wait(10000)

    //Створення Паспорт типу
    //Відкриття попапу
    cy.origin('https://app-dev.missionpassport.org', () => {
      cy.get('svg.hc-icon.icon--plus').should('exist').first().click({ force: true });

    
  //вибір типу
      cy.wait(5000);
      cy.get('.hc-radio__circle input[value="mppt:9NSm3qg7FvZ"]').should('exist').click({force: true});
      cy.get('button.hc-button-primary span').contains('Create').click();
      cy.wait(6000)
      cy.url().should('include', 'https://app-dev.missionpassport.org/proposal');

    });
  });
});
