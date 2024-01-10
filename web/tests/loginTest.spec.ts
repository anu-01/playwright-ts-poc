import { test as base, expect, Page, Browser, chromium } from '@playwright/test';
import LoginPage from "../pages/loginPage.ts";
import { StandardUser, failureLoginCredentials } from '../testdata/creds.ts';   
import { log } from 'console';  

base.describe('Login functionality', () => {
    const successtest = base.extend<{ loginPage: LoginPage }>({
        loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.open();
        await loginPage.login(StandardUser.username, StandardUser.password);
        await loginPage.verifyLogin();
    },
});

        const test = base.extend<{ loginPage: LoginPage }>({
            loginPage: async ({ page }, use) => {
            const loginPage = new LoginPage(page);
            await loginPage.open();
            await loginPage.login(failureLoginCredentials.username, failureLoginCredentials.password);
            await loginPage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
    },
});
});