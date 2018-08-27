const tryFor = require('../utils/tryFor');
import {isIE} from '../utils/supportIE';
module.exports = (text, field) => {
    browser.waitForExist(`input[type=${field}]`, global.browserWaitForTimeout);
    if (isIE) {
        browser.element(`input[type=${field}]`).clearElement();
    }
    tryFor(() => browser.setValue(`input[type=${field}]`, text), global.browserWaitForTimeout);
    browser.pause(1000);
};
