@register
Feature: Creating an account
    As a unregistered user,
    I want to create an account

    @first
    Scenario: Opening bookmark with sign up
        Given a web browser is at the homepage of store
        When user clicks "Sign in" button
        Then page shows form with email input for creating account
    @second
    Scenario: Entering email in order to sing up
        Given a web browser is at the first page for registering
        When user enter valid email
        And clicks "Create an account"
        Then form with more informations to enter is showed
    @third @need-to-sign-out
    Scenario Outline: Fill form to register
        Given a page with personal information form
        When the first name "<first>" is entered by user
        And the last name "<last>" is entered
        And user writes "<password>" as password
        And address "<address>" is entered
        And user enters "<city>" as city
        And state "<state>" is chosen
        And user writes "<zipcode>" as zipcode
        And mobile phone "<number>" is typed
        And user clicks "Register" button to register
        Then user is registered

        Examples:
            | first    | last          | password    | address           | city      | state   | zipcode | number    |
            | Mariusz  | Pudzianowski  | strongPass  | ul. Pudzianowska  | Zaczernie | Alabama | 12890   | 456098123 | 
            | Janusz   | Tracz         | pl3banIa    | ul. Cicha         | Tulczyn   | Utah    | 99999   | 999666000 |
