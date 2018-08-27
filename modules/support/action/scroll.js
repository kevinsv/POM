/**
 * Scroll the page to the given element
 * @param  {String}   selector Element selector
 */
module.exports = (selector) => {
    // @TODO remove this
    browser.waitForExist(selector, 15000);

    browser.scroll(selector);
};
