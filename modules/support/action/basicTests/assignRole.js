import clickButton from '../clickButton';
import clickElementWithText from '../clickWithText';

module.exports = (role, user) => {

    browser.pause(1000);
    browser.click("//div[text()='"+user+"']");
    clickButton("Assign role");
    browser.click("//div[contains(@class,'MuiSelect')]");
    clickElementWithText(role);
    clickButton("Save");

};
