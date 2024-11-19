// pages/LoginFlowValidCredentials.js

export default class LoginFlowValidCredentials {
  constructor() {
    this.signInButton = '[href="#contentarea"]~ul li:nth-of-type(2)'; // SignIn button selector
    this.customerLoginHeader = '[data-ui-id="page-title-wrapper"]'; // Customer Login page header
    this.emailField = '#email'; // Email field selector
    this.passwordField = '#pass'; // Password field selector
    this.loginButton = '#send2'; // Login button selector
    this.dashboardPage = "(//span[@class='logged-in'])[1]"; // Dashboard page element selector
    this.welcomeButton = '[class="customer-name active"] button'; // Welcome button after successful login
    this.logoutButton = '(//li[@class="authorization-link"])[1]/a'; // Logout button selector
  }

  // Navigate to the SignIn page
  navigateToSigninPage() {
    cy.get(this.signInButton).click(); // Click the SignIn button
  }

  // Enter email into the email field
  enterEmail(email) {
    cy.get(this.emailField).clear().type(email); // Type email in the email field
  }

  // Enter password into the password field
  enterPassword(password) {
    cy.get(this.passwordField).clear().type(password); // Type password in the password field
  }

  // Click the login button to submit the form
  clickLoginButton() {
    cy.get(this.loginButton).click(); // Click the login button
  }

  // Verify that the user is redirected to the dashboard after successful login
  verifyDashboardPage() {
    cy.get(this.dashboardPage)
      .should('be.visible')
      .and('contain.text', 'Hello'); // Verify dashboard page is visible and contains "Hello"
  }

  // Click on the welcome button (for example, to navigate to user settings or profile)
  clickWelcomeButton() {
    cy.get(this.welcomeButton).click(); // Click the welcome button
  }

  // Click on the logout button to log out of the application
  clickLogoutButton() {
    cy.get(this.logoutButton).click(); // Click the logout button
  }
}
