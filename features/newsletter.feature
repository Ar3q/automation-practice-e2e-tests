@newsletter
Feature: Signing up for newsletter
    As a user,
    I want to be informed about new sales, products etc.
    So I sign up for newsletter

    Background: 
        Given home page of shop is showed

    Scenario: Subscribe to newsletter with not used email
        When user enters email into field for subscribing to newsletter
        Then information that subscribing succeed is showed

    Scenario: Subscribe to newsletter with already used email for that
        When user enters "alreadyUsed@email.com" into field for subscribing to newsletter
        Then information that given email is already used is showed
        