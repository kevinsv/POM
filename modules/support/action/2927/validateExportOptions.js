
module.exports = () => {

    browser.isExisting(".export-button.export-pdf");
    browser.isExisting(".export-button.export-xls");
    browser.isExisting(".export-button.export-doc");
    browser.click(".export-button.export-pdf");
    browser.pause(1000);
};
