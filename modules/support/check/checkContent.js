import {isIE} from '../utils/supportIE';

module.exports = (type, element, falseCase, expectedText, done) => {
    let command = (type === 'inputfield') ? 'getValue' : 'getText';

    let doneCallback = done;

    let parsedExpectedText = expectedText;

    let boolFalseCase = !!falseCase;

    // Check for empty element
    if (!doneCallback && typeof parsedExpectedText === 'function') {
        doneCallback = parsedExpectedText;
        parsedExpectedText = '';

        boolFalseCase = !boolFalseCase;
    }

    if (parsedExpectedText === undefined && falseCase === undefined) {
        parsedExpectedText = '';
        boolFalseCase = true;
    }

    let text = browser[command](element);

    if (isIE && Array.isArray(text)) {
        text = text.pop();
    }

    if (boolFalseCase) {
        parsedExpectedText.should.not.equal(text);
    } else {
        parsedExpectedText.should.equal(text);
    }

    doneCallback();
};
