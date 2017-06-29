import { HoFPage } from './app.po';

describe('ho-f App', () => {
  let page: HoFPage;

  beforeEach(() => {
    page = new HoFPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
