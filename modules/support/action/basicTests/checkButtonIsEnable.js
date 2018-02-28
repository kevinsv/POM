/**
 * Check if the given button is enabled
 * @param  {String}   buttonName   Element selector
 * @param  {String}   falseCase Whether to check if the given element is enabled
 *                              or not
 * @param  {Function} done      Function to execute when finished
 */
module.exports = (buttonName, falseCase, done) => {
    /**
     * The enabled state of the given element
     * @type {Boolean}
     */
     browser.pause(1000);
    const isEnabled = browser.isEnabled("//span[text()='"+buttonName+"']/parent::button");
    if (falseCase) {
        isEnabled.should.not
            .equal(true, `expected element "${buttonName}" not to be enabled`);
    } else {
        isEnabled.should
            .equal(true, `expected element "${buttonName}" to be enabled`);
    }

    done();
};
