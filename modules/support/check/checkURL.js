import {isIE} from '../utils/supportIE';
module.exports = (falseCase, expectedUrl, done) => {
    if (isIE) {
        return done();
    }

    let currentUrl = browser.url().value;

    if (falseCase) {
        currentUrl.should.not
            .equal(expectedUrl, `expected url not to be "${currentUrl}`);
    } else {
        currentUrl.should
            .equal(
                expectedUrl,
                `expected url to be "${expectedUrl}" but found
                "${currentUrl}"`
            );
    }

    done();
};
