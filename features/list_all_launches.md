Feature: As a user I see a list of all the spacex launches

Scenario: list all launches from newest to oldest
Given user is on the home page
When page loads
Then list all the launches from newest to oldest
And display mission number
And display mission name
And display mission badge
And display rocket name
