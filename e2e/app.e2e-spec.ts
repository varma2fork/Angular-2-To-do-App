import { LearnAngAppPage } from './app.po';

describe('learn-ang-app App', () => {
  let page: LearnAngAppPage;

  beforeEach(() => {
    page = new LearnAngAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
