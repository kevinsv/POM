import checkResult from '../../check/checkTextByIndex';

module.exports = (name) => {
    browser.pause(3000);
     checkResult(".AbstractStringDisplayField", 32, name);
};

