module.exports = (name) => {

   let list =  browser.getText("//tbody/tr/td[1]");

   for (let i = 1; i < list.length; i++) {
       browser.getText("//tbody/tr['"+i+"']/td[1]").should.contain(name);
   }
};
