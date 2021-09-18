Feature: Reset Page

    Scenario Outline: Reset Page Enter the Email id and Verify Error message

        Given I open Reset page <path1>
        When I enter Email id <email>
        Then I click on Reset Password Page
        Then I verify error message

        Examples:
            | email | path1 |
            | bob@gmail.com | https://qa.roomex.com/forgot-password |