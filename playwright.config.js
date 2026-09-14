// @ts-check
const { defineConfig, devices } = require('@playwright/test');

const currentEnv = process.env.ENV || 'prod';
const envConfig = require(`./config/env.${currentEnv}.js`);

module.exports = defineConfig({
  testDir: './testdata', // Exact folder name: test
  testMatch: '**/*.spec.js',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: envConfig.baseURL,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
