const{ test, expect } = require('@playwright/test');

const {PageObjectManager} = require('./pages/PageObjectManager');
const { uiElementPageUrl } = require('./utils/constants');

let pageManager, uiElementPage
test.beforeEach(async({page})=>{
    pageManager = new PageObjectManager(page);
    uiElementPage = pageManager.getUiElementPage();
    await uiElementPage.openUiElementPageUrl(uiElementPageUrl)
})

test('The link is blinking', async()=>{

   await uiElementPage.linkIsBlinking();

})