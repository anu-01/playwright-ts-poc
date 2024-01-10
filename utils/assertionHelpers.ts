import { expect, Locator, Page } from '@playwright/test'

export async function assertTextForElement(page, selector, expectedText) {
  await expect(page.locator(selector)).toContainText(expectedText)
}

export async function validateNumberOfLinksFound(
  page: Page,
  selector: string,
  expectedNumber: number
) {
  const numberOfLinks = await page.locator(`${selector}`)
  await expect(numberOfLinks).toHaveCount(expectedNumber)
}

export async function assertUrl(page, expectedText) {
    await expect(page.url()).toContain(expectedText);    
}