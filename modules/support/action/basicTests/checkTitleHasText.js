
module.exports = (text) => {
    let selector = '.ListPageTitle.headline';
    browser.waitForExist(selector, global.browserWaitForTimeout);
    browser.waitForVisible(selector, global.browserWaitForTimeout);

    let textFromElement = browser.getText(selector);
    textFromElement.should.equal(text);
};
