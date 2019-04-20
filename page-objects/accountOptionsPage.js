module.exports = {
    url: 'http://automationpractice.com/index.php?controller=my-account',
    elements: {
        body: '.my-account',
        signOutButton: '.logout'
    },
    commands: [{
        isBodyVisible(){
            this.waitForElementVisible('@body', 5000);
            return this.isVisible('@body');
        },
        signOut(){
            return this.click('@signOutButton');
        }
    }]
}