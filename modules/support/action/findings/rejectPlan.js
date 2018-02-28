import clickName from '../clickName';
import clickButton from '../clickButton';
import takePause from '../pause';
import setToId from '../setTextToId';
import clickSpan from '../clickSpan';
import authenticationProcedure from '../authenticationProcedure';

module.exports = () => {

    clickSpan("TestFinding2250");
    clickButton("Edit");
    clickButton("Reject Deviation");
    setToId("Test Reject","RejectDeviationComment");
    clickButton("Submit");
    clickName("your_profile");
    browser.click(".MenuItem*=Logout");
    takePause(5000);
    authenticationProcedure("nmenz@pseudogroup.com", "VrmP4$$w0rd");
    clickName("findings");
};



