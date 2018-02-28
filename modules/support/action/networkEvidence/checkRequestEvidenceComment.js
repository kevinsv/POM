module.exports = (value) => {

  var value = browser.getText("//div[contains(@class,'TextDisplayField')]//div[2]");
  value.should.contain(value);

};
