Feature: Signup Project Test Suite
  This test suite includes scenarios for signup and user account management functionalities.

  Scenario: User can create an account with valid data
    Given A user launches the application
    Given I navigate to the signup page
    When I enter my first name "John"
    And I enter my last name "Doe"
    And I enter a valid email for signup "john.doe@example.com"
    And I enter a new password "mypassword"
    And I confirm the new password "mypassword"
    And I submit the signup form
    Then I should see a success message "Thank you for registering with Main Website Store."
    Then The user clicks on the welcome button
    And The user clicks on the signout button
