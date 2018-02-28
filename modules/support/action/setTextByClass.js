module.exports = (text, className) => {

    let element = "//div[contains(@class,"+"'"+className+"'"+")]//div//input";
    browser.waitForExist(element, global.browserWaitForTimeout);
    browser.setValue(element, text);
    browser.pause(1000);
};
