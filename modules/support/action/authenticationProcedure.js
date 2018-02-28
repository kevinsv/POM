import {loginWithEmailAndPassword} from "./loginWithEmailAndPassword"
import {waitFullApplicationLoad} from "./waitFullApplicationLoad"

module.exports = (login, done) => {
    // let currentUrl = browser.getUrl();
    // if (!isIE
    //     || currentUrl === 'about:blank' // it's when local
    //     || currentUrl.match(/^http:\/\/localhost:\d*\/$/) // it's when standalone
    // ) {
        browser.url(browser.options.baseUrl);
        browser.pause(3000);
    // }
    loginWithEmailAndPassword(login, "VrmP4$$w0rd");
    waitFullApplicationLoad(done);
};
