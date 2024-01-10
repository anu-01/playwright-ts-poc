import { Page, Locator, expect } from "@playwright/test"
import { BasePage } from "./basePage.ts"
import {assertUrl} from "../../utils/assertionHelpers.ts"

export default class CartPage extends BasePage {
    readonly addproducts: Locator
    readonly removeproducts: Locator
    readonly cart: Locator
    readonly getItemsInCart : Locator
    readonly checkoutButton: Locator
    readonly firstNameCheckoutDetails: Locator
    readonly lastNameCheckoutDetails: Locator
    readonly postalCheckoutDetails: Locator
    readonly continueCheckout: Locator
    readonly finishCheckout: Locator 
    readonly continueShoppingButton: Locator
 

    constructor(page: Page) {
        super(page)
        this.addproducts = this.page.getByTestId('add-to-cart-sauce-labs-backpack');
        this.removeproducts = this.page.getByTestId('remove-sauce-labs-backpack');
        this.cart = this.page.locator('a').filter({ hasText: '1' });
        this.getItemsInCart = this.page.locator('a').filter({ hasText: '1' });
        this.checkoutButton = this.page.getByTestId('checkout');
        this.firstNameCheckoutDetails = this.page.getByTestId('firstName');
        this.lastNameCheckoutDetails = this.page.getByTestId('lastName');
        this.postalCheckoutDetails = this.page.getByTestId('postalCode');
        this.continueCheckout = this.page.getByTestId('continue');
        this.finishCheckout = this.page.getByTestId('finish');
        this.continueShoppingButton = this.page.getByTestId('continue-shopping');
    
    }

    async open() {
        await this.page.goto('https://www.saucedemo.com/inventory.html');
    }

    async addProductToCart( ProductName: string) {

        await this.addproducts.click()
    }

    async removeProductFromCart(ProductName: string) {
        await this.removeproducts.click();
    }

    async clickCart() {
        await this.cart.click();
        await assertUrl(this.page, 'cart.html');
        // await expect(this.page.url()).toContain('cart.html');
    }

    async validateProductsInCart(ProductName: string) {
        await this.page.getByText(ProductName).isVisible();
        return this.page.locator('a').filter({ hasText: ProductName });
    }

    async validateProductsInCartisNot(ProductName: string) {
        return expect(this.page.locator('a').allTextContents).not.toContain(ProductName );
    }
    async checkout() {
        await this.checkoutButton.click();
        await this.firstNameCheckoutDetails.fill('hello');
        await this.lastNameCheckoutDetails.fill('world');
        await this.postalCheckoutDetails.fill('254276');
        await this.continueCheckout.click();
        await this.finishCheckout.click();
        await assertUrl(this.page, 'checkout-complete.html');
        // await expect(this.page.url()).toContain('checkout-complete.html');
    }

    async continueShopping() {
        await this.continueShoppingButton.click();
    }

}
