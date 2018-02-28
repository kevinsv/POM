module.exports = (text, hintClassName = '') => {
    let hint = '';
    if (typeof hintClassName === 'string' && hintClassName) {
        hint = `[contains(@class, "${hintClassName}")]`;
    }

    let selector = `//*[text()[contains(.,'${text}')]]${hint}`;

    browser.waitForVisible(selector, global.browserWaitForTimeout);
    browser.waitForExist(selector, global.browserWaitForTimeout);
    browser.click(selector);
    browser.pause(1000);
};
