module.exports = (login) => {
   browser.waitForExist(`input[type=email]`, global.browserWaitForTimeout);
   browser.waitForExist(`input[type=password]`, global.browserWaitForTimeout);
   browser.waitForExist(`button=Next`, global.browserWaitForTimeout);

   browser.setValue(`input[type=email]`, 'nmenz@pseudogroup.com');
   browser.setValue(`input[type=password]`, 'VrmP4$$w0rd');
   browser.click(`button=Next`);


   browser.waitForExist(`input[type=text]`, global.browserWaitForTimeout);
   browser.waitForExist(`button=Next`, global.browserWaitForTimeout);
   browser.setValue(`input[type=text]`, '1231234');
   browser.click(`button=Next`);
   browser.pause(1000);
};
