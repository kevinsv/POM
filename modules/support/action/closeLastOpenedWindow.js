import getLastOpenedWindowHandle from '../utils/getLastOpenedWindowHandle';

module.exports = (type, done) => {
    if (browser.windowHandles().value.length === 1) {
        return done();
    }

    let lastWindowHandle = getLastOpenedWindowHandle();
    browser.window(lastWindowHandle);
    browser.close();

    done();
};
