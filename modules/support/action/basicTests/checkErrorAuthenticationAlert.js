
module.exports = () => {
    browser.isVisible("//*[text()[contains(.,'Network connection issue. Please, try again')]]");
    browser.pause(1000);
};
