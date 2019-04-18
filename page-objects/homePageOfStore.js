module.exports = {
    url: 'http://automationpractice.com',
    elements: {
        searchInput: 'input[id="search_query_top"]',
        searchSubmitButton: '.button-search',
        resultsList: '#product_list grid row',
        noResultsInfo: '#alert alert-warning'
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
        }
    }]
}