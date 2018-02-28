import clickButton from '../clickButton';
import setTextToTheField from '../setTextToTheField';

import {setTemporaryEmail} from '../emailActions';

module.exports = (OrgName) => {

    setTextToTheField(OrgName, 'name');
    setTextToTheField("5349b4ddd2781d08c09890f0", 'vtmId');
    setTextToTheField("Automation", 'contactFirstname');
    setTextToTheField("Organization", 'contactLastname');
    setTemporaryEmail("contactEmail");
    clickButton("Submit")
    browser.pause(2000);
};
