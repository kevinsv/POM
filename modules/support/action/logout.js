export function logout() {
    browser.pause(1000);

    let synapseMenuSelector = "[name=your_profile]";

	if (browser.waitForVisible(synapseMenuSelector, global.browserWaitForTimeout)) {
        browser.waitForExist(synapseMenuSelector, global.browserWaitForTimeout);
        browser.waitForVisible(synapseMenuSelector, global.browserWaitForTimeout);
        browser.click(synapseMenuSelector);

        let logoutSelector = ".MenuItem*=Logout";

        browser.waitForExist(logoutSelector);
        browser.waitForVisible(logoutSelector, global.browserWaitForTimeout);
        browser.click(logoutSelector);
	}

	else {
        let consoleMenuSelector = `//span[.="Logout"]`;
        browser.waitForExist(consoleMenuSelector, global.browserWaitForTimeout);
	    browser.waitForVisible(consoleMenuSelector, global.browserWaitForTimeout);
        browser.click(consoleMenuSelector);
    }

    browser.waitForExist(`input[type=email]`, global.browserWaitForTimeout);
    browser.waitForExist(`input[type=password]`, global.browserWaitForTimeout);
}
