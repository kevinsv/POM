export function acceptTermsAndConditions() {
    // @TODO add check if modal is displayed
    let elementSelector = `button=Yes`;

    browser.waitForExist(elementSelector, global.browserWaitForTimeout);
    browser.click(elementSelector);
}