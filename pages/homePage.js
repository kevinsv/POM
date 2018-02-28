import basePage from './common/basePage';
import {waitFullApplicationLoad} from '../modules/actions/waitFullApplicationLoad';


class homePage extends basePage {

    get activityLbl()  { return browser.element('.HomeOpenActivity=Activity'); }
    get outboundLbl()  { return browser.element('.//span[.="Outbound"]'); }

    waitForHomePageToLoad() {
          if(!this.outboundLbl.isVisible()){
            this.outboundLbl.waitForVisible(5000);
          }
    }

    checkAuthentication() {
    waitFullApplicationLoad();
    this.waitForHomePageToLoad();
    const isVisible = this.activityLbl.isVisible();
    isVisible.should.equal(true, `expected element + activityLbl() + " to be visible`);
    assert.equal(isVisible, true , 'Error checking authentication');
    }


}

export default new homePage();
