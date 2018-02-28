import { defineSupportCode } from 'cucumber';

import loginPage from '../../pages/loginPage';
import homePage from '../../pages/homePage';

defineSupportCode(function({ Then }) {

  Then(/^I check that authentication was successful$/, function() {
    homePage.checkAuthentication();
  });

});
