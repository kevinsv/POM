export default function setInputValue(value, label) {
    let labelId = `label=${label}`;
    browser.waitForVisible(labelId, global.browserWaitForTimeout);
    let labelElement = browser.element(labelId);

    let parentElement = labelElement.$('..');
    let grandParentElement = parentElement.$('..').$('..');
    let parentTypeClass = parentElement.getAttribute('class');
    let grandParentTypeClass = grandParentElement.getAttribute('class');
    let typeClass = `${grandParentTypeClass} ${parentTypeClass}`;

    if (typeClass.includes(' FormControl')) { // Select
        let itemId = `.MenuItem=${value}`;
        parentElement.$('div[role=button]').click();
        browser.pause(2000);
        browser.waitForVisible(itemId, global.browserWaitForTimeout);
        browser.waitForExist(itemId, global.browserWaitForTimeout);
        browser.click(itemId);
    } else if (typeClass.includes('AutoComplete')) { // AutoComplete
        let itemId = `.MenuItem=${value}`;
        parentElement.$('input').setValue(value.replace(/\s/g, '').slice(0, 4));
        browser.waitForVisible(itemId, global.browserWaitForTimeout);
        browser.click(itemId);
    } else if (typeClass.includes('TextField')) { // TextField
        let inputElement = parentElement.isExisting('textarea')
            ? parentElement.$('textarea[type="text"]')
            : parentElement.$('input');

        inputElement.setValue(value);

    } else {
        let inputId = labelElement.getAttribute('for');
        browser.setValue(`#${inputId}`, value);
        // let inputElement = parentElement.$(`#${inputId}`);
        // inputElement.setValue(value);
    }
}
