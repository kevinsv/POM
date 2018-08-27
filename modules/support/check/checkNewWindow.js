/**
 * Check if a new window or tab is opened
 * @param  {String}   obsolete  The type of opened object (window or tab)
 * @param  {String}   falseCase Whether to check if a new window/tab was opened
 *                              or not
 */
module.exports = (obsolete, falseCase) => {
    /**
     * The handles of all open windows/tabs
     * @type {Object}
     */
    const windowHandles = browser.windowHandles().value;

    if (falseCase === ' not') {
        windowHandles.length.should
            .equal(1, 'A new window should not have not been opened');
    } else {
        windowHandles.length.should.not
            .equal(1, 'A new window has been opened');
    }
};
