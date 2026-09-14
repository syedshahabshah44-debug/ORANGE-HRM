// PageObjects/LoginPage.js
import { expect } from '@playwright/test';

export class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Locators
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
    this.brandHeader = page.locator('.orangehrm-login-branding');
    this.loginTitle = page.locator('.orangehrm-login-title');
  }

  // Action: Page visit karna
  async navigateToLoginPage() {
    await this.page.goto('/');
  }

  // Action: Login page load hone ki verification
  async verifyLoginPageLoaded() {
    await expect(this.loginTitle).toHaveText('Login');
    await expect(this.usernameInput).toBeVisible();
  }

  // Action: Login perform karna
  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}