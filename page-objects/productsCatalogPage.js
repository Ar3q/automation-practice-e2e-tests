const formatSelector = require('../helpers/formatSelector');

module.exports = {
    elements:{
        nthShowedProduct: 'ul[class="product_list grid row"] > li:nth-of-type(%d)',
        nthAddToCartButton: '.product_list li:nth-of-type(%d) a[class="button ajax_add_to_cart_button btn btn-default"]',
        addedProductPopOut: '#layer_cart',
        buttonInPopOut: '#layer_cart [title="%s"]',
        gridViewSelector: 'a[title="Grid"]',
    },
    commands: [{
        addFirstProduct(buttonText){
            this.click('@gridViewSelector');
            const firstShowedProduct =  formatSelector.formatSelector(this.elements.nthShowedProduct, 1);
            const firstAddToCardButton =  formatSelector.formatSelector(this.elements.nthAddToCartButton, 1);

            this.click(firstShowedProduct)
                .expect.element(firstAddToCardButton).text.to.equal(buttonText);
            return this.click(firstAddToCardButton);
        },
        clickButtonInAddedProductPopOut(buttonText){
            this.waitForElementVisible('@addedProductPopOut', 10000)
            
            const buttonSelector = formatSelector.formatSelector(this.elements.buttonInPopOut, buttonText);
            this.expect.element(buttonSelector).text.to.equal(buttonText);
            return this.click(buttonSelector);
        }
    }]
}