Feature: Signup Project Test Suite

    Scenario: Login with valid credentials
    Given A user launches the application
    Then I navigate to the CustomerLogin page
    And The user enters their email "alice.7doe@example.com"
    Then The user enters their password "Password123"
    Then The user clicks on the signin button in CustomerLogin page
    Then I should see my account dashboard with a welcome message
    Then The user clicks on the welcome button
    And The user clicks on the signout button