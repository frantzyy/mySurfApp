Feature: As a user I see a list of all the spacex launches

Scenario: list all launches in chronilogical order
Given user is on the home page
When page loads
Then list all the launches in chronilogical order
