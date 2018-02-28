import clickName from '../clickName';
import clickButton from '../clickButton';
import takePause from '../pause';
import setToId from '../setTextToId';
import clickElementWithID from '../clickElementWithID';
import clickSpan from '../clickSpan';
import uploadFile from '../fileUpload';

module.exports = () => {

    clickSpan("TestFinding2250");
    clickButton("Edit");
    clickButton("Submit Mitigation Plan");
    clickElementWithID("ResolveBy");
    browser.click("button=15");
    takePause(1000);
    setToId("TestPlan","MitigationPlan");
    uploadFile();
    takePause(3000);
    clickButton("Submit");
    clickName("your_profile");
    browser.click(".MenuItem*=Logout");
};



