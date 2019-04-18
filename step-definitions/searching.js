const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

const homepage = client.page.homePageOfStore();

Given(/^a web browser is at the shop home page$/, async () => {
    await homepage.navigate();
});

When(/^the user enters "([^"]*)" into the search bar$/, async (thingToSearch) => {
    await homepage.setQuery(thingToSearch);
    await homepage.clickSearchButton();
});

Then(/^results are showed$/, async () => {
    await homepage;
});

Then(/^message that no results where found for "([^"]*)" is showed$/, searchedProduct => {
    return homepage;
});