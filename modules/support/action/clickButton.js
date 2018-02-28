import tryFor from '../utils/tryFor';

module.exports = (text) => {
    browser.waitForExist(`button=${text}`, global.browserWaitForTimeout);
    browser.waitForEnabled(`button=${text}`,  global.browserWaitForTimeout);
    tryFor(() => browser.click(`button=${text}`), global.browserWaitForTimeout);
    browser.pause(1000);
};
