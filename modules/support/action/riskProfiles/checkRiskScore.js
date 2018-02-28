import checkResult from '../../check/checkTextByIndex';

module.exports = () => {
    browser.pause(2000);
    checkResult(".RiskScore", 1, "6.9");
    browser.getText('//tbody/tr[1]/td[6]/div/span[1]').should.equal("7.4");
};
