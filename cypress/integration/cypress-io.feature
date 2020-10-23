Feature: Cypress IO

Scenario: Opening the Cypress Documentation page
    Given I am on "https://google.com"
    When I search for "Cypress"
    And the results load
    # Then I can click on the first result
    # And it will take me to the Cypress Documentation page
