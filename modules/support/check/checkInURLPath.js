import {isIE} from '../utils/supportIE';

module.exports = (falseCase, expectedUrlPart, done) => {
    let currentUrl = browser.url().value;
    console.log('currentUrl', currentUrl);

    if (isIE && expectedUrlPart === 'pdf' && currentUrl.indexOf('.pdf') < 0) {
        return done();
    }

    if (falseCase) {
        currentUrl.should.not
            .contain(
                expectedUrlPart,
                `Expected URL "${currentUrl}" not to contain ` +
                `"${expectedUrlPart}"`
            );
    } else {
        currentUrl.should
            .contain(
                expectedUrlPart,
                `Expected URL "${currentUrl}" to contain "${expectedUrlPart}"`
            );
    }

    done();
};
