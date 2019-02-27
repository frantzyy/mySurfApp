Feature: As a surfer I want to search for surf spots

Scenario: free text search
Given user is on the search page
When they type
Then surf spots are listed that match
