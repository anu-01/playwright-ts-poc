# 🎭 Playwright for UI and API Test Automation Framework using Typescript

### [Documentation](https://playwright.dev) | [API reference](https://playwright.dev/docs/api/class-playwright)

Playwright is a framework for Web Testing and Automation. It allows testing [Chromium](https://www.chromium.org/Home), [Firefox](https://www.mozilla.org/en-US/firefox/new/) and [WebKit](https://webkit.org/) with a single API. Playwright is built to enable cross-browser web automation that is **ever-green**, **capable**, **reliable** and **fast**.

## Features of this framework
* [Design Pattern: Page Object Model](https://playwright.dev/docs/test-pom)
* [Playwright Report](https://playwright.dev/docs/test-reporters)
* [Authentication of Multiple Users](https://playwright.dev/docs/auth)
* [Playwright for API testing](https://playwright.dev/docs/api-testing)
* [Cloud Integration: Microsoft Playwright Testing](https://learn.microsoft.com/en-us/azure/playwright-testing/quickstart-run-end-to-end-tests?tabs=playwrightcli)

## Getting Started

### Pre-requisites
* Download and install Node.js
* Download and install visual studio code

### Setup scripts
* Clone the repository into a folder
* Go to Project root directory and install Dependency: `npm install`
* All the dependencies from package.json would be installed in node_modules folder.

### How to write Test
* Add new spec under `web/tests` folder
* Name the file as <testname>.spec.ts (e.g. cart.spec.ts)
* Create a file for a page under web/pages as <page-name>.ts (e.g. cartPage.ts)
* Add page objects in the constructor of the class and method implementation for page
