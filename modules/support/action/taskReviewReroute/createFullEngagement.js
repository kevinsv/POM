import clickName from '../clickName';
import clickButton from '../clickButton';
import takePause from '../pause';
import clickElementWithText from '../clickWithText';
import setTextToTheField from '../setTextToTheField';
import setTextByClass from '../setTextByClass';
import clickSpan from '../clickSpan';

module.exports = (engagementName,assetName,tierName) => {
    clickName('engagements');
    clickButton('plus');
    setTextToTheField(`Engagement for ${engagementName}`, 'name');
    clickButton('Next');
    takePause(1000);
    setTextByClass(assetName, 'CardsSelection');
    clickSpan('plus');
    clickButton('Next');
    clickElementWithText('Manual Tiering');
    takePause(1000);
    clickElementWithText(tierName);
    clickButton('Next');
    clickButton('Next');
    clickButton('Next');
    browser.scroll('button=Save');
    clickButton('Save');
    takePause(3000);
};
