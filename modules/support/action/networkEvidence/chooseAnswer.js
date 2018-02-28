import selectByIndex from '../selectByIndex';

module.exports = () => {
    browser.waitForExist("input[type=radio]", global.browserWaitForTimeout);
    selectByIndex("input[type=radio]", 1);
}; 
