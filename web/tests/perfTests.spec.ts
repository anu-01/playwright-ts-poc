import { test, expect, Page, TestInfo } from '@playwright/test';

test('Performance test example', async ({ page }, testInfo) => {
  await page.goto('https://www.saucedemo.com/');
  await measurePerformance(page, testInfo);
});

async function measurePerformance(page: Page, testInfo: TestInfo) {
  const performanceTiming = await page.evaluate(() => {
    return performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;;
  });

  const {
    startTime,
    responseStart,
    domInteractive,
    domContentLoadedEventEnd,
    loadEventEnd,
  } = performanceTiming;

  const ttfb = responseStart - startTime;
  const domInteractiveTime = domInteractive - startTime;
  const dcl = domContentLoadedEventEnd - startTime;
  const loadTime = loadEventEnd - startTime;

  console.log(`TTFB: ${ttfb.toFixed(2)}ms`);
  console.log(`DOM Interactive: ${domInteractiveTime.toFixed(2)}ms`);
  console.log(`DCL: ${dcl.toFixed(2)}ms`);
  console.log(`Load Event End: ${loadTime.toFixed(2)}ms`);

  testInfo.annotations.push({
    type: 'Performance',
    description: `TTFB: ${ttfb.toFixed(2)}ms, LoadTime: ${loadTime.toFixed(2)}ms`,
  });
}
