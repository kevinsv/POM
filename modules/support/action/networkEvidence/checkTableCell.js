import checkResult from '../../check/checkTextByIndex';

module.exports = (index, expectedText) => {
    let cellTexts = browser.getText(`//tr//td[${index}]//*[contains(@class,'DataTableTextCell')]`);
    let cellText;
    if (Array.isArray(cellTexts)) {
        cellText = cellTexts[0];
    } else {
        cellText = cellTexts;
    }
    cellText.should.equal(expectedText);
};
