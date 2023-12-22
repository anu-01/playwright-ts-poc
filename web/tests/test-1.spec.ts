import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByTestId('username').click();
  await page.getByTestId('username').fill('standard_user');
  await page.getByTestId('username').press('Tab');
  await page.getByTestId('password').fill('secret_sauce');
  await page.getByTestId('password').press('Enter');
  await page.getByTestId('add-to-cart-sauce-labs-backpack').click();
  await page.locator('a').filter({ hasText: '1' }).click();
  await page.getByTestId('checkout').click();
  await page.getByTestId('firstName').click();
  await page.getByTestId('firstName').fill('hello');
  await page.getByTestId('firstName').press('Tab');
  await page.getByTestId('lastName').fill('world');
  await page.getByTestId('lastName').press('Tab');
  await page.getByTestId('postalCode').fill('nshjsa1');
  await page.getByTestId('continue').click();
  await page.getByTestId('finish').click();
  await page.getByTestId('back-to-products').click();
  await page.getByTestId('add-to-cart-sauce-labs-bike-light').click();
  await page.locator('a').filter({ hasText: '1' }).click();
  await page.getByTestId('remove-sauce-labs-bike-light').click();
  await page.locator('#shopping_cart_container a').click();
});