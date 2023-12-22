import { Page, Locator, expect, test } from "@playwright/test"
import { log } from "console";
import { successLoginCredentials, failureLoginCredentials } from '../testdata/creds.ts';   
import LoginPage from "../pages/loginPage.ts";
import CartPage from "../pages/cartPage.ts";

test.use({ storageState: '.auth/standard_user.json' });

test.describe('Cart Functionality', () => {
    test('Add product to cart and checkout', async ({ page }) => {
        // const loginPage = new LoginPage(page);
        const cartPage = new CartPage(page);
        // await loginPage.open();
        // await loginPage.login(successLoginCredentials.username, successLoginCredentials.password);
        await page.goto('/');
        await page.waitForURL('https://www.saucedemo.com/inventory.html');
        await cartPage.addProductToCart('Sauce Labs Backpack');
        await cartPage.clickCart();
        await cartPage.validateProductsInCart('Sauce Labs Backpack');
        await cartPage.checkout();        
    }   );   
    test('Remove product from cart', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const cartPage = new CartPage(page);
        await loginPage.open();
        await loginPage.login(successLoginCredentials.username, successLoginCredentials.password);
        await cartPage.addProductToCart('Sauce Labs Backpack');
        await cartPage.clickCart();
        await cartPage.removeProductFromCart('Sauce Labs Backpack');
        await cartPage.validateProductsInCartisNot('Sauce Labs Backpack');
    }   );
    test('Continue shopping', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const cartPage = new CartPage(page);
        await loginPage.open();
        await loginPage.login(successLoginCredentials.username, successLoginCredentials.password);
        await cartPage.addProductToCart('Sauce Labs Backpack');  
        await cartPage.clickCart();
        await cartPage.continueShopping();
        await expect(page.url()).toContain('inventory.html');
    }   );

    
});

 
