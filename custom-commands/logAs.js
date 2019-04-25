// eslint-disable-next-line no-unused-vars
const customers = [
    {
        name: 'Cory Trevor',
        email: 'cory@email.com',
        password: 'qwerty'
    },
    {
        name: 'default',
        email: 'default@email.com',
        password: '12345'
    }
]

module.exports.command = function(customersName){
    if(customersName === undefined){
        customersName = 'default';
    }
    
    let customer = customers.filter(element => element.name === customersName);
    customer = customer[0];
    
    const registerAndSignInPage = this.page.registerAndSignInPage();
    registerAndSignInPage.navigate()
        .login(customer.email, customer.password);
    return this;
}