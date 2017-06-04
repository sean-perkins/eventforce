import { EventforcePage } from './app.po';

describe('eventforce App', () => {
  let page: EventforcePage;

  beforeEach(() => {
    page = new EventforcePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
