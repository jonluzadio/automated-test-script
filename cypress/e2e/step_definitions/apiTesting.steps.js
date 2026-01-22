import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let apiResponse;
let apiPayload;
const baseUrl = "https://jsonplaceholder.typicode.com/users";

Given("the API endpoint {string} is available", (url) => {
  cy.request({
    method: "GET",
    url: url,
  }).then((response) => {
    expect(response.status).to.eq(200);
  });
});

// GET Request - All users
When("the user sends a GET request to the endpoint", () => {
  cy.request({
    method: "GET",
    url: baseUrl,
  }).then((response) => {
    apiResponse = response;
  });
});

Then("the response status code should be {int}", (statusCode) => {
  expect(apiResponse.status).to.eq(statusCode);
});

Then("the response body should be a valid JSON array", () => {
  expect(apiResponse.body).to.be.an("array");
});

// GET Request - Single Resource
When("the user sends a GET request for the user with ID {int}", (id) => {
  cy.request({
    method: "GET",
    url: `${baseUrl}/${id}`,
  }).then((response) => {
    apiResponse = response;
  });
});

Then("the response body should contain the user data with ID {int}", (id) => {
  expect(apiResponse.body.id).to.eq(id);
});

// POST Request - Data Creation
Given("the user has a valid payload to create a new user", () => {
  apiPayload = {
    name: "Aljon",
    username: "jonuser",
    email: "jonuser@example.com",
  };
});

When("the user sends a POST request to the endpoint", () => {
  cy.request({
    method: "POST",
    url: baseUrl,
    body: apiPayload,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => {
    apiResponse = response;
  });
});

Then(
  "the response body should contain the newly created user with a unique ID",
  () => {
    expect(apiResponse.body).to.include(apiPayload);
    expect(apiResponse.body).to.have.property("id"); // Generated new ID
  },
);
