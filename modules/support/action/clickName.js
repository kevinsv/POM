import tryFor from '../utils/tryFor';

module.exports = (text) => {
    let elementSelector = `[name=${text}]`;
    browser.waitForExist(elementSelector, global.browserWaitForTimeout);
    tryFor(() => browser.click(elementSelector), global.browserWaitForTimeout);
    browser.pause(1000);
};
