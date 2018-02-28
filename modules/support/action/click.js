import {textSelector, containsTextSelector} from '../utils/selectors';
import componentToClassName from '../utils/componentToClassName';

export function click(text) {
    let elementSelector = `//*[${textSelector(text)}]`;

    browser.waitForExist(elementSelector, global.browserWaitForTimeout);
    browser.click(elementSelector);
}

export function clickComponent(component, text) {
    let className = componentToClassName[component.toLowerCase()];

    let elementSelector = `//*[contains(concat(' ',@class,' '),' ${className} ') and ${containsTextSelector(text)}]`;

    browser.waitForExist(elementSelector, global.browserWaitForTimeout);
    browser.click(elementSelector);
}