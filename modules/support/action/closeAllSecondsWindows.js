module.exports = (windowType) => {
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
};
