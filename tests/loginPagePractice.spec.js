const{ test, expect } = require('@playwright/test');
const {PageObjectManager} = require('./pages/PageObjectManager');
const { loginPracticePageUrl, dashboardPracticePageUrl } = require('./utils/constants');

let pageManager, loginpracpage
test.beforeEach(async({page})=>{
    pageManager = new PageObjectManager(page);
    loginpracpage = pageManager.getLoginPagePractice();
    // const url = "https://practicetestautomation.com/practice-test-login/"
    await loginpracpage.openLoginPracPage(loginPracticePageUrl);
})

test.only('to verify login', async()=>{
    await loginpracpage.performLogin("student","Password123");
    const dashboardPracticePage = pageManager.getdashboardPracticePage();
    await dashboardPracticePage.verifyURL(dashboardPracticePageUrl);
    await dashboardPracticePage.verifyDashboardMsgs();
})