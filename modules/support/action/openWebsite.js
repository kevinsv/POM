module.exports = (type, page, done) => {
    let url = (type === 'url') ? page : browser.options.baseUrl + page;

    browser.url(url);

    done();
};
