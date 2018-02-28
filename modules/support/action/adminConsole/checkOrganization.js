import clickWithText from '../clickWithText';

module.exports = (OrgName) => {
    browser.pause(5000);
    clickWithText("Organizations");
    browser.pause(3000);
    clickWithText(OrgName);
};
