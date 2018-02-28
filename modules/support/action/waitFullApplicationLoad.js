export function waitFullApplicationLoad() {
    let lastExists = Date.now();
    browser.waitUntil(function() {
        if (!browser.isExisting('label=Loading')) {
            return (Date.now() - lastExists) > 2000;
        } else {
            lastExists = Date.now();
            return false;
        }
    }, 600000, 'Waiting full app load');
}
