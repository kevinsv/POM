import clickElementWithText from '../clickWithText';

module.exports = () => {

    //browser.waitForExist(".//span[.='SIG 2016 A. Risk Management']", global.browserWaitForTimeout);
    //browser.click(".//span[.='SIG 2016 A. Risk Management']");
    clickElementWithText("SIG 2016 A. Risk Management");
};
