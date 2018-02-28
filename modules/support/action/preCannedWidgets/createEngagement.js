import clickName from '../clickName';
import clickButton from '../clickButton';
import takePause from '../pause';
import setToId from '../setTextToId';
import selectByIndex from '../selectByIndex';
import clickElementWithText from '../clickWithText';

module.exports = () => {

    clickName("engagements");
    clickButton("plus");
    setToId("AetnaEngagement", 'Name');
    setToId("engagementForAetna", 'Description');
    setToId("nmenz", 'Owner');
    browser.click(".MenuItem*=nmenz@pseudogroup.com");
    setToId("nmenz", 'EvidenceReviewer');
    browser.click(".MenuItem*=nmenz@pseudogroup.com");
    setToId("nmenz", 'FindingReviewer');
    browser.click(".MenuItem*=nmenz@pseudogroup.com");
    takePause(2000);
    clickButton("Next");

    browser.click("div=Aetna Inc.");
    takePause(1000);
    clickButton("Next");
    selectByIndex(".RadioButton", 1);
    takePause(1000);
    browser.click(".TableRowColumn");
    clickButton("Next");

    setToId("Risk", 'Filterrequirementsbyname');
    clickElementWithText("Risk Management");
    clickButton("Next");
    clickButton("Next");
    clickButton("Save");
    takePause(3000);
}; 
