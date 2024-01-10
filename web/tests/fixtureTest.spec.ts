import { test, expect } from '../fixtures/saucewebFixture.ts';
import { successLoginCredentials } from '../testdata/creds.ts';
// test.beforeEach(async ({ settingsPage }) => {
//   await settingsPage.switchToDarkMode();
// });

test('basic test', async ({ loginPage, page }) => {
    await loginPage.open();
    await loginPage.login(successLoginCredentials.username, successLoginCredentials.password);
    await loginPage.verifyLogin();
});