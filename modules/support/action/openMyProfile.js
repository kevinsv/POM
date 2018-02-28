export function openMyProfile() {
    let profileMenuSelector = "[name=your_profile]";
    browser.waitForExist(profileMenuSelector, global.browserWaitForTimeout);
    browser.click(profileMenuSelector);

    let profileSelector = ".MenuItem*=Profile";
    browser.waitForExist(profileSelector);
    browser.click(profileSelector);
    browser.pause(2000);

}
