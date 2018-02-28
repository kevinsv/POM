/**
 * Perform a key press
 * @param  {String}   key  The key to press
 * @param  {Function} done Function to execute when finished
 */
module.exports = (key, done) => {
    browser.elementIdValue(browser.elementActive().value.ELEMENT, key);
    browser.pause(1000);
    done();
};
