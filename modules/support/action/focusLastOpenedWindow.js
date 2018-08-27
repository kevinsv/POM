import getLastOpenedWindowHandle from '../utils/getLastOpenedWindowHandle';

module.exports = (type) => {
    browser.window(getLastOpenedWindowHandle());
    browser.pause(5000);
};
