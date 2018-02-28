module.exports = (element, index, text) => {

    browser.elements(element).value[index].setValue(text);
    browser.pause(1000);
};

