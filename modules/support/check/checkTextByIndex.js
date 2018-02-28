module.exports = (element, index, expectedText) => {

    browser.waitUntil(
        () => !!browser.elements(element).value[index],
        global.browserWaitForTimeout,
        `Element ${element} at index ${index} still not exist after ${global.browserWaitForTimeout}ms`
    );

    let text = browser.elements(element).value[index].getText();
    text.should.equal(expectedText);

};
