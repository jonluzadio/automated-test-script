Feature: API Endpoint Validation

As a tester
I want to validate the RESTful API endpoints
So that I can ensure data retrieval and creation works correctly

Background::
    Given the API endpoint "https://jsonplaceholder.typicode.com/users" is available

Scenario: GET Request - Success
    When the user sends a GET request to the endpoint
    Then the response status code should be 200

Scenario: GET Request - Single Resource
    When the user sends a GET request for the user with ID 1
    Then the response status code should be 200
    And the response body should contain the user data with ID 1


Scenario: POST Request - Data Creation
    Given the user has a valid payload to create a new user
    When the user sends a POST request to the endpoint
    Then the response status code should be 201
    And the response body should contain the newly created user with a unique ID