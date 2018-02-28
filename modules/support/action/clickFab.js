import tryFor from '../utils/tryFor';

module.exports = () => {
    let selector = '.Fab button';
    browser.waitForExist(selector, global.browserWaitForTimeout);
    browser.waitForEnabled(selector,  global.browserWaitForTimeout);
    tryFor(() => browser.click(selector), global.browserWaitForTimeout);
    browser.pause(1000);
};
