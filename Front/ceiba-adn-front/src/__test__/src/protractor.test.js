describe('Protractor tests', () => {
  let collapseButton = element(by.className('ant-collapse-header'));

  beforeEach(() => {
    browser.ignoreSynchronization = true;

    browser.get('http://localhost:3000/');
  });

  it('Should have the correct title', () => {
    expect(browser.getTitle()).toEqual('Ceiba ADN');
  });

  it('Collapse Button is closed when the page renders', () => {
    expect(collapseButton.getAttribute('aria-expanded')).toBe('false');
  });

  it('Collapse Button open the task creation form', () => {
    expect(collapseButton.getAttribute('aria-expanded')).toBe('false');

    collapseButton.click();

    expect(collapseButton.getAttribute('aria-expanded')).toBe('true');
  });

  it('taskName input change value when keys are send', () => {
    collapseButton.click();

    let taskName = element(by.name('taskName'));

    const EC = protractor.ExpectedConditions;

    browser.wait(EC.visibilityOf(taskName), 5000);

    taskName.sendKeys('Test');

    expect(taskName.getAttribute('value')).toEqual('Test');
  });

  it('Task payment input change value when keys are send', () => {
    collapseButton.click();

    let pay = element(by.name('pay'));

    const EC = protractor.ExpectedConditions;

    browser.wait(EC.visibilityOf(pay), 5000);

    pay.sendKeys(10);

    expect(pay.getAttribute('value')).toEqual('10');
  });

  it('Task Description input change value when keys are send', () => {
    collapseButton.click();

    let taskDescription = element(by.name('taskDescription'));

    const EC = protractor.ExpectedConditions;

    browser.wait(EC.visibilityOf(taskDescription), 5000);

    taskDescription.sendKeys('Test Description');

    expect(taskDescription.getAttribute('value')).toEqual('Test Description');
  });

});
