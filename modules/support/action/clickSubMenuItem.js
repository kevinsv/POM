module.exports = (text) => {
    let selector = ".//h3[.="+"'"+text+"'"+"]";
    browser.pause(1000);
    browser.waitForExist(selector, global.browserWaitForTimeout);
    browser.click(selector);
    browser.pause(1000);
};
