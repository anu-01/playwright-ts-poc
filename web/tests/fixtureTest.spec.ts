import { test, expect } from '../fixtures/saucewebFixture.ts';
import { StandardUser } from '../testdata/creds.ts';
// test.beforeEach(async ({ settingsPage }) => {
//   await settingsPage.switchToDarkMode();
// });

test('basic test', async ({ loginPage, page }) => {
    await loginPage.open();
    await loginPage.login(StandardUser.username, StandardUser.password);
    await loginPage.verifyLogin();
});