 module.exports = (text) => {
    browser.click("//*[contains(@id,"+"'"+text+"'"+")]");
    browser.pause(1000);
};
