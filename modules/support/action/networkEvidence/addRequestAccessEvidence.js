import takePause from '../pause';
import clickButton from '../clickButton';
import clickSpan from '../clickSpan';

module.exports = () => {
    clickSpan("add_item");
    browser.waitForExist("//div[2]/div/div/div/input", global.browserWaitForTimeout);
    browser.setValue('//div[2]/div/div/div/input', 'Comment Request');
    clickButton("Confirm");
    takePause(1000);
};

