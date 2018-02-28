/*
 * © Copyright 2018, Prevalent Inc., All Rights reserved.
 */

module.exports = (text) => {
    browser.pause(1000);

    let elements = $$('.titleCard') || [];
    let existed = elements.some((element) => (
        element.getText() === text
    ));

    existed.should.equal(true);
};
