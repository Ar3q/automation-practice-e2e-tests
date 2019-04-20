const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

const homepage = client.page.homePageOfStore();
const registerAndSignInPage = client.page.registerAndSignInPage();
const createAccountPage = client.page.createAccountPage();
const accountOptionsPage = client.page.accountOptionsPage();

Given(/^a web browser is at the homepage of store$/, () => {
    return homepage.navigate();
});

When(/^user clicks "([^"]*)" button$/, textOnButton => {
    return homepage.clickSignInButton(textOnButton);
});

Then(/^page shows form with email input for creating account$/, () => {
    return registerAndSignInPage.isVisible('@createAccountForm');
});

Given(/^a web browser is at the first page for registering$/, () => {
    return registerAndSignInPage.navigate();
});

When(/^user enter valid email$/, () => {
    return registerAndSignInPage.fillEmailRegisterField();
});

When(/^clicks "([^"]*)"$/, (buttonText) => {
    return registerAndSignInPage.clickCreateAccountButton();
});

Then(/^form with more informations to enter is showed$/, () => {
    return createAccountPage.isFormVisibe();
});

Given(/^a page with personal information form$/, async () => {
    await registerAndSignInPage.navigate();
    await registerAndSignInPage.fillEmailRegisterField();
    await registerAndSignInPage.clickCreateAccountButton();
    await createAccountPage.isFormVisibe();
});

When(/^the first name "([^"]*)" is entered by user$/, firstName => {
    return createAccountPage.fillFormInput('@firstNameInput', firstName);
});

When(/^the last name "([^"]*)" is entered$/, lastName => {
    return createAccountPage.fillFormInput('@lastNameInput', lastName);
});

When(/^user writes "([^"]*)" as password$/, password => {
    return createAccountPage.fillFormInput('@passwordInput', password);
});

When(/^address "([^"]*)" is entered$/, address => {
    return createAccountPage.fillFormInput('@address1Input', address);
});

When(/^user enters "([^"]*)" as city$/, city => {
    return createAccountPage.fillFormInput('@cityInput', city);
});

When(/^state "([^"]*)" is chosen$/, state => {
    return createAccountPage.chooseState(state);
});

When(/^user writes "([^"]*)" as zipcode$/, zipcode => {
    return createAccountPage.fillFormInput('@zipcodeInput', zipcode);
});

When(/^mobile phone "([^"]*)" is typed$/, number => {
    return createAccountPage.fillFormInput('@mobilePhoneInput', number);
});

When(/^user clicks "Register" button to register$/, () => {
    return createAccountPage.clickRegisterButton();
});

Then(/^user is registered$/, () => {
    return accountOptionsPage.isBodyVisible();
});

Then(/^sign out$/, () => {
    return accountOptionsPage.signOut();
});
