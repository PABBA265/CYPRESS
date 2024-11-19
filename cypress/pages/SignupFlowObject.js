export default class SignupFlowObject {
  constructor() {
    // Link to navigate to the signup page
    this.createAccountLink = '[href="#contentarea"]~ul li:nth-of-type(3)'; 

    // Input fields for signup
    this.firstNameField = '#firstname';  
    this.lastNameField = '#lastname';  
    this.emailField = '#email_address';  

    // Password and confirm password fields
    this.passwordField = '[title="Password"]';  
    this.confirmPasswordField = '[title="Confirm Password"]';  

    // Button to submit the signup form
    this.createAccountButton = '[title="Create an Account"]';  
    
    // Success message after successful registration
    this.successMessage = '[data-ui-id="message-success"] div';  
    
    // Welcome button to access the user account
    this.welcomeButton = '[class="customer-name active"] button';  
    
    // Logout button
    this.logoutButton = '(//li[@class="authorization-link"])[1]/a';  
  }

  // Navigate to the signup page
  navigateToSignupPage() {
    cy.get(this.createAccountLink).click();
  }

  // Enter details in the signup form
  enterFirstName(firstName) {
    cy.get(this.firstNameField).clear().type(firstName);
  }

  enterLastName(lastName) {
    cy.get(this.lastNameField).clear().type(lastName);
  }

  enterEmail(email) {
    cy.get(this.emailField).clear().type(email);
  }

  enterPassword(password) {
    cy.get(this.passwordField).clear().type(password);
  }

  enterConfirmPassword(confirmPassword) {
    cy.get(this.confirmPasswordField).clear().type(confirmPassword);
  }

  // Submit the signup form
  submitSignupForm() {
    cy.get(this.createAccountButton).click();
  }

  // Verify the success message after registration
  verifySuccessMessage() {
    cy.get(this.successMessage).should('be.visible').and('contain.text', 'Thank you for registering with Main Website Store.');
  }

  // Click the welcome button after successful account creation
  clickWelcomeButton() {
    cy.get(this.welcomeButton).click();
  }

  // Click the logout button
  clickLogoutButton() {
    cy.get(this.logoutButton).click();
  }
}
