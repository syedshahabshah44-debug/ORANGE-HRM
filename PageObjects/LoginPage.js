const { expect } = require('@playwright/test');/*liberary/dependencies*/
const envConfig = require('../config/env.prod');/*js import module*/
/*use constructor to handover the browser tab control to loginclass*/
class LoginPage {
  constructor(page) {
    this.page = page;
  }
  /*yahan tk browser handover hoa ab ap jitna b kaam neechy krengy saara use browser tab me hoga*/
  // Target URL navigate karne ke liye
  async navigateToPage() {
    await this.page.goto(envConfig.baseURL, { 
      /*waitUntil: 'domcontentloaded',
      timeout: 30000 */
    });
  }

  // Page load verification
  async verifyPageVisited() {
    await expect(this.page).toHaveTitle(/OrangeHRM/, { timeout: 15000 });
  }
}

module.exports = { LoginPage };
