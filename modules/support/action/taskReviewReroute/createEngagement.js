import clickName from '../clickName';
import clickButton from '../clickButton';
import setToId from '../setTextToId';
import clickElementWithText from '../clickWithText';
import setTextToTheField from '../setTextToTheField';

module.exports = (name) => {
    clickName('engagements');
    clickButton('plus');
    setTextToTheField(`Engagement for ${name}`, 'name');
    clickButton('Next');
    browser.click(`div=${name}`);
    browser.scroll('button=Next');
    browser.pause(1000);
    clickButton('Next');
    clickElementWithText('Manual Tiering');
    browser.pause(1000);
    clickElementWithText('Tier 1');
    clickButton('Next');
    setToId('Risk', 'FilterRequirementsByName');
    clickElementWithText('Risk Management');
    browser.scroll('button=Next');
    clickButton('Next');
    clickButton('Next');
    browser.scroll('button=Save');
    clickButton('Save');
    browser.pause(3000);
};
