import {textSelector} from '../utils/selectors';

export function setValue(value, label) {
    let component;

    browser.waitUntil(function() {
        let elements = browser.$$(`//*[${textSelector(label)}]`);

        for (let element of elements) {
            let tagName = element.getTagName();
            let parentClass = element.$('..').getAttribute('class');

            if (tagName === 'label') {
                component = element.$('..');
                return true;
            }

            if (tagName === 'div' && parentClass === 'AutoComplete') {
                component = element.$('..');
                return true;
            }

            if (tagName === 'div' && parentClass === 'TextField') {
                component = element.$('..');
                return true;
            }
        }

        return false;
    }, global.browserWaitForTimeout, `Input with label=${label} still not exists`, 5000);

    let typeClass = component.getAttribute('class');

    if (typeClass === 'SelectField') {
        let divId = component.$('label').getAttribute('for');
        browser.click('#'+divId);

        let menuValueSelector = `.MenuItem*=${value}`;
        browser.waitForExist(menuValueSelector, global.browserWaitForTimeout);
        browser.click(menuValueSelector);
    } else if (typeClass === 'AutoComplete') {
        let input = component.$('input');
        input.setValue(value);

        let menuValueSelector = `.MenuItem*=${value}`;
        browser.waitForExist(menuValueSelector, global.browserWaitForTimeout);
        browser.click(menuValueSelector);
    } else if (typeClass === 'TextField') {
        let input = component.$('input');
        input.setValue(value);
    } else {
        let inputId = component.$('label').getAttribute('for');

        let inputSelector = `.//*[contains(@id,'${inputId}')]`;
        browser.waitForExist(inputSelector, global.browserWaitForTimeout);
        browser.setValue(inputSelector, value);
    }
}

export function selectValue(text) {
    let elementSelector = `//*[${textSelector(text)}]`;

    browser.waitForExist(elementSelector, global.browserWaitForTimeout);

    let selectContainer = browser.$(elementSelector).$("./ancestor::div[contains(concat(' ', @class, ' '), ' RadioButton ')][1]");

    selectContainer.$('input').click();
}
