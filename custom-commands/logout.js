module.exports.command = function(){
    this.waitForElementVisible('a[class="logout"', 3000)
        .click('a[class="logout"');
    // eslint-disable-next-line no-console
    console.log('Logged out');
    return this;
}