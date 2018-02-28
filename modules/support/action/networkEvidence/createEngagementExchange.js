import clickName from '../clickName';
import clickButton from '../clickButton';
import takePause from '../pause';
import setToId from '../setTextToId';
import clickElementWithText from '../clickWithText';
import setTextToTheField from '../setTextToTheField';

module.exports = () => {

    clickName("engagements");
    clickButton("plus");
    setTextToTheField("engagementForAetna", "name");
    clickButton("Next");
    browser.click("div=Aetna Inc.");
    browser.scroll("button=Next");
    takePause(1000);
    clickButton("Next");
    clickElementWithText("Manual Tiering");
    takePause(1000);
    clickElementWithText("Tier 1");
    clickButton("Next");
    setToId("Risk", 'FilterRequirementsByName');
    clickElementWithText("Risk Management");
    browser.scroll("button=Next");
    clickButton("Next");
    clickButton("Next");
    browser.scroll("button=Save");
    clickButton("Save");
    takePause(3000);
}; 
