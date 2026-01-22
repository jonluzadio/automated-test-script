Feature: Checkboxes Interaction

Background:
    Given the user is internet herokuapp home page

Scenario: Modify Checkbox State
    When the user clicks the link for checkboxes
    Then the user should be redirected to the checkboxes page

    When the user checks the first checkbox
    Then the first checkbox should be checked

    When the user unchecks the second checkbox if it is checked
    Then the second checkbox should be unchecked