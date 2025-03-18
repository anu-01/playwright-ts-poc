import { test, expect, Page } from '@playwright/test';

export async function navigateToPage(page: Page) {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  }
  