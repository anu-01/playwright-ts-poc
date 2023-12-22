import { Page, Locator, expect } from "@playwright/test"

class CartPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto('https://www.saucedemo.com/inventory.html');
    }

    async addProductToCart(productName: string) {
        await this.page.click(`button[id="add-to-cart-${productName}"]`);
    }

    async removeProductFromCart(productName: string) {
        await this.page.click(`button[id="remove-${productName}"]`);
    }

    async getProductsInCart() {
        return this.page.$$eval('.cart_item', items => items.map(item => item.textContent));
    }

    async checkout() {
        await this.page.click('.shopping_cart_link');
        await this.page.waitForSelector('.checkout_button');
        await this.page.click('.checkout_button');
    }
}

export default CartPage;