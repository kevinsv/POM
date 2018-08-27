module.exports = (element, index, text) => {

   const forAttribute = browser.elements(element).value[index].getAttribute("for");


    console.log(text);
    console.log(forAttribute);
};
