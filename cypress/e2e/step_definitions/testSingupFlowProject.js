import SignupFlowObject from "@pages/SignupFlowObject"; // Importing the Page Object Model

describe('Signup Project Test Suite', () => {
  const signupPage = new SignupFlowObject(); // Creating an instance of the SignupFlowObject

  it('User can create an account with valid data', () => {
    // Given: A user launches the application
    cy.visit('https://magento.softwaretestingboard.com/'); // Navigate to the application

    // Then: The user clicks on the Create Account button
    signupPage.navigateToSignupPage();

    // Then: The user enters their first name "Alice"
    signupPage.enterFirstName('Alice');
    
    // Then: The user enters their last name "Doe"
    signupPage.enterLastName('Doe');
    
    // Then: The user enters their email "alice.7899doe@example.com"
    signupPage.enterEmail('alice.7899doe@example.com');
    
    // Then: The user enters their password "Password123"
    signupPage.enterPassword('Password123');
    
    // Then: The user confirms the password "Password123"
    signupPage.enterConfirmPassword('Password123');
    
    // Then: The user clicks on the Create Account button to submit the form
    signupPage.submitSignupForm();

    // Then: The user account is created successfully
    signupPage.verifySuccessMessage();

    // Then: The user clicks on the welcome button (assumes user is logged in after successful signup)
    signupPage.clickWelcomeButton();

    // And: The user clicks on the signout button to log out
    signupPage.clickLogoutButton();
  });
});
