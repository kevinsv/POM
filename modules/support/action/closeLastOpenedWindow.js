import getLastOpenedWindowHandle from '../utils/getLastOpenedWindowHandle';

module.exports = (type) => {
    if (browser.windowHandles().value.length === 1) {
    }

    let lastWindowHandle = getLastOpenedWindowHandle();
    browser.window(lastWindowHandle);
    browser.close();
};
