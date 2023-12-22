import { Page, Locator, expect, test } from "@playwright/test"
import { log } from "console";
import { successLoginCredentials, failureLoginCredentials } from '../testdata/creds';   
const LoginPage = require('./loginPage');
const CartPage = require('./cartPage');

test.describe('Cart Functionality', () => {
    test('Add product to cart and checkout', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const cartPage = new CartPage();
        await loginPage.open();
        await loginPage.login(successLoginCredentials.username, successLoginCredentials.password);
        await cartPage.addProductToCart('Sauce Labs Backpack');
        await expect(cartPage.getProductsInCart()).toContain('Sauce Labs Backpack');
        await cartPage.checkout();        
    }   );   
    test('Remove product from cart', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const cartPage = new CartPage();
        await loginPage.open();
        await loginPage.login(successLoginCredentials.username, successLoginCredentials.password);
        await cartPage.addProductToCart('Sauce Labs Backpack');
        await cartPage.removeProductFromCart('Sauce Labs Backpack');
        await expect(cartPage.getProductsInCart()).not.toContain('Sauce Labs Backpack');
    }   );
    test('Continue shopping', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const cartPage = new CartPage();
        await loginPage.open();
        await loginPage.login(successLoginCredentials.username, successLoginCredentials.password);
        await cartPage.addProductToCart('Sauce Labs Backpack');
        await cartPage.continueShopping();
        await expect(page.url()).toContain('inventory.html');
    }   );
    test('Cancel checkout', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const cartPage = new CartPage();
        await loginPage.open();
        await loginPage.login(successLoginCredentials.username, successLoginCredentials.password);
        await cartPage.addProductToCart('Sauce Labs Backpack');
        await cartPage.checkout();
        await cartPage.cancelCheckout();
        await expect(page.url()).toContain('inventory.html');
    }   );
    
});

 
