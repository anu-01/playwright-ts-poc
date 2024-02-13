import { test as base } from '@playwright/test';
import LoginPage from '../pages/loginPage.ts';
import CartPage from '../pages/cartPage.ts';
import { StandardUser } from '../testdata/creds.ts';
import { log } from 'console';

// Declare the types of your fixtures.
type MyFixtures = {
  loginPage: LoginPage;
  cartPage: CartPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
      // Set up the fixture.
      const loginPage = new LoginPage(page);
      await loginPage.open();
      await loginPage.login(StandardUser.username, StandardUser.password);
      await loginPage.verifyLogin();
  
      // Use the fixture value in the test.
      await use(loginPage);
   },
  
    cartPage: async ({ page }, use) => {
      await use(new CartPage(page));
    },
  });
  export default test;
  export { expect } from '@playwright/test';
  