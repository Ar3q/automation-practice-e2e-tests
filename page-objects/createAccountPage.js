const formatSelector = require('../helpers/formatSelector');

module.exports = {
    url: 'http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation',
    elements: {
        accountCreationForm: '#account-creation_form',
        firstNameInput: '#customer_firstname',
        lastNameInput: '#customer_lastname',
        passwordInput: '#passwd',
        address1Input: '#address1',
        cityInput: '#city',
        stateDropdown: '#id_state',
        stateOption: {
            selector: "//select[@id='id_state']/option[text()='%s']",
            locateStrategy: 'xpath'
        },
        alabama: '//div[@id="uniform-id_state"]/span',
        zipcodeInput: '#postcode',
        mobilePhoneInput: '#phone_mobile',
        registerButton: '#submitAccount',
    },
    commands: [{
        isFormVisibe(){
            this.waitForElementVisible('@accountCreationForm', 5000, 'UI: Create account form was visible');
            this.isVisible('@accountCreationForm');
            return this;
        },
        fillFormInput(selector, value){
            return this.setValue(selector, value);
        },
        chooseState(stateName){
            return this.setValue('@stateDropdown', stateName);     
        },
        clickRegisterButton(){
            return this.click('@registerButton');
        }
    }]
}