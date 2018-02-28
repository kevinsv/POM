module.exports = (element, index) => {
    browser.waitUntil(
        function() {
            return !!browser.elements(element).value[index];
        },
        global.browserWaitForTimeout,
        `Element ${element} at index ${index} still not exist after ${global.browserWaitForTimeout}ms`
    );

    browser.elements(element).value[index].click();
};
