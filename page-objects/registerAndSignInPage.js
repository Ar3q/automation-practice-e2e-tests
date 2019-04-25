const generateRandomEmail = require('../helpers/generateRandomEmail');

module.exports = {
    url: 'http://automationpractice.com/index.php?controller=authentication&back=my-account',
    elements: {
        emailRegisterInput: '#email_create',
        createAccountButton: '#SubmitCreate',
        createAccountForm: '#create-account_form',
        emailLoginInput: '#email',
        passwordLoginInput: '#passwd',
        submitLogin: '#SubmitLogin'
    },
    commands: [{
        fillEmailRegisterField() {
            const email = generateRandomEmail.generateRandomEmail();
            return this.setValue('@emailRegisterInput', email);
        },
        clickCreateAccountButton() {
            return this.click('@createAccountButton');
        },
        login(email, password){
            this.setValue('@emailLoginInput', email);
            this.setValue('@passwordLoginInput', password);
            return this.click('@submitLogin');
        }
    }]
}