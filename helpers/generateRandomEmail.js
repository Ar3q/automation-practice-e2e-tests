const randomstring = require('randomstring');

module.exports.generateRandomEmail = () => {
    const begining = randomstring.generate(12);
    const domain = randomstring.generate(12);
    const end = randomstring.generate(2);

    const email = begining + '@' + domain + '.' + end;
    return email;
};