const{ test } = require('@playwright/test');

const  { LoginPage} = require('./loginPage');


test('Direct Sign In Without Email and Password', async ({ page }) => {
    const loginPage = new LoginPage(page) ; 
    await loginPage.openLoginPage("https://rahulshettyacademy.com/locatorspractice/")
    await loginPage.clickSignIn();
    await loginPage.verifyError("* Incorrect username or password");
});

