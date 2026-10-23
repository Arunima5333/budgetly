import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Budgetly', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('opens on Overview with its heading', () => {
    page.navigateTo();
    expect(page.getPath()).toEqual('/overview');
    expect(page.getHeadingText()).toEqual('Overview');
  });

  it('redirects an unknown address to Overview', () => {
    page.navigateTo('foo');
    expect(page.getPath()).toEqual('/overview');
    expect(page.getHeadingText()).toEqual('Overview');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
