module.exports = function (commandName, nextCommand) {
    if (!browser[commandName]) {
        throw new Error(`Command doesn't exist`);
    }

    let originalCommand = browser[commandName].bind(browser);

    browser[commandName] = (...args) => {
        nextCommand.call(browser, originalCommand, ...args);
    };
};
