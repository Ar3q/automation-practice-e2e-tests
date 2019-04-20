const generateRandomEmail = require('../helpers/generateRandomEmail');

module.exports = {
    url: 'http://automationpractice.com/index.php?controller=authentication&back=my-account',
    elements: {
        emailRegisterInput: '#email_create',
        createAccountButton: '#SubmitCreate',
        createAccountForm: '#create-account_form'
    },
    commands: [{
        fillEmailRegisterField() {
            const email = generateRandomEmail.generateRandomEmail();
            console.log('Generated email: '+ email);

            return this.setValue('@emailRegisterInput', email);
        },
        clickCreateAccountButton() {
            return this.click('@createAccountButton');
        }
    }]
}