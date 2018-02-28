module.exports = (text) => {
    browser.pause(2000);
    browser.isExisting("//span[text()='"+text+"']");
};
