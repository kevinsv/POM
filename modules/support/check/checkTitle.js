/**
 * Check the title of the current browser window
 * @param  {Type}     falseCase     Whether to check if the title matches the
 *                                  expected value or not
 * @param  {Type}     expectedTitle The expected title
 */
module.exports = (falseCase, expectedTitle) => {
    /**
     * The title of the current browser window
     * @type {String}
     */
    const title = browser.getTitle();

    if (falseCase) {
        title.should.not
            .equal(
                expectedTitle,
                `expected title not to be "${expectedTitle}"`
            );
    } else {
        title.should
            .equal(
                expectedTitle,
                `expected title to be "${expectedTitle}" but found "${title}"`
            );
    }
};
