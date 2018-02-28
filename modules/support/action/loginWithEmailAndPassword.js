import {getTemporaryEmail, getNamedTemporaryEmail} from './emailActions';

export function loginWithEmailAndPassword(email, password) {
    browser.waitForExist(`input[type=email]`, global.browserWaitForTimeout);
    browser.waitForExist(`input[type=password]`, global.browserWaitForTimeout);
    browser.waitForExist(`button=Next`, global.browserWaitForTimeout);

    browser.setValue(`input[type=email]`, email);
    browser.setValue(`input[type=password]`, password);
    browser.click(`button=Next`);
    browser.pause(1000);

    let selector = '//input[@type="text"]';

    if (browser.waitForVisible(selector, global.browserWaitForTimeout)){

        browser.waitForExist(selector, global.browserWaitForTimeout);
        browser.waitForExist(`button=Next`, global.browserWaitForTimeout);
        browser.setValue(`input[type=text]`, '123123'); // @TODO extract as optional argument
        browser.click(`button=Next`);
    }

    // todo: temporary dirty hack
    if (isIE) {
        browser.pause(1000);
        if (browser.isExisting(`button=Next`)) {
            browser.click(`button=Next`);
        }
    }
}

export function loginWithTemporaryEmailAndPassword(password) {
    loginWithEmailAndPassword(getTemporaryEmail(), password);
}

export function loginWithNamedTemporaryEmailAndPassword(name, password) {
    loginWithEmailAndPassword(getNamedTemporaryEmail(name), password);
}
