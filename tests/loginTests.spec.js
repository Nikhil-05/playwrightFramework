const{ test } = require('@playwright/test');

const { loginPageUrl, invalidLoginError, username, incorrectPassword } = require('./utils/constants');
const {PageObjectManager} = require('./pages/PageObjectManager');

let loginPage
let pageManager;
test.beforeEach(async ({page}) => {
    pageManager = new PageObjectManager(page);
    loginPage = pageManager.getLoginPage();
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
    const  dashboardPage = pageManager.getDashboardPage();
    await dashboardPage.extractAndVerifyHelloText();
});





