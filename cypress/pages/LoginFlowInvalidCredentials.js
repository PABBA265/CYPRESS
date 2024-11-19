export default class LoginFlowInvalidCredentials {
  constructor() {
    // Link to navigate to the login page
    this.signInLink = '[href="#contentarea"]~ul li:nth-of-type(2)';  
    
    // Input fields for login
    this.emailField = '#email';  
    this.passwordField = '#pass';  
    
    // Login button
    this.loginButton = '#send2';  
    
    // Error message for invalid credentials
    this.errorMessage = '[data-bind="html: $parent.prepareMessageForHtml(message.text)"]';  
  }

  // Navigate to the login page
  navigateToLoginPage() {
    cy.get(this.signInLink).click();
  }

  // Enter email and password for login
  enterEmail(email) {
    cy.get(this.emailField).clear().type(email);
  }

  enterPassword(password) {
    cy.get(this.passwordField).clear().type(password);
  }

  // Click the login button
  submitLogin() {
    cy.get(this.loginButton).click();
  }

  // Verify the error message for invalid login
  verifyErrorMessage(expectedMessage) {
    cy.get(this.errorMessage).should('be.visible').and('contain.text', expectedMessage);
  }
}
