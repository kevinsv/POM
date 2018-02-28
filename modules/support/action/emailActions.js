import delay from 'nanodelay';
import request from 'request-promise-any';
import { setValue } from './setValue';

let address, namedAddresses = {};

let emailCounter = 0;

function createEmail() {
    return `test${emailCounter++}@gmail.com`;
}

export function getTemporaryEmail() {
    address = createEmail();
    return address;
}

export function getNamedTemporaryEmail(name) {
    if (!namedAddresses[name]) {
        namedAddresses[name] = createEmail();
    }

    return namedAddresses[name];
}

export function setTemporaryEmailToId(id) {
    browser.setValue(".//*[contains(@id,"+"'"+id+"'"+")]", getTemporaryEmail());
}

export function setTemporaryEmail(name) {
    browser.setValue(".//*[contains(@name,"+"'"+name+"'"+")]", getTemporaryEmail());
}

export function setNamedTemporaryEmail(name, label) {
    setValue(getNamedTemporaryEmail(name), label);
}

const EMAIL_CHECK_INTERVAL = 5000;
const EMAIL_CHECK_TIMEOUT = EMAIL_CHECK_INTERVAL * 20;

const URL_REGEX = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

function getLinkWithComponentFromEmail(addr, component, ignoreLinks) {
    let url;

    let firstEmailCheck = Date.now();

    console.log('getting link with component from email', addr, component, Date.now());

    browser.call(function getUrl() {
        return request({
            url: global.config.emailCatcherUrl,
            json: true
        })
            .then(
                body => body.emails.filter(email => email.to === addr)
            )
            .then(messages => {
            if (messages.length === 0) {
                throw new Error(`Email not received`);
            }

            for (let message of messages) {
                let text = message.body;
                let urls = text.match(URL_REGEX);

                if (!urls) {
                    throw new Error('No link found in email');
                }

                url = urls
                    .filter(url => url.indexOf(component) !== -1)
                    .filter(url => {
                        if (ignoreLinks) {
                            return ignoreLinks.indexOf(url) === -1;
                        } else {
                            return true;
                        }
                    })[0];

                if (url) {
                    break;
                }
            }

            if (!url) {
                throw new Error(`Email not received`);
            }

        }).catch(error => {
            if (Date.now() - firstEmailCheck > EMAIL_CHECK_TIMEOUT) {
                throw error;
            }

            return delay(EMAIL_CHECK_INTERVAL).then(getUrl);
        });
    });

    console.log('get link with component from email', addr, component, url, Date.now());

    return url;
}

function openLinkWithComponentFromEmail(addr, component, ignoreLinks) {
    let url = getLinkWithComponentFromEmail(addr, component, ignoreLinks);

    browser.url(url);
}

export function openRegistrationLinkFromEmail(name) {
    openLinkWithComponentFromEmail(
        typeof name === 'string' ? getNamedTemporaryEmail(name) : address, 'register'
    );
}

let rememberedRegistrationLink;

export function openRememberedRegistrationLinkFromEmail() {
    browser.url(rememberedRegistrationLink);
}

export function openNewRegistrationLinkFromEmail() {
    openLinkWithComponentFromEmail(address, 'register', [rememberedRegistrationLink]);
}

export function rememberRegistrationLinkFromEmail() {
    rememberedRegistrationLink = getLinkWithComponentFromEmail(address, 'register');
}

export function openResetPasswordLinkFromEmail() {
    openLinkWithComponentFromEmail(address, 'reset');
}

export function openVerifyLinkFromEmail(name) {
    openLinkWithComponentFromEmail(getNamedTemporaryEmail(name), 'verify');
}
