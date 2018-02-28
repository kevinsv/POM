import clickName from '../clickName';
import takePause from '../pause';

module.exports = () => {
    clickName("assets");
    browser.click(".Paper");
    clickName("show_more_information");
};
