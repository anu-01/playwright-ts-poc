import { test} from '..//fixtures/saucewebFixture.ts';
import { StandardUser } from '../testdata/creds.ts';   


test.describe.parallel('Login functionality', async () => { 
        test.beforeEach(async({ page, loginPage}) => {
        await loginPage.open();
        await loginPage.login(StandardUser.username, StandardUser.password);
        await loginPage.verifyLogin();
});
        test('First test', async({page, cartPage})=>{
            await page.getByAltText('Products').isVisible();
            await cartPage.addProductToCart('Sauce Labs Backpack');
            await cartPage.clickCart();
            await cartPage.validateProductsInCart('Sauce Labs Backpack');
            await cartPage.checkout();
        }
        )
    })