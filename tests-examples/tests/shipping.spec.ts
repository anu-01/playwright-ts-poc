import fs from 'fs';
import { test, expect } from '@playwright/test';
import { navigateToPage } from './utils';

const testFilename = 'shipping';
const testNames = fs.readFileSync('tests-examples/data/' + testFilename + '.txt', 'utf-8').split('\n').map(name => name.trim()).filter(Boolean);

test.describe(testFilename, () => {
  for (const testName of testNames) {
    test(testName, async ({ page }) => {
      await navigateToPage(page);
    });
  }
});