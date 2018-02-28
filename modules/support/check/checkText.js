module.exports = (element, expectedText) => {

    browser.waitUntil(
        function() {
            return !!browser.element(element);
        },
        global.browserWaitForTimeout,
        `Element ${element} still not exist after ${global.browserWaitForTimeout}ms`
    );

    const text = browser.element(element).getText();
    text.should.equal(expectedText);

};
