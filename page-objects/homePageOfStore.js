module.exports = {
    url: 'http://automationpractice.com',
    elements: {
        searchInput: 'input[id="search_query_top"]',
        searchSubmitButton: '.button-search',
        resultsList: 'ul[class="product_list grid row"]',
        noResultsInfo: 'p[class="alert alert-warning"]',
        signInButton: '.login'
    },
    commands: [{
        async setQuery(value){
            await this.setValue('@searchInput', value)
        },
        async clickSearchButton(){
            await this.click('@searchSubmitButton')
        }, 
        async isResultsListShowed(){
            await this.isVisible('@resultsList')
        },
        async isNoResultsInfoShowed(searchedProduct){
            await this.isVisible('@noResultsInfo');
            const text = 'No results were found for your search ' + '"' + searchedProduct + '"';
            await this.assert.containsText('@noResultsInfo', text,'Seen warning with text: '+text);
        },
        clickSignInButton(text){
            this.assert.containsText('@signInButton', text);
            return this.click('@signInButton')
        }
    }]
}