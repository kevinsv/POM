import path from 'path';
import clickButton from './clickButton'

module.exports = () => {
    let locationPath = path.join(__dirname, '../../../data/CompletedSurveyTemplate.xls')
    browser.waitForExist(".//input[@type='file']", global.browserWaitForTimeout);
    browser.chooseFile(".//input[@type='file']", locationPath);
    browser.pause(5000);

    clickButton('Import');
    browser.pause(5000);
    clickButton('Apply');
};
