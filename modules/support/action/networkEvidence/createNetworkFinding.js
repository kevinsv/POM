import takePause from '../pause';
import clickName from '../clickName';
import clickButton from '../clickButton';
import clickElementWithText from '../clickWithText';
import setTextToTheField from '../setTextToTheField';

module.exports = () => {

    clickElementWithText("SIG 2016 A. Risk Management");
    takePause(1000);
    clickButton("Review Response");
    clickButton("mark_as_finding");
    setTextToTheField("TestFinding", "title");
    takePause(1000);
    clickButton("Create Finding");
    takePause(4000);
    clickName("findings");
};
