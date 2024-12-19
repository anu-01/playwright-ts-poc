import { test, expect, TestInfo, Page } from '@playwright/test';

test('test example', async ({ page }, TestInfo) => {
    // Perform actions
    await page.goto('https://demoqa.com/alerts');

    page.on('dialog', dialog => dialog.accept('Anu'));
    await page.getByRole('button').nth(3).click();

});