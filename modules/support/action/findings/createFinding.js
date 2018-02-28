import clickName from '../clickName';
import setToId from '../setTextToId';
import clickButton from '../clickButton';
import setTextToTheField from '../setTextToTheField';
import clickElementWithText from '../clickWithText';

module.exports = (name) => {
    let selector = `.Home button[name=search]`;
    browser.waitForVisible(selector, global.browserWaitForTimeout);
    browser.click(selector);
    setToId(name, 'searchField');
    clickElementWithText(name);
    browser.pause(1000);
    clickButton("Review Response");
    clickButton("mark_as_finding");
    setTextToTheField("TestFinding2250", "title");
    browser.pause(1000);
    clickButton("Create Finding");
    browser.pause(4000);
    clickName("findings");
};
