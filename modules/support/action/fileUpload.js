import path from 'path';

module.exports = () => {
    let selector = `.//input[@type='file']`;
    let localPath = path.join(__dirname, '../../../data/justFile.txt');
    browser.waitForExist(selector, global.browserWaitForTimeout);
    browser.chooseFile(selector, localPath);
};
