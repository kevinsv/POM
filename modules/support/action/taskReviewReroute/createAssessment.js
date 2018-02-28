import clickName from '../clickName';
import clickButton from '../clickButton';
import clickElementWithText from '../clickWithText';

module.exports = (name) => {
    clickName('home');
    clickName('engagements');
    clickElementWithText(`Engagement for ${name}`);
    browser.pause(1000);
    clickName('eng_more');
    browser.click('.MenuItem*=Create Assessment');
    browser.pause(1000);
    clickButton('Create');
    browser.pause(5000);
}; 
