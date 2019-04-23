const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

const homePage = client.page.homePageOfStore();

Given(/^home page of shop is showed$/, () => {
    return homePage.navigate();
});

When(/^user enters email into field for subscribing to newsletter$/, () => {
    return homePage.signUpWithEmailForNewsletter();
});

Then(/^information that subscribing succeed is showed$/, () => {
    homePage.waitForElementVisible('@successInfoAboutNewsletter');
    return homePage.isVisible('@successInfoAboutNewsletter');
});

When(/^user enters "([^"]*)" into field for subscribing to newsletter$/, email => {
    return homePage.signUpWithEmailForNewsletter(email);
});

Then(/^information that given email is already used is showed$/, () => {
    homePage.waitForElementVisible('@noSuccessInfoAboutNewsletter');
    return homePage.isVisible('@noSuccessInfoAboutNewsletter');
});