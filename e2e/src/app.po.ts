import { browser, by, element } from 'protractor';

export class AppPage {
  /** Opens a path relative to the app (the root redirects to /overview). */
  navigateTo(path = '') {
    return browser.get(browser.baseUrl + path) as Promise<any>;
  }

  getPath() {
    return browser.getCurrentUrl().then(url => url.replace(/^https?:\/\/[^/]+/, '').split('?')[0]) as Promise<string>;
  }

  getHeadingText() {
    return element(by.css('app-root main h1')).getText() as Promise<string>;
  }
}
