Feature: Login test

    Background:

        Given I am on the Login page

    Scenario Outline: Login
        When I login with username and password <user> <password> into the text box
        Then I check that authentication was successful

    Examples:
    |user| |password|
    |"nmenz@pseudogroup.com"| |"VrmP4$$w0rd"|

