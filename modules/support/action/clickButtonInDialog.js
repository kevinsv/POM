const tryFor = require('../utils/tryFor');

module.exports = (buttonText, dialogTitle) => {
    let dialogTitleSelector = `//div[contains(@class, 'DialogTitle')]/h2[contains(text(), '${dialogTitle}')]`
    browser.waitForExist(dialogTitleSelector, global.browserWaitForTimeout);
    let dialog = browser.element(dialogTitleSelector).$('..').$('..');
    dialog.waitForExist(`button=${buttonText}`, global.browserWaitForTimeout);
    dialog.waitForEnabled(`button=${buttonText}`,  global.browserWaitForTimeout);
    tryFor(() => {
        dialog.click(`button=${buttonText}`);
    }, global.browserWaitForTimeout);
    browser.pause(1000);
};
