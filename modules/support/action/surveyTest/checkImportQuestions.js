module.exports = () => {

   var  list =  browser.getText("//tbody/tr[3]/td[5]/span");
   list.should.contain("Yes");
};
