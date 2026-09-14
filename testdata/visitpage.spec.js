const { test } = require('@playwright/test');
const { LoginPage } = require('../PageObjects/LoginPage');

test.describe('OrangeHRM Visit Page Test', () => {

  test('Visit production login page', async ({ page }) => {
    test.setTimeout(60000); // 60s timeout limit

    const loginPage = new LoginPage(page);

    // Step 1: Visit target URL
    await loginPage.navigateToPage();

    // Step 2: Verify page title
    await loginPage.verifyPageVisited();
  });

});