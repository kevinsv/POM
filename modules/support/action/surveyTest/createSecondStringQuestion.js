import clickButton from '../clickButton';
import takePause from '../pause';
import clickElementWithID from '../clickElementWithID';
import clickNameByIndex from '../clickNameByIndex';
import setTextToTheField from '../setTextToTheField';

module.exports = () => {

    browser.click("//*[@id='app-root']/div/div[1]/div/div/div[3]/div/div/div[2]/div/div[2]/div[2]/div/div[1]/div/div/div/div");
    browser.click(".MenuItem*=Medium");
    takePause(1000);
    clickButton("plus");
    clickButton("test_action");
    setTextToTheField("String 2", "questionText");
    clickNameByIndex("collapse_list", 2);
};
