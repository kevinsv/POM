import clickName from './clickName';
import clickButton from './clickButton';
import setInputValue from './setInputValue';
import {getNamedTemporaryEmail} from './emailActions';
import {isIE} from '../utils/supportIE';
import setTextToId from '../action/setTextToId';

module.exports = (name, email) => {
    clickName('assets');
    browser.pause(1000);
    clickButton('plus');
    browser.pause(1000);
    setInputValue(name, 'Organization Name');
    browser.pause(2000);
    if (email) {
        let namedEmail = email.includes('@') ? email : getNamedTemporaryEmail(email);
        setTextToId(namedEmail, 'VendorPrimaryContact');
        browser.pause(1000);
    }
    let defaultServiceType = 'Accounting/Bookkeeping Services';
    setInputValue(defaultServiceType, 'Service Type');
    browser.scroll('button=Save');
    clickButton('Save');
    if (!isIE) {
        browser.waitForVisible(`div*=Vendor Asset for the organization: ${name}`);
    }
};
