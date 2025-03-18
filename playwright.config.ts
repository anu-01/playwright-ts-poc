import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: '.', 
  //testDir: 'api' or 'web' or '.'
  // testMatch: '*/tests/*.spec.ts',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: process.env.CI ? 'blob' : 'html',
  reporter: process.env.CI ? 
  [
    ['html', { open: 'never' }],
    ['junit', { outputFile: 'test-results/e2e-junit-results.xml' }]
  ] : 
  [
    ['html', { open: 'never' }]
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://www.saucedemo.com/',

    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // We set this header per GitHub guidelines.
      // 'Accept': 'application/vnd.github.v3+json',
      // Add authorization token to all requests.
      // Assuming personal access token available in the environment.
      // 'Authorization': `token ${process.env.API_TOKEN}`,
    }, 
   // storageState: '.auth/standard_user.json',
    testIdAttribute: 'data-test',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },
  
  /* Configure projects for major browsers */
  projects: [

    { name: 'setup', testMatch: /.*\.setup\.ts/ },

    {
      name: 'exampleTests-Chrome',
      testDir: 'tests-examples/tests',
      use: {
        ...devices['Desktop Chrome'],
        headless: true,
      },
    },

    {
      name: 'exampleTests-Firefox',
      testDir: 'tests-examples/tests',
      use: {
        ...devices['Desktop Firefox'],
        headless: true,
      },
    },

    {
      name: 'exampleTests-Pixel5',
      testDir: 'tests-examples/tests',
      use: {
        ...devices['Pixel 5'],
        headless: true,
      },
    },

    {
      name: 'webTests',
      testDir:'web/tests',
      use: { 
      ...devices['Desktop Chrome'],
      viewport: null,
      deviceScaleFactor: undefined,
      launchOptions: {       args: ['--start-maximized','--disable-popup-blocking']  },
      storageState: 'playwright/.auth/standarduser.json',
      screenshot: "only-on-failure",
      video: "retain-on-failure",
      },
      dependencies: ['setup'],
    },
    {
      name: 'mobileEmulationTests',
      testDir:'web/tests',
      use: { 
      ...devices['iPhone 13'],
      locale: 'en-GB',
      timezoneId: 'Europe/London',
      storageState: 'playwright/.auth/standarduser.json',
      screenshot: "only-on-failure",
      video: "retain-on-failure",
      },  
    },
    {
      name: 'apiTests',
      testDir: 'api/tests',
      use: {
      baseURL:'https://restful-booker.herokuapp.com',
      ...devices['Desktop Chrome'],
      headless: true,
    },
    },

  //  {
  //     name: 'firefox',
  //     use: { ...devices['Desktop Firefox'] },
  //   },
 
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
