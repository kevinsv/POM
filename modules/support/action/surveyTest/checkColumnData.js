module.exports = () => {

    let list = browser.getText("//tbody/tr/td[3]");

    for (let i = 1; i < list.length; i++) {
        browser.getText("//tbody/tr/td[3]").should.contain("No");
    }
};
