import { LatihanPage } from './app.po';

describe('latihan App', () => {
  let page: LatihanPage;

  beforeEach(() => {
    page = new LatihanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
