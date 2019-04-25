@simple-adding-to-cart
Feature: Simple adding a product
    As a user,
    I want to buy a product,
    So I need add a product to my cart
    
    Background: 
        Given a customer named "Cory Trevor" is logged

    Scenario Outline: Simple adding a product
        When a user goes to "<category>"
        And clicks "Add to cart" on first product
        And decides to go click "Proceed to checkout"
        Then a customer sees shopping cart summary with added product
    
    Examples:
    | category        | 
    | T-shirts        | 
    | Blouses         |
    | Casual Dresses  |
    | Evening Dresses |
    | Summer Dresses  |