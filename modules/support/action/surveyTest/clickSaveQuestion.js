module.exports = () => {
    let selector = `//div[@class='ActiveSurveyQuestionCard']//following-sibling::button`;
    browser.click(selector);
    browser.pause(1000);
};
