module.exports = (text, id) => {
    browser.setValue(`.//*[contains(@id,'${id}')]`, text);
    browser.pause(1000);
};
