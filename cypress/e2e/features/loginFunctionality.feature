Feature: Login Functionality

Background:
    Given the user is on the login page


Scenario: Successful login with valid credentials
    When the user enters a valid username and password
    And  the user clicks the login button
    Then the user should be redirected to the dashboard page


Scenario: Unsuccessful login with invalid credentials
    When the user enters an invalid username or password
    And  the user clicks the login button
    Then an error message should be displayed


Scenario: Empty username and password fields
    When the user leaves the username and password fields empty
    And  the user clicks the login button
    Then a validation message should be displayed