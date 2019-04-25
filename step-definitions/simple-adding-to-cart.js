const { client } = require('nightwatch-api');
const { Given, Then, When, After } = require('cucumber');

const homePage = client.page.homePageOfStore();
const productsCatalogPage = client.page.productsCatalogPage();
const cartSummaryPage = client.page.cartSummaryPage();

Given(/^a customer named "([^"]*)" is logged$/, function(name){
    return client.logAs(name);
    // return client;
});

When(/^a user goes to "([^"]*)"$/, category => {
    return homePage.navigate()
        .goToCategoryOfSubmenu("Women", category);
})

When(/^clicks "([^"]*)" on first product$/, button => {
    // resultsPage.click('@firstShowedProduct');
    return productsCatalogPage.addFirstProduct(button);
})

When(/^decides to go click "([^"]*)"$/, button => {
    return productsCatalogPage.clickButtonInAddedProductPopOut(button);
})

Then(/^a customer sees shopping cart summary with added product$/, () => {
    return cartSummaryPage.nthProductsIsVisibleInSummary(1);
})

After(function(){
    return client.logout();
    // return client;
})