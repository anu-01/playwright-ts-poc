import { test, expect, Page, Browser, chromium } from '@playwright/test';
import LoginPage  from "../pages/loginPage";
//import { successLoginCredentials, failureLoginCredentials } from '../testdata/creds';   
import { log } from 'console';  

test.describe('Login functionality', () => {
    test('successful login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.open();
       // await loginPage.login(successLoginCredentials.username, successLoginCredentials.password);
       await loginPage.login('standard_user', 'secret_sauce');
        await loginPage.verifyLogin();
    } );

    test('unsuccessful login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.open();
        await loginPage.login('standard_user', 'secret11_sauce');
       // await loginPage.login(failureLoginCredentials.username, failureLoginCredentials.password);
        await loginPage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');
    } );

}   );