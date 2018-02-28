import {isIE} from '../utils/supportIE';

module.exports = (text, name) => {

    let element = ".//*[contains(@name,"+"'"+name+"'"+")]";
    browser.waitForExist(element, global.browserWaitForTimeout);
    isIE && browser.clearElement(element); // todo: remove it

    browser.setValue(element, text);
    browser.pause(1000);
};
