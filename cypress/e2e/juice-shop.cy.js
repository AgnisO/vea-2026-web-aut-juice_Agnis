import { HomePage } from '../pageObjects/HomePage';
import { LoginPage } from '../pageObjects/loginPage';
import { RegistrationPage } from '../pageObjects/registrationPage';

describe('Juice-shop scenarios', () => {
  context('Without auto login', () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it('Login', () => {
      // Click Account button
      HomePage.accountButton.click();
      // Click Login button
      HomePage.loginButton.click();
      // Set email value to "demo"
      LoginPage.emailField.type('demo');
      // Set password value to "demo"
      LoginPage.passwordField.type('demo');
      // Click Log in
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.userProfileButton.should('contain.text', 'demo');
    });

    it('Registration', () => {
      // Click Account button
      HomePage.accountButton.click();
      // Login button
      HomePage.loginButton.click();
      // Click "Not yet a customer?"
      LoginPage.notYetCustomerLink.click();
      // Generate unique email address e.g.: email_7584@ebox.com
      const randomNum = Math.floor(Math.random() * 9000) + 1000;
      const email = `email_${randomNum}@ebox.com`;
      RegistrationPage.emailField.type(email);
      // Fill in password field and repeat password field with same password
      const password = 'password123';
      RegistrationPage.passwordField.type(password);
      RegistrationPage.passwordRepeatField.type(password);
      // Click on Security Question menu
      RegistrationPage.securityQuestionDropdown.click();
      // Select "Name of your favorite pet?"
      RegistrationPage.securityQuestionOptions.contains('Name of your favorite pet?').click();
      // Fill in answer
      RegistrationPage.securityAnswer.type('Rambo');
      // Click Register button
      RegistrationPage.registerButton.click();
      // Set email value to previously created email
      LoginPage.emailField.type(email);
      // Set password value to previously used password value
      LoginPage.passwordField.type(password);
      // Click login button
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.userProfileButton.should('contain.text', email);
    });
  });

  context('With auto login', () => {
    beforeEach(() => {
      cy.login('demo', 'demo');
      HomePage.visit();
    });

    it('Search and validate Lemon', () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Lemon
      HomePage.searchInputField.type('Lemon{enter}');
      // Select a product card - Lemon Juice (500ml)
      HomePage.productNames.contains('Lemon Juice (500ml)').click();
      // Validate that the card contains "Sour but full of vitamins."
      HomePage.productCard.should('contain.text', 'Sour but full of vitamins.');
    });

    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    it('Search 500ml and validate Lemon, while having multiple cards', () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for 500ml
      HomePage.searchInputField.type('500ml{enter}');
      // Select a product card - Lemon Juice (500ml)
      HomePage.productNames.contains('Lemon Juice (500ml)').click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productCard.should('contain.text', 'Sour but full of vitamins.');
    });

    it('Search 500ml and validate cards', () => {
      HomePage.searchIcon.click();
      HomePage.searchInputField.type('500ml{enter}');

      // Eggfruit Juice
      HomePage.productNames.contains('Eggfruit Juice (500ml)').click();
      HomePage.productCard.should('contain.text', 'Now with even more exotic flavour.');
      HomePage.closeCardButton.click();

      // Lemon Juice
      HomePage.productNames.contains('Lemon Juice (500ml)').click();
      HomePage.productCard.should('contain.text', 'Sour but full of vitamins.');
      HomePage.closeCardButton.click();

      // Strawberry Juice
      HomePage.productNames.contains('Strawberry Juice (500ml)').click();
      HomePage.productCard.should('contain.text', 'Sweet & tasty!');
    });

    it('Read a review', () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for King
      HomePage.searchInputField.type('King{enter}');
      // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
      HomePage.productNames.contains('OWASP Juice Shop "King of the Hill" Facemask').click();
      // Click expand reviews button/icon (wait for reviews to appear)
      cy.get('mat-expansion-panel').click();
      // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
      cy.get('mat-expansion-panel').should('contain.text', 'K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!');
    });

    it('Add a review', () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Raspberry
      HomePage.searchInputField.type('Raspberry{enter}');
      // Select a product card - Raspberry Juice (1000ml)
      HomePage.productNames.contains('Raspberry Juice (1000ml)').click();
      // Type in review - "Tastes like metal"
      cy.get('[aria-label="Text field to review a product"]').type('Tastes like metal');
      // Click Submit
      cy.get('[aria-label="Send the review"]').click();
      // Click expand reviews button/icon (wait for reviews to appear)
      cy.get('mat-expansion-panel').click();
      // Validate review -  "Tastes like metal"
      cy.get('mat-expansion-panel').should('contain.text', 'Tastes like metal');
    });



    it.only('Validate product card amount', () => {
      // Validate that the default amount of cards is 12
      cy.get('mat-grid-tile').should('have.length', 12);
      // Change items per page (at the bottom of page) to 24
      cy.get('.mat-mdc-paginator-touch-target').click();
      cy.get('#mat-option-1').click();
      // Validate that the amount of cards is 24
      cy.get('mat-grid-tile').should('have.length', 24);
      // Change items per page (at the bottom of page) to 36
      cy.get('.mat-mdc-paginator-touch-target').click();
      cy.get('#mat-option-2').click();
      // Validate that the amount of cards is 36
      cy.get('mat-grid-tile').should('have.length', 36);
    });

    it('Buy girly T-shirt', () => {




    });



  });
});