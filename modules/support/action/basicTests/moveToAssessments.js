module.exports = (name) => {

    browser.pause(1000);

    browser.click("//label[@for='selectField']//ancestor::div[1]");

    browser.pause(1000);

    browser.click("//div[@role = 'document']//ul//li[contains(text(),'"+name+"')]");

    browser.pause(5000);
};
