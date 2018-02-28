import clickName from '../clickName';

module.exports = () => {
    browser.waitForExist("[name=eng_more]", global.browserWaitForTimeout);
    clickName("eng_more");
}; 
