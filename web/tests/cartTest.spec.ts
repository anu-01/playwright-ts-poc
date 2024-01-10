import { Page, Locator, expect, test } from "@playwright/test"
import { log } from "console";
import { StandardUser, VisualUser } from '../testdata/creds.ts';
import LoginPage from "../pages/loginPage.ts";
import CartPage from "../pages/cartPage.ts";

test.describe('Cart Functionality for standard user', () => {
    let loginPage: LoginPage
    let cartPage: CartPage

    test.use({ storageState: 'playwright/.auth/standarduser.json' });

    test.beforeEach(async ({ page }) => {       
        cartPage = new CartPage(page);
        loginPage = new LoginPage(page);
        await loginPage.open();
        await loginPage.login(StandardUser.username, StandardUser.password);
        await loginPage.verifyLogin();
    })

    test('Add product to cart and checkout', async ({ page }) => { 
        // await page.goto('/');       
        await page.getByAltText('Products').isVisible();
        await cartPage.addProductToCart('Sauce Labs Backpack');
        await cartPage.clickCart();
        await cartPage.validateProductsInCart('Sauce Labs Backpack');
        await cartPage.checkout();
    });
    test('Remove product from cart', async ({ page }) => {
        await cartPage.addProductToCart('Sauce Labs Backpack');
        await cartPage.clickCart();
        await cartPage.removeProductFromCart('Sauce Labs Backpack');
        await cartPage.validateProductsInCartisNot('Sauce Labs Backpack');
    });
    test('Continue shopping', async ({ page }) => {
        await cartPage.addProductToCart('Sauce Labs Backpack');
        await cartPage.clickCart();
        await cartPage.continueShopping();
        await expect(page.url()).toContain('inventory.html');
    });

    test.afterEach(async ({ page }) => { 
        page.close();      
    })
});


test.describe('Cart Functionality for visual user', () => {
    let loginPage: LoginPage
    let cartPage: CartPage

    test.use({ storageState: 'playwright/.auth/visualuser.json' });

    test.beforeEach(async ({ page }) => {       
        cartPage = new CartPage(page);
        loginPage = new LoginPage(page);
        await loginPage.open();
        await loginPage.login(VisualUser.username, VisualUser.password);
        await loginPage.verifyLogin();
    })

    test('Add product to cart and checkout', async ({ page }) => { 
        // await page.goto('/');       
        await page.getByAltText('Products').isVisible();
        await cartPage.addProductToCart('Sauce Labs Backpack');
        await cartPage.clickCart();
        await cartPage.validateProductsInCart('Sauce Labs Backpack');
        await cartPage.checkout();
    });
    test('Remove product from cart', async ({ page }) => {
        await cartPage.addProductToCart('Sauce Labs Backpack');
        await cartPage.clickCart();
        await cartPage.removeProductFromCart('Sauce Labs Backpack');
        await cartPage.validateProductsInCartisNot('Sauce Labs Backpack');
    });
    test('Continue shopping', async ({ page }) => {
        await cartPage.addProductToCart('Sauce Labs Backpack');
        await cartPage.clickCart();
        await cartPage.continueShopping();
        await expect(page.url()).toContain('inventory.html');
    });

    test.afterEach(async ({ page }) => { 
        page.close();      
    })
});


