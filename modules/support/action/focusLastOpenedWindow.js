import getLastOpenedWindowHandle from '../utils/getLastOpenedWindowHandle';

module.exports = (type, done) => {
    browser.window(getLastOpenedWindowHandle());
    browser.pause(5000);
    done();
};
