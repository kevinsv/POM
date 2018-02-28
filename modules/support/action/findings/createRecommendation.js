import takePause from '../pause';
import clickName from '../clickName';
import clickButton from '../clickButton';
import setTextToTheField from '../setTextToTheField';
import clickElementWithText from '../clickWithText';
import clickSpan from '../clickSpan';
import clickSubMenuItem from '../clickSubMenuItem';

module.exports = (findingName) => {

    clickName('settings');
    takePause(2000);
    clickSubMenuItem('Recommendations');
    clickButton('plus');
    setTextToTheField(`Recommendation for ${findingName}`, 'name');
    clickButton('Create');
    clickName('findings');
    clickElementWithText(findingName);
    clickButton('Edit');
    clickButton('Update');
    clickSpan('edit_recommendations');
    clickElementWithText(`Recommendation for ${findingName}`);
    clickButton('Save');
    takePause(2000);
    clickButton('Submit');
};
