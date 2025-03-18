import { test, expect } from '@playwright/test';
import { navigateToPage } from './utils';

// test('end-to-end scenario', async ({ page }) => {
//   await page.goto('https://app-web-nw4xbiykoskx2.azurewebsites.net/');
//   await page.locator('label').filter({ hasText: 'All .NET Azure Other SQL Server Visual Studio' }).click();
//   await page.getByLabel('All\n.NET\nAzure\nOther\nSQL Server\nVisual Studio').selectOption('2');
//   await page.getByRole('button', { name: 'Submit' }).click();
//   await page.locator('form').filter({ hasText: '[ ADD TO BASKET ] .NET Foundation Sweatshirt 12.00' }).getByRole('img').click();
//   await page.locator('form').filter({ hasText: '[ ADD TO BASKET ] .NET Foundation Sweatshirt 12.00' }).getByRole('button').click();
//   await page.getByText('.NET Foundation Sweatshirt').click();
//   await page.getByRole('spinbutton').click();
//   await page.getByRole('spinbutton').fill('2');
//   await page.getByRole('spinbutton').press('Tab');
//   await page.getByRole('button', { name: '[ Update ]' }).click();
//   await page.getByText('$ 24.00').first().click();
//   await page.getByRole('link', { name: 'eShop On Web' }).click();
//   await page.getByRole('link', { name: '2' }).click();
//   await page.getByRole('link', { name: '[ Checkout ]' }).click();
// });