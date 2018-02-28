import clickName from './clickName';
import clickButton from './clickButton';
import clickWithText from './clickWithText';
import clickSpan from './clickSpan';
import setTextToTheField from './setTextToTheField';
import setTextByClass from './setTextByClass';

module.exports = (name) => {
    clickName('settings');
    browser.pause(1000);
    clickWithText('Requirements');
    clickSpan('item_add');
    browser.pause(1000);
    setTextToTheField('Tier Automation', 'name');
    clickButton('Next');
    browser.pause(1000);
    clickButton('Next');
    setTextByClass(name, 'CardsSelection');
    clickSpan('plus');
    clickButton('Save');
};
