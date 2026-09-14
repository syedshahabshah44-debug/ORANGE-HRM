const { expect } = require('@playwright/test');
const envConfig = require('../config/env.prod');
class LoginPage {
  constructor(page) {
    this.page = page;
  }
  // Target URL navigate karne ke liye
  async navigateToPage() {
    await this.page.goto(envConfig.baseURL, { 
      waitUntil: 'domcontentloaded',
      timeout: 30000 
    });
  }

  // Page load verification
  async verifyPageVisited() {
    await expect(this.page).toHaveTitle(/OrangeHRM/, { timeout: 15000 });
  }
}

module.exports = { LoginPage };