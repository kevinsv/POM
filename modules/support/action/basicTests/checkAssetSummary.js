import checkResult from '../../check/checkTextByIndex';
import clickName from '../clickName';
import takePause from '../pause';


module.exports = () => {
    clickName("assets");
    browser.click(".Paper");
    takePause(1000);
    checkResult(".Summary", 2, "Summary");
    checkResult(".AbstractStringDisplayField", 14, "Vendor");
};
