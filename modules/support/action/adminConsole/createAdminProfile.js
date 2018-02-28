import clickButton from '../clickButton';
import setTextByClass from '../setTextByClass';
import clickWithText from '../clickWithText';

module.exports = (orgName) => {
    browser.pause(1000);
    setTextByClass(orgName, 'CardsSelection');
    clickWithText('plus');
    clickButton("Save");
    browser.pause(1000);
};
