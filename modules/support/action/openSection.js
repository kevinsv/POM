import {textSelector} from '../utils/selectors';

export function openSection(section, subSection) {
    let sectionSelector = `[name=${section.toLowerCase()}]`;
    browser.waitForVisible(sectionSelector, global.browserWaitForTimeout);
    browser.click(sectionSelector);

    if (subSection) {
        let subSectionSelector = `//*[${textSelector(subSection)}]`;
        browser.waitForVisible(subSectionSelector, global.browserWaitForTimeout);
        browser.click(subSectionSelector);
    }
}