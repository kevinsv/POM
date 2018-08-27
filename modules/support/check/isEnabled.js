/**
 * Check if the given element is enabled
 * @param  {String}   element   Element selector
 * @param  {String}   falseCase Whether to check if the given element is enabled
 *                              or not
 */
module.exports = (element, falseCase) => {
    /**
     * The enabled state of the given element
     * @type {Boolean}
     */
    const isEnabled = browser.isEnabled(element);

    if (falseCase) {
        isEnabled.should.not
            .equal(true, `expected element "${element}" not to be enabled`);
    } else {
        isEnabled.should
            .equal(true, `expected element "${element}" to be enabled`);
    }
};
