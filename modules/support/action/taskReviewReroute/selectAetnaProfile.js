import takePause from '../pause';
import selectByIndex from '../selectByIndex';

module.exports = () => {

    browser.waitForExist(".Card", global.browserWaitForTimeout);
    browser.click(".//span[.='Aetna Inc.']");
    //selectByIndex(".Card", 1);

};

