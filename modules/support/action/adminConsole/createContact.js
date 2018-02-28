import clickButton from '../clickButton';
import setTextToTheField from '../setTextToTheField';
import setTextByClass from '../setTextByClass';
import clickWithText from '../clickWithText';
import {setTemporaryEmail} from '../emailActions';

module.exports = (role,orgName) => {

    setTextToTheField("Automation", 'firstName');
    setTextToTheField("Contact", 'lastName');
    setTextToTheField("+1234566", 'mobile');
    setTextToTheField("test@test.tst", 'email');
    clickButton("Next");
    setTextByClass(orgName, 'CardsSelection');
    browser.pause(1000);
    clickWithText('plus');
    clickWithText(role)
    clickButton('Add');
    clickButton("Save");
    browser.pause(1000);
};
