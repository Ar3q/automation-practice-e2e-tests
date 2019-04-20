@search
Feature: Searching proudcts
    As a user,
    I want to search products I want to buy,
    So that I use search option on the website

    Background: 
        Given a web browser is at the shop home page

    Scenario: Search for product using search bar
        When the user enters "dress" into the search bar
        Then results are showed

    Scenario: Search for not existing product using search bar
        When the user enters "robot" into the search bar
        Then message that no results where found for "robot" is showed