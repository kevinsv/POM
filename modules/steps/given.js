import { defineSupportCode } from 'cucumber';

import loginPage from '../../pages/loginPage';

defineSupportCode(function({ Given }) {

  Given(/^I am on the Login page$/, function() {
    loginPage.open();
  });

});
