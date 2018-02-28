import clickButton from '../clickButton';
import clickName from '../clickName';
import {isIE} from '../../utils/supportIE';
import getLastOpenedWindowHandle from '../../utils/getLastOpenedWindowHandle';

module.exports = () => {
    browser.click("//span[text()='paperclip'][1]");
    browser.pause(1000);
    browser.getText("//h2").should.equal("Artifacts");

    browser.pause(1000);
    clickName('resource_file');
    browser.pause(1000);

    let lastWindowHandle = getLastOpenedWindowHandle();
    if (lastWindowHandle && !isIE) {
        console.log(`lastWindowHandle`, lastWindowHandle);
        browser.window(lastWindowHandle);
        console.log(`lastWindowHandle`, lastWindowHandle);
        console.log(`mainWindowHandle`, global.mainWindowHandle);
        browser.pause(1000);
        browser.close();
        browser.pause(2000);
    }

    clickButton("Close");
};
