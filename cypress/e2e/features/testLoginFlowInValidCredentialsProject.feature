Feature: Signup Project Test Suite
  This test suite includes scenarios for login and signup functionalities.

  Scenario: Login with invalid credentials
    Given A user launches the application
    Then I navigate to the login page
    When I enter an invalid email "invalid@example.com"
    And I enter an invalid password "wrongpassword"
    And I submit the login form
    Then I should see an error message for incorrect credentials
