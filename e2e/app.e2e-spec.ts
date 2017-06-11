import { CalCalc.ClientPage } from './app.po';

describe('cal-calc.client App', () => {
  let page: CalCalc.ClientPage;

  beforeEach(() => {
    page = new CalCalc.ClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
