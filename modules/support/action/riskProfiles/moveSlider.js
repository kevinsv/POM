import {isIE} from '../../utils/supportIE';
module.exports = (tabsCount, arrowRightCount) => {
    for (let i = 0; i < tabsCount; i++) {
        browser.keys('Tab');
        isIE && browser.pause(1000);
    }

    browser.pause(2000);

    for (let i = 0; i < arrowRightCount; i++) {
        browser.keys('ArrowRight');
        isIE && browser.pause(1000);
    }

    browser.pause(2000);
};
