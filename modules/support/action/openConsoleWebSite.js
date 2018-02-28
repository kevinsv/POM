module.exports = (done) => {
    let base = browser.options.consoleUrl;
    browser.url(base);
    done();
};
