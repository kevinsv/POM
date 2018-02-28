import componentToClassName from '../utils/componentToClassName';

export function isComponentExisting(component, textToFind) {
    let className = componentToClassName[component.toLowerCase()];

    browser.pause(2000);
    let selector = `//*[contains(concat(' ',@class,' '),' ${className} ')]`;

    browser.waitUntil(function() {
        try {
            if (!browser.isExisting(selector)) {
                return false;
            }

            let texts = browser.getText(selector);

            if (!Array.isArray(texts)) {
                texts = [texts];
            }

            for (let text of texts) {
                if (text.replace(/\s/g, '').toLowerCase().indexOf(textToFind.toLowerCase().replace(/\s/g, '')) != -1) {
                    return true;
                }
            }

            return false;
        } catch (err) {
            return false;
        }
    }, global.browserWaitForTimeout, `Component ${component} with text ${textToFind} still not exists`);
}

export function checkComponentCountWithText(count, component, textToFind) {
    let className = componentToClassName[component.toLowerCase()];

    let selector = `//*[contains(concat(' ',@class,' '),' ${className} ')]`;

    browser.waitUntil(function() {
        try {
            if (!browser.isExisting(selector)) {
                return false;
            }

            let texts = browser.getText(selector);

            if (!Array.isArray(texts)) {
                texts = [texts];
            }

            let found = 0;

            for (let text of texts) {
                if (text.replace(/\s/g, '').toLowerCase().indexOf(textToFind.toLowerCase().replace(/\s/g, '')) != -1) {
                    found++;
                }
            }

            return found === parseInt(count);
        } catch (err) {
            return false;
        }
    }, global.browserWaitForTimeout, `Still no ${count} ${component}s with text ${textToFind}`);
}
