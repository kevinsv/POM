module.exports = () => {
    browser.pause(1000);
    browser.isVisible("//*[text()[contains(.,'Invalid OTP token')]]");
    browser.pause(1000);
};
