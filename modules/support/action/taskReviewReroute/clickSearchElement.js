module.exports = () => {
    let selector = `.Home button[name=search]`;
    browser.waitForExist(selector, global.browserWaitForTimeout);
    browser.click(selector);
    browser.pause(1000);
}; 
