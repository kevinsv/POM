import { defineSupportCode } from 'cucumber';

import loginPage from '../../pages/loginPage';

defineSupportCode(function({ When }) {

  When(/^I login with username and password "([^"]*)" "([^"]*)" into the text box$/, function(arg1, arg2) {
    loginPage.login(arg1, arg2);
  });


});
