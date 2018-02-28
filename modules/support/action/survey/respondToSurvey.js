import clickButton from '../clickButton';
import takePause from '../pause';
import setToId from '../setTextToId';
import selectByIndex from '../selectByIndex';
import clickElementWithText from '../clickWithText';

function respond() {
    selectByIndex('input[type=radio]', 1);
    takePause(1000);
    clickButton('Next');
    takePause(1000);
    if (browser.isExisting('button=Skip')) {
        respond();
    }
}

module.exports = (name, tenant) => {
    takePause(2000);
    browser.click(".Home button[name=search]");
    setToId(name, 'searchField');
    clickElementWithText(tenant);
    takePause(1000);
    clickButton('Respond');
    respond();
    clickButton('Submit');
    takePause(1000);
};
