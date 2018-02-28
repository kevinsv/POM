module.exports = () => {
    browser.pause(1000);
    browser.isVisible("//*[text()[contains(.,'Provided registration token has expired')]]");
};
