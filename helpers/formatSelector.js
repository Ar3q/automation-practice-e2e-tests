const util = require('util');

module.exports.formatSelector = (selector, text) => {
    const formattedSelector = util.format(selector, text);
    console.log(formattedSelector);
    return formattedSelector;
};