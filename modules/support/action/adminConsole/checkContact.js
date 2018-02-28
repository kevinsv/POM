import clickWithText from '../clickWithText';

module.exports = () => {
    browser.pause(5000);
    clickWithText("Contacts");
    browser.pause(3000);
    clickWithText("Automation");
};
