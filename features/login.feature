Feature: Login Page

    Scenario Outline: In Login Page Verify the Error message

        Given I open Login page "https://qa.roomex.com/login"
        When I click on Login button
        Then I validate the Email Error message
        Then I validate the Password Error message