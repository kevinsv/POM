/*
 * © Copyright 2017, Prevalent Inc., All Rights reserved.
 */

module.exports = (windowType, done) => {
    let windowHandles = browser.windowHandles().value;
    // console.log('windowHandles', windowHandles);

    // Close all tabs but the main
    windowHandles.forEach((handle) => {
        if (handle !== global.mainWindowHandle) {
            // console.log('removed handle', handle);
            try {
                if (browser.getTabIds().includes(handle)) {
                    browser.switchTab(handle).close();
                }
            } catch(e) {}

        }
    });

    browser.switchTab(global.mainWindowHandle);
    browser.pause(5000);

    done();
};
