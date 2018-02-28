module.exports = (text) => {
    let selector = ".//span[.="+"'"+text+"'"+"]";
    browser.waitForExist(selector, global.browserWaitForTimeout);
    browser.waitForVisible(selector, global.browserWaitForTimeout);
    browser.click(selector);
    browser.pause(1000);
};
