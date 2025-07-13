const{ test } = require('@playwright/test');

const  { LoginPage} = require('./pages/LoginPage');
const { loginPageUrl, invalidLoginError, username, incorrectPassword } = require('./utils/constants');
const { DashboardPage } = require('./pages/DashboardPage');

let loginPage
test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.openLoginPage(loginPageUrl);
});

test('Direct Sign In Without Email and Password', async () => {
    await loginPage.clickSignIn();
    await loginPage.verifyError(invalidLoginError);
});


test('Sign in With Only Username', async () => {
    await loginPage.fillUsername(username);
    await loginPage.clickSignIn();
    await loginPage.verifyError(invalidLoginError);
});

test('Sign in only with password', async()=>{
    await loginPage.fillPassword(incorrectPassword);
    await loginPage.clickSignIn();
    await loginPage.verifyError(invalidLoginError);
})

test('Sign in with incorrect username and password', async()=>{
    await loginPage.fillUsername(username);
    await loginPage.fillPassword(incorrectPassword);
    await loginPage.clickSignIn();
    await loginPage.verifyError(invalidLoginError);
});

test('Valid sign in using forgot password', async({page})=>{
    await loginPage.clickForgotYourPass();
    await loginPage.clickRstLogin();
    let ogPass = await loginPage.extractPasswordFromInfo();
    await loginPage.clickGoToLogin();
    await loginPage.fillUsername(username);
    await loginPage.fillPassword(ogPass);
    await loginPage.clickSignIn();
    const  dashboardPage = new DashboardPage(page);
    await dashboardPage.extractAndVerifyHelloText();
});





