/**
 * Perform a key press
 * @param  {String}   key  The key to press
 */
module.exports = (key) => {
    browser.elementIdValue(browser.elementActive().value.ELEMENT, key);
    browser.pause(1000);
};
