module.exports = (done) => {

    let authUrl = "https://idp.synapseqa.com/idp/profile/SAML2/Redirect/SSO";


    browser.setValue(".//*[contains(@id,'AuthRequestURL')]", authUrl);
    browser.pause(1000);
    done();
};
