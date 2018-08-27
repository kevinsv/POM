/**
 * Open the given URL
 * @param  {String}   type Type of navigation (url or site)
 * @param  {String}   page The URL to navigate to
 */
module.exports = (type, page) => {
    let url = (type === 'url') ? page : browser.options.baseUrl + page;

    browser.url(url);
};
