import Page from './common/basePage';

class loginPage extends Page {

    get usernameTxt()  { return browser.element('input[type=email]'); }
    get passwordTxt()  { return browser.element('input[type=password]'); }
    get otpTxt()  { return browser.element('input[type=text]'); }
    get nextBtn()  { return browser.element('button=Next'); }

    open() {
        super.open();
    }

    waitForLoginPageToLoad () {
          if(!this.usernameTxt.isVisible()){
            this.usernameTxt.waitForVisible(5000);
          }
        }

    login (username, password) {
    this.waitForLoginPageToLoad();
    this.usernameTxt.waitForVisible(5000);
    this.usernameTxt.setValue(username);
    this.passwordTxt.waitForVisible(5000);
    this.passwordTxt.setValue('VrmP4$$w0rd');
    this.nextBtn.click();
    this.otpTxt.waitForVisible(5000);
    this.otpTxt.setValue('123123');
    this.nextBtn.click();
    }
}

export default new loginPage();
