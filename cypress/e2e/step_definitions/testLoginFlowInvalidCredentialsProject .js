import LoginFlowInvalidCredentials from "@pages/LoginFlowInvalidCredentials"; // Import the Page Object Model

describe('Login Project Test Suite', () => {
  const loginPage = new LoginFlowInvalidCredentials(); // Creating an instance of LoginFlowInvalidCredentials

  it('User cannot login with invalid credentials', () => {
    // Given: A user launches the application
    cy.visit('https://magento.softwaretestingboard.com/'); // Navigate to the application

    // Then: The user clicks on the SignIn button
    loginPage.navigateToSigninPage();

    // Then: The user enters their email "alice.76doe@example.com"
    loginPage.enterEmail('alice.76doe@example.com');
    
    // Then: The user enters their password "Password1243"
    loginPage.enterPassword('Password1243');
    
    // Then: The user clicks on the login button
    loginPage.clickLoginButton();

    // Then: The user should see an error message
    loginPage.verifyErrorMessage('The account sign-in was incorrect or your account is disabled.');
  });
});
