module.exports = () => {
    let selector = '.HomeOpenActivity=Activity'
    browser.waitForExist(selector, global.browserWaitForTimeout);
    browser.waitForVisible(selector, global.browserWaitForTimeout);
};
