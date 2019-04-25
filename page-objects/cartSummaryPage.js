const formatSelector = require('../helpers/formatSelector');

module.exports = {
    url: 'http://automationpractice.com/index.php?controller=order',
    elements: {
        cartSummary: '#cart_summary',
        nElementOfSummary: '#cart_summary > tbody > tr:nth-of-type(%d)'
    },
    commands: [{
        nthProductsIsVisibleInSummary(nth){
            const nthProduct = formatSelector.formatSelector(this.elements.nElementOfSummary, nth);
            return this.isVisible(nthProduct);
        },

    }]
}