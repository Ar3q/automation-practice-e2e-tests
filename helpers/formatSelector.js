const util = require('util');

module.exports.formatSelector = (element, text) => {
    const formattedSelector = util.format(element.selector, text);
    // eslint-disable-next-line no-console
    // console.log(formattedSelector);
    return formattedSelector;
};