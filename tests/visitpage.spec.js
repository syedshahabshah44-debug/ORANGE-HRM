// tests/login.spec.js
import { test, expect } from '@playwright/test';
import { LoginPage } from '../PageObjects/LoginPage';

test.describe('OrangeHRM Login Tests - Production', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
  });

  test('Verify user can visit production login page using POM', async () => {
    // 1. Production URL visit karein (baseURL config se lega)
    await loginPage.navigateToLoginPage();

    // 2. Verify karein ke login page properly load ho chuka hai
    await loginPage.verifyLoginPageLoaded();
  });
});