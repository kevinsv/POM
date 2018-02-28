import takePause from '../pause';
import clickButton from '../clickButton';
import clickName from '../clickName';
import clickSpan from '../clickSpan';
import setInputField from '../setInputField';

module.exports = () => {
    clickName("select-all");
    clickSpan("mark_as_rejected");
    clickButton("Reject");
    browser.setValue('//div//textarea[@name='+"'comment'"+']', 'Reject Comment');
    browser.click("//div[contains(@class,'DialogActions')]//button//span[.= 'Reject']");
    takePause(1000);
};

