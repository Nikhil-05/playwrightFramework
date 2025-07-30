import { expect } from "@playwright/test";

class dashboardPracticePage{

    constructor(page){
       this.page = page;
       this.loginSuccess = page.locator('.post-title');
       this.congratsMsg = page.getByText('Congratulations student. You successfully logged in!');

    }

    async verifyURL(url){
        await expect(this.page).toHaveURL(url);
    }

    async verifyDashboardMsgs(){
        await expect(this.loginSuccess).toBeVisible();
        await expect(this.congratsMsg).toBeVisible();
    }
}

module.exports = {dashboardPracticePage}