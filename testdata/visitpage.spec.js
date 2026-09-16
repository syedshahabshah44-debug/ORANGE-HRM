const { test } = require('@playwright/test');
const { LoginPage } = require('../PageObjects/LoginPage');/*object distruction*/
test.describe('OrangeHRM Visit Page Test', () => {
  test('Visit production login page', async ({ page }) => {/* ye page parameter ha jo k b hamary test ko  browser tab ko hand over krta ha phir us me chalta ha*/
    test.setTimeout(60000); 
    const loginPage = new LoginPage(page);
    await loginPage.navigateToPage();
    await loginPage.verifyPageVisited();
  });

});