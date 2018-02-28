module.exports = (name) => {

    browser.pause(1000);
    browser.click("//tr//td[contains(*, '"+name+"')]//preceding::td[2]//span[1]");
    browser.pause(1000);
 };
