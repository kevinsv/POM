module.exports = () => {

    browser.getText("//tbody/tr[1]/td[4]").should.equal("Yes");
    browser.getText("//tbody/tr[2]/td[4]").should.equal("Yes");
    browser.getText("//tbody/tr[3]/td[4]").should.equal("N/A");
    browser.getText("//tbody/tr[4]/td[4]").should.equal("N/A");
    browser.getText("//tbody/tr[5]/td[4]").should.equal("N/A");

    browser.getText("//tbody/tr[1]/td[5]").should.equal("PASS");
    browser.getText("//tbody/tr[2]/td[5]").should.equal("ERROR");
    browser.getText("//tbody/tr[3]/td[5]").should.equal("ERROR");
    browser.getText("//tbody/tr[4]/td[5]").should.equal("ERROR");
    browser.getText("//tbody/tr[5]/td[5]").should.equal("ERROR");

    browser.getText('//tbody/tr[1]/td[6]/div/span[1]').should.equal("N/A");
    browser.getText("//tbody/tr[2]/td[6]/div/span[1]").should.equal("N/A");
    browser.getText("//tbody/tr[3]/td[6]/div/span[1]").should.equal("N/A");
    browser.getText("//tbody/tr[4]/td[6]/div/span[1]").should.equal("N/A");
    browser.getText("//tbody/tr[5]/td[6]/div/span[1]").should.equal("N/A");
};

