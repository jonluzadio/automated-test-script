Feature: Dynamic Content

Background:
    Given the user is internet herokuapp home page

Scenario: Verify content changes on refresh
    When the user clicks the link for dynamic content
    Then the user should be redirected to the dynamic content page


    When the user captures the current content
    When the user refreshes the dynamic content page
    Then the content should change upon refresh