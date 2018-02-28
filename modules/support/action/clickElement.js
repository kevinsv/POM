const tryFor = require('../utils/tryFor');

/**
 * Perform an click action on the given element
 * @param  {String}   action  The action to perform (click or doubleClick)
 * @param  {String}   type    Type of the element (link or selector)
 * @param  {String}   element Element selector
 * @param  {Function} done    Function to execute when finished
 */
module.exports = (action, type, element, done) => {
    const elementSelector = (type === 'link') ? `=${element}` : element;
    const method = (action === 'click') ? 'click' : 'doubleClick';

    browser.waitForExist(elementSelector, global.browserWaitForTimeout);
    tryFor(function () {
        browser[method](elementSelector);
    }, global.browserWaitForTimeout);

    browser.pause(1000);

    done();
};
