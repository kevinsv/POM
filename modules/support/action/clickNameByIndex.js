module.exports = (text, index) => {

    browser.elements("[name="+text+"]").value[index].click();
    browser.pause(1000);
};
