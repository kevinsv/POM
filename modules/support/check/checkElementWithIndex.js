module.exports = (element, index, done) => {

    browser.elements(element).value[index].getText();

    done();
};
