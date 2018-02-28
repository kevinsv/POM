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

    browser.pause(1000);
    let list =  browser.elements("//tbody//tr").value;
     for (let i = 1; i <= list.length; i++) {
           browser.pause(1000);
           browser.click("//tbody//tr["+i+"]//td//span[text()='mark_as_finding'][text()='mark_as_finding']");
           browser.pause(1000);
           if(browser.isVisible("//button//span[text()='Create']")){
            browser.click("//button//span[text()='Create']");
           }

           setTextToTheField("TestFinding " + i.toString(), "title");
           clickButton("Create Finding");

           browser.pause(1000);
           if(browser.isVisible("//button//span[text()='Close']")){
                       browser.click("//button//span[text()='Close']");
           }
      browser.pause(2000);
      }

    browser.pause(2000);
    clickName("home");
};
