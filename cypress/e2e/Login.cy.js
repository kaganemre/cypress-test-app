describe("Login Page Tests", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173");
    });

    it("Successfully fills out the login form and submits", () => {
        cy.get('input[name="email"]').should('be.visible').type("emre@example.com");
        cy.get('input[name="password"]').type("12345");
        cy.get('input[name="terms"]').check().should('be.checked');

        cy.get('button[type="submit"]').contains('Sign In').click();

        cy.url().should('include', '/success');
        
    });

    it("Fails to submit with an incorrect email", () => {
        cy.get('input[name="email"]').should('be.visible').type('propDesctruct');
        cy.get('input[name="password"]').type("12345");

        cy.contains('Please enter a valid email address').should('be.visible');
        cy.contains('Your input must be at most 6 characters long.').should('not.exist');

        cy.get('button[type="submit"]').should('be.disabled');
        
    });

    it("Fails to submit with both incorrect email and password", () => {
        cy.get('input[name="email"]').should('be.visible').type('propDesctruct');
        cy.get('input[name="password"]').type("123456789");

        cy.contains('Please enter a valid email address').should('be.visible');
        cy.contains('Your input must be at most 6 characters long.').should('be.visible');
    });

    it("Cannot submit with correct email and password because terms are not accepted", () => {
        cy.get('input[name="email"]').should('be.visible').type("kagan@example.com");
        cy.get('input[name="password"]').type("54321");
        cy.get('input[name="terms"]').uncheck().should('not.be.checked');

        cy.get('button[type="submit"]').should('be.disabled');
        
    });



  });
  