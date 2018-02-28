module.exports = (login) => {
    browser.setValue("input[type=email]", "test@test.com");
    browser.pause(1000);
    browser.setValue("input[type=password]", "test123");
    browser.pause(1000);
};
