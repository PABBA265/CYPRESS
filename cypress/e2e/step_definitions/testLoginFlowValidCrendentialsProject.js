import LoginFlowValidCredentials from "@pages/LoginFlowvalidCredentials"; // Importing the Page Object Model

describe('Login Project Test Suite', () => {
  const loginPage = new LoginFlowValidCredentials(); // Creating an instance of LoginFlowValidCredentials

  it('User can login with valid credentials', () => {
    // Given: A user launches the application
    cy.visit('https://magento.softwaretestingboard.com/'); // Navigate to the application

    // Then: The user clicks on the SignIn button
    loginPage.navigateToSigninPage();

    // Then: The user enters their email "alice.7doe@example.com"
    loginPage.enterEmail('alice.7doe@example.com');
    
    // Then: The user enters their password "Password123"
    loginPage.enterPassword('Password123');
    
    // Then: The user clicks on the login button
    loginPage.clickLoginButton();

    // Then: The user should be redirected to the account dashboard
    loginPage.verifyDashboardPage();

    // Then: The user clicks on the welcome button
    loginPage.clickWelcomeButton();

    // Then: The user clicks on the logout button
    loginPage.clickLogoutButton();
  });
});
