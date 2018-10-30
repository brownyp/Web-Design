import { AppV4Page } from './app.po';

describe('app-v4 App', () => {
  let page: AppV4Page;

  beforeEach(() => {
    page = new AppV4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
