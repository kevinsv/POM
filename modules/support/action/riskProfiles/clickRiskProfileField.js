import selectByIndex from '../selectByIndex';
import takePause from '../pause';

module.exports = () => {

    browser.waitForExist(".MenuItem", global.browserWaitForTimeout);
    //selectByIndex(".MenuItem", 1);
    browser.pause(1000);
    browser.click(".MenuItem*=Risk Profile");
    browser.pause(3000);

}; 
