import setInputValue from '../setInputValue';
import clickButton from '../clickButton';
import takePause from '../pause';
import clickName from '../clickName';

module.exports = (name) => {

     clickName('assets');
     takePause(1000);
     clickButton('plus');
     takePause(1000);
     setInputValue(name, 'Organization Name');
     takePause(1000);
     let defaultServiceType = 'Accounting/Bookkeeping Services';
     setInputValue(defaultServiceType, 'Service Type');
     browser.scroll('button=Save');
     clickButton('Save');
     if (!isIE) {
          browser.waitForVisible(`div*=Vendor Asset for the organization: ${name}`);
     }
};
