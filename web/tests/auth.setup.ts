import { test as setup, expect } from '@playwright/test';
import { successLoginCredentials } from '../testdata/creds.ts';  

const authFile = 'playwright/.auth/standarduser.json';

setup('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('/');
  await page.getByTestId('username').fill(successLoginCredentials.username);
  await page.getByTestId('password').fill(successLoginCredentials.password);
  await page.getByTestId('login-button').click();
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL('https://www.saucedemo.com/inventory.html');
  await page.getByAltText('Products').isVisible();
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  //await expect(page.getByRole('button', { id: 'Open Menu' })).toBeVisible();

  // End of authentication steps.
  // Save the storage state so it can be shared across tests.

  // create a delay of 1 second to allow the storage state to be saved
  await page.waitForTimeout(5000);
  await page.context().storageState({ path: authFile });
});