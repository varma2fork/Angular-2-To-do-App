import { AngularToDoAppPage } from './app.po';

describe('angular-to-do-app App', () => {
  let page: AngularToDoAppPage;

  beforeEach(() => {
    page = new AngularToDoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
