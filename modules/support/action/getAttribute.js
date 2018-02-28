module.exports = (element, index, text, done) => {

   const forAttribute = browser.elements(element).value[index].getAttribute("for");


    console.log(text);
    console.log(forAttribute);

   // browser.setValue(forAttribute, text);

    done();
};
