module.exports = (text) => {
    browser.pause(2000);
    var textFromElement = browser.getText("//div[@class='SummaryToolbar title']");
    textFromElement.should.contain(text);
};
