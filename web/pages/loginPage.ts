import { Page, Locator, expect } from "@playwright/test"
import { BasePage } from "./basePage.ts"
import {assertUrl} from "../../utils/assertionHelpers.ts"

export default class LoginPage extends BasePage {
    readonly emailEl: Locator
    readonly pwdEl: Locator
    readonly loginBtn: Locator

    constructor(page: Page) {
        super(page)
        this.emailEl = this.page.getByTestId('username')
        this.pwdEl = this.page.getByTestId('password')
        this.loginBtn = this.page.getByTestId('login-button')
       // this.loginBtn = this.page.getByRole('button', { name: 'Sign in' })

    }

    async open() {
        await this.page.goto('/');
    }
    async enterUsername(strUser: string) {
        await this.emailEl.fill(strUser)
    }
    async enterPassword(strPwd: string) {
        await this.pwdEl.fill(strPwd)
    }
    async clickLoginBtn() {
        await this.loginBtn.click()
    }
    async login(strUser: string, strPwd: string) {
        await this.enterUsername(strUser)
        await this.enterPassword(strPwd)
        await this.clickLoginBtn();
    }
    async verifyLogin() {
        const actualUrl = await this.page.url();
        await assertUrl(this.page, 'inventory.html');
        // expect(actualUrl).toContain('inventory.html');
    }
    async verifyErrorMessage(expectedErrorMessage: string) {
        const actualErrorMessage = await this.page.getByTestId('error').textContent();
        expect(actualErrorMessage).toBe(expectedErrorMessage);
    }
}