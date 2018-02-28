export default class basePage {
	constructor() {
		this.title = 'My Page';
	}

	open() {
       browser.url(browser.options.baseUrl);
	}
}


