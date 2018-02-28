module.exports = (text) => {
    let elementSelector = `//*[text()[contains(.,'${text}')]]`;
    browser.waitForExist(elementSelector, global.browserWaitForTimeout);
    browser.scroll(elementSelector);
};
